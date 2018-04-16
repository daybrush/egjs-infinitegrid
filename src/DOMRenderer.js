import {
	APPEND,
	PREPEND,
	DUMMY_POSITION,
	MULTI,
	GROUPKEY_ATT,
	CONTAINER_CLASSNAME,
	DEFENSE_BROWSER,
} from "./consts";
import {
	$,
	innerHeight,
	innerWidth,
	getStyles,
	addEvent,
	removeEvent,
} from "./utils";

const [TRANSFORM, TRANSITION, TRANSITION_END] = (function() {
	const properties = {
		transitionend: "",
		webkitTransitionEnd: "-webkit-",
		oTransitionEnd: "-o-",
		mozTransitionEnd: "-moz-",
	};

	for (const property in properties) {
		const prefix = properties[property];

		if (`on${property.toLowerCase()}` in window) {
			return [`${prefix}transform`, `${prefix}transition`, property];
		}
	}
	return [];
})();

function _defense(element) {
	const container = document.createElement("div");

	container.className = CONTAINER_CLASSNAME;
	container.style.position = "relative";
	container.style.height = "100%";

	const children = element.children;
	const length = children.length;	// for IE8

	for (let i = 0; i < length; i++) {
		container.appendChild(children[0]);
	}

	element.appendChild(container);
	return container;
}
function render(properteis, rect, styles) {
	properteis.forEach(p => {
		(p in rect) && (styles[p] = `${rect[p]}px`);
	});
}
function setTransition(styles, transitionDuration, x, y) {
	styles[`${TRANSITION}-property`] = transitionDuration ? `${TRANSFORM},width,height` : "";
	styles[`${TRANSITION}-duration`] = transitionDuration ? `${transitionDuration}s` : "";
	styles[`${TRANSITION}-delay`] = transitionDuration ? `0s` : "";
	styles[`${TRANSITION}-timing-function`] = transitionDuration ? `ease` : "";
	styles[TRANSFORM] = transitionDuration ? `translate(${x}px,${y}px)` : "";
}

export default class DOMRenderer {
	static renderItem(item, rect, transitionDuration) {
		if (!item.el) {
			return;
		}
		const {el, renderRect} = item;
		const styles = el.style;

		// for debugging
		el.setAttribute(GROUPKEY_ATT, item.groupKey);
		styles.position = "absolute";
		render(["width", "height"], rect, styles);
		if (transitionDuration && TRANSITION && renderRect) {
			setTransition(styles, transitionDuration,
				rect.left - renderRect.left, rect.top - renderRect.top);
			if (item.transition) {
				return;
			}
			item.transition = () => {
				const itemRect = item.rect;

				setTransition(styles);
				render(["left", "top"], itemRect, styles);
				item.renderRect = itemRect;
				removeEvent(el, TRANSITION_END, item.transition);
				item.transition = 0;
			};
			addEvent(el, TRANSITION_END, item.transition);
		} else {
			render(["left", "top"], rect, styles);
			item.renderRect = rect;
		}
	}
	static renderItems(items, transitionDuration = 0) {
		items.forEach(item => {
			DOMRenderer.renderItem(item, item.rect, transitionDuration);
		});
	}
	static removeItems(items) {
		items.forEach(item => {
			if (item.el) {
				DOMRenderer.removeElement(item.el);
				item.el = null;
				item.rendRect = null;
			}
		});
	}
	static removeElement(element) {
		const parentNode = element && element.parentNode;

		if (!parentNode) {
			return;
		}
		parentNode.removeChild(element);
	}
	static createElements(items) {
		if (!items.length || items[0].el) {
			return items;
		}
		const elements = $(items.map(({content}) =>
			content.replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, "")).join(""), MULTI);

		return items.map((item, index) => {
			item.el = elements[index];
			return item;
		});
	}
	constructor(element, options) {
		Object.assign(this.options = {
			isOverflowScroll: false,
			isEqualSize: false,
			horizontal: false,
		}, options);
		this._size = {
			container: -1,
			view: -1,
			viewport: -1,
			item: null,
		};
		this._init(element);
		this.resize();
	}
	getStatus() {
		return {
			cssText: this.container.style.cssText,
			options: Object.assign({}, this.options),
			_size: Object.assign({}, this._size),
		};
	}
	setStatus(status) {
		this.container.style.cssText = status.cssText;
		Object.assign(this.options, status.options);
		Object.assign(this._size, status._size);
	}
	updateSize(items) {
		return items.map(item => {
			const el = item.el;

			if (el) {
				if (this.options.isEqualSize) {
					this._size.item = this._size.item || {
						width: innerWidth(el),
						height: innerHeight(el),
					};
					item.size = Object.assign({}, this._size.item);
				} else {
					item.size = {
						width: innerWidth(el),
						height: innerHeight(el),
					};
				}
				if (!item.orgSize) {
					item.orgSize = Object.assign({}, item.size);
				}
			}
			return item;
		});
	}
	_init(el) {
		const element = $(el);
		const style = getStyles(element);
		const {isOverflowScroll, horizontal} = this.options;

		this._orgStyle = {};

		if (style.position === "static") {
			this._orgStyle.position = element.style.position;
			element.style.position = "relative";
		}
		if (isOverflowScroll) {
			const target = horizontal ? ["X", "Y"] : ["Y", "X"];

			this._orgStyle.overflowX = element.style.overflowX;
			this._orgStyle.overflowY = element.style.overflowY;
			element.style[`overflow${target[0]}`] = "scroll";
			element.style[`overflow${target[1]}`] = "hidden";
			this.view = element;
			// defense code for android < 4.4 or webkit < 537
			this.container = horizontal && DEFENSE_BROWSER ? _defense(element) : element;
		} else {
			this.view = window;
			this.container = element;
		}
	}
	append(items) {
		this._insert(items, APPEND, {
			top: DUMMY_POSITION,
			left: DUMMY_POSITION,
		});
	}
	prepend(items) {
		this._insert(items, PREPEND, {
			top: DUMMY_POSITION,
			left: DUMMY_POSITION,
		});
	}
	clear() {
		this.container.innerHTML = "";
		if (!this.options.isOverflowScroll) {
			this.container.style[this.options.horizontal ? "width" : "height"] = "";
		}
		this._size = {
			item: null,
			viewport: -1,
			container: -1,
			view: -1,
		};
	}
	createAndInsert(items, isAppend) {
		const itemsWithElement = DOMRenderer.createElements(items);

		DOMRenderer.renderItems(itemsWithElement);
		this._insert(itemsWithElement, isAppend);
	}
	_insert(items, isAppend, styles) {
		const container = this.container;
		const df = document.createDocumentFragment();

		items.forEach(item => {
			styles && DOMRenderer.renderItem(item, styles);
			isAppend ? df.appendChild(item.el) : df.insertBefore(item.el, df.firstChild);
		});
		isAppend ?
			container.appendChild(df) :
			container.insertBefore(df, container.firstChild);
	}
	_calcSize() {
		return this.options.horizontal ?
			innerHeight(this.container) : innerWidth(this.container);
	}
	getViewSize() {
		return this._size.view;
	}
	getViewportSize() {
		return this._size.viewport;
	}
	setContainerSize(size) {
		const {isOverflowScroll, horizontal} = this.options;

		if (!isOverflowScroll || (horizontal && DEFENSE_BROWSER)) {
			this.container.style[horizontal ? "width" : "height"] = `${size}px`;
		}
	}
	resize() {
		const horizontal = this.options.horizontal;
		const view = this.view;
		const isResize = this.isNeededResize();

		if (isResize) {
			this._size = {
				viewport: this._calcSize(),
				item: null,
			};
		}
		this._size.view = horizontal ? innerWidth(view) : innerHeight(view);
		return isResize;
	}
	isNeededResize() {
		return this._calcSize() !== this._size.viewport;
	}
	destroy() {
		this._size = {
			viewport: -1,
			view: -1,
			item: null,
		};
		this.container.style[this.options.horizontal ? "width" : "height"] = "";
		for (const p in this._orgStyle) {
			this[this.options.isOverflowScroll ? "view" : "container"].style[p] = this._orgStyle[p];
		}
	}
}

