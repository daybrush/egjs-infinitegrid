/*!
 * Copyright (c) 2017 NAVER Corp.
 * @egjs/infinitegrid project is licensed under the MIT license
 * 
 * @egjs/infinitegrid JavaScript library
 * https://github.com/naver/egjs-infinitegrid
 * 
 * @version 2.1.1-snapshot
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@egjs/component"));
	else if(typeof define === 'function' && define.amd)
		define(["@egjs/component"], factory);
	else if(typeof exports === 'object')
		exports["InfiniteGrid"] = factory(require("@egjs/component"));
	else
		root["eg"] = root["eg"] || {}, root["eg"]["InfiniteGrid"] = factory(root["eg"]["Component"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_7__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ALIGN = exports.DEFAULT_OPTIONS = exports.GROUPKEY_ATT = exports.DUMMY_POSITION = exports.SINGLE = exports.MULTI = exports.NO_TRUSTED = exports.TRUSTED = exports.NO_CACHE = exports.CACHE = exports.HORIZONTAL = exports.VERTICAL = exports.PREPEND = exports.APPEND = exports.CONTAINER_CLASSNAME = exports.RETRY = exports.IS_ANDROID2 = exports.IS_IOS = exports.IS_IE = exports.SUPPORT_PASSIVE = exports.SUPPORT_ADDEVENTLISTENER = exports.SUPPORT_COMPUTEDSTYLE = undefined;

var _browser = __webpack_require__(2);

var ua = _browser.window.navigator.userAgent;

var SUPPORT_COMPUTEDSTYLE = exports.SUPPORT_COMPUTEDSTYLE = !!("getComputedStyle" in _browser.window);
var SUPPORT_ADDEVENTLISTENER = exports.SUPPORT_ADDEVENTLISTENER = !!("addEventListener" in document);
var SUPPORT_PASSIVE = exports.SUPPORT_PASSIVE = function () {
	var supportsPassiveOption = false;

	try {
		if (SUPPORT_ADDEVENTLISTENER && Object.defineProperty) {
			document.addEventListener("test", null, Object.defineProperty({}, "passive", {
				get: function get() {
					supportsPassiveOption = true;
				}
			}));
		}
	} catch (e) {}
	return supportsPassiveOption;
}();

var IS_IE = exports.IS_IE = /MSIE|Trident|Windows Phone|Edge/.test(ua);
var IS_IOS = exports.IS_IOS = /iPhone|iPad/.test(ua);
var IS_ANDROID2 = exports.IS_ANDROID2 = /Android 2\./.test(ua);
var RETRY = exports.RETRY = 3;
var CONTAINER_CLASSNAME = exports.CONTAINER_CLASSNAME = "_eg-infinitegrid-container_";

var APPEND = exports.APPEND = true;
var PREPEND = exports.PREPEND = false;
var VERTICAL = exports.VERTICAL = "vertical";
var HORIZONTAL = exports.HORIZONTAL = "horizontal";
var CACHE = exports.CACHE = true;
var NO_CACHE = exports.NO_CACHE = false;
var TRUSTED = exports.TRUSTED = true;
var NO_TRUSTED = exports.NO_TRUSTED = false;
var MULTI = exports.MULTI = true;
var SINGLE = exports.SINGLE = false;
var DUMMY_POSITION = exports.DUMMY_POSITION = -100000;
var GROUPKEY_ATT = exports.GROUPKEY_ATT = "data-groupkey";

var DEFAULT_OPTIONS = exports.DEFAULT_OPTIONS = {
	direction: VERTICAL,
	margin: 0
};

var ALIGN = exports.ALIGN = {
	START: "start",
	CENTER: "center",
	END: "end",
	JUSTIFY: "justify"
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.STYLE = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.toArray = toArray;
exports.fill = fill;
exports.$ = $;
exports.addEvent = addEvent;
exports.removeEvent = removeEvent;
exports.scroll = scroll;
exports.scrollTo = scrollTo;
exports.scrollBy = scrollBy;
exports.innerWidth = innerWidth;
exports.innerHeight = innerHeight;
exports.getStyleNames = getStyleNames;
exports.assignOptions = assignOptions;
exports.toZeroArray = toZeroArray;

var _browser = __webpack_require__(2);

var _consts = __webpack_require__(0);

function toArray(nodes) {
	// SCRIPT5014 in IE8
	var array = [];

	if (nodes) {
		for (var i = 0, len = nodes.length; i < len; i++) {
			array.push(nodes[i]);
		}
	}
	return array;
}
function fill(length, value) {
	var array = (typeof length === "undefined" ? "undefined" : _typeof(length)) === "object" ? length : new Array(length);
	var len = array.length;

	for (var i = len - 1; i >= 0; --i) {
		array[i] = value;
	}
	return array;
}
/**
 * Select or create element
 * @param {String|HTMLElement|jQuery} param
 *  when string given is as HTML tag, then create element
 *  otherwise it returns selected elements
 * @param {Boolean} multi
 * @returns {HTMLElement}
 */
function $(param) {
	var multi = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	var el = void 0;

	if (typeof param === "string") {
		// String (HTML, Selector)
		// check if string is HTML tag format
		var match = param.match(/^<([a-z]+)\s*([^>]*)>/);

		// creating element
		if (match) {
			// HTML
			var dummy = _browser.document.createElement("div");

			dummy.innerHTML = param;
			el = toArray(dummy.childNodes);
		} else {
			// Selector
			el = toArray(_browser.document.querySelectorAll(param));
		}
		if (!multi) {
			el = el.length >= 1 ? el[0] : undefined;
		}
	} else if (param === _browser.window) {
		// window
		el = param;
	} else if (param.nodeName && (param.nodeType === 1 || param.nodeType === 9)) {
		// HTMLElement, Document
		el = param;
	} else if ("jQuery" in _browser.window && param instanceof jQuery || param.constructor.prototype.jquery) {
		// jQuery
		el = multi ? param.toArray() : param.get(0);
	} else if (Array.isArray(param)) {
		el = param.map(function (v) {
			return $(v);
		});
		if (!multi) {
			el = el.length >= 1 ? el[0] : undefined;
		}
	}
	return el;
}
function addEvent(element, type, handler, eventListenerOptions) {
	if (_consts.SUPPORT_ADDEVENTLISTENER) {
		var options = eventListenerOptions || false;

		if ((typeof eventListenerOptions === "undefined" ? "undefined" : _typeof(eventListenerOptions)) === "object") {
			options = _consts.SUPPORT_PASSIVE ? eventListenerOptions : false;
		}
		element.addEventListener(type, handler, options);
	} else if (element.attachEvent) {
		element.attachEvent("on" + type, handler);
	} else {
		element["on" + type] = handler;
	}
}
function removeEvent(element, type, handler) {
	if (element.removeEventListener) {
		element.removeEventListener(type, handler, false);
	} else if (element.detachEvent) {
		element.detachEvent("on" + type, handler);
	} else {
		element["on" + type] = null;
	}
}
function scroll(el, isVertical) {
	var prop = "scroll" + (isVertical ? "Top" : "Left");

	if (el === _browser.window) {
		return _browser.document.body[prop] || _browser.document.documentElement[prop];
	} else {
		return el[prop];
	}
}
function scrollTo(el, x, y) {
	if (el === _browser.window) {
		el.scroll(x, y);
	} else {
		el.scrollLeft = x;
		el.scrollTop = y;
	}
}
function scrollBy(el, x, y) {
	if (el === _browser.window) {
		el.scrollBy(x, y);
	} else {
		el.scrollLeft += x;
		el.scrollTop += y;
	}
}
function _getSize(el, name) {
	if (el === _browser.window) {
		// WINDOW
		return el.document.documentElement["client" + name];
	} else if (el.nodeType === 9) {
		// DOCUMENT_NODE
		var doc = el.documentElement;

		return Math.max(el.body["scroll" + name], doc["scroll" + name], el.body["offset" + name], doc["offset" + name], doc["client" + name]);
	} else {
		// NODE
		var style = _consts.SUPPORT_COMPUTEDSTYLE ? _browser.window.getComputedStyle(el) : el.currentStyle;
		var value = style[name.toLowerCase()];

		return parseFloat(/auto|%/.test(value) ? el["offset" + name] : style[name.toLowerCase()]);
	}
}
function innerWidth(el) {
	return _getSize(el, "Width");
}
function innerHeight(el) {
	return _getSize(el, "Height");
}

var STYLE = exports.STYLE = {
	vertical: {
		pos1: "top",
		endPos1: "bottom",
		size1: "height",
		pos2: "left",
		endPos2: "right",
		size2: "width"
	},
	horizontal: {
		pos1: "left",
		endPos1: "right",
		size1: "width",
		pos2: "top",
		endPos2: "bottom",
		size2: "height"
	}
};

function getStyleNames(direction) {
	var style = STYLE[direction in STYLE ? direction : _consts.VERTICAL];

	return style;
}

function assignOptions(defaultOptions, options) {
	return _extends({}, _consts.DEFAULT_OPTIONS, defaultOptions, options);
}

function toZeroArray(outline) {
	if (!outline || !outline.length) {
		return [0];
	}
	return outline;
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/* eslint-disable no-new-func, no-nested-ternary */
var win = typeof window !== "undefined" && window.Math === Math ? window : typeof self !== "undefined" && self.Math === Math ? self : Function("return this")();
/* eslint-enable no-new-func, no-nested-ternary */

exports.window = win;
var document = exports.document = win.document;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _consts = __webpack_require__(0);

var _utils = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DOMRenderer = function () {
	DOMRenderer.renderItem = function renderItem(item, styles) {
		if (item.el) {
			var elStyle = item.el.style;

			// for debugging
			item.el.setAttribute(_consts.GROUPKEY_ATT, item.groupKey);
			elStyle.position = "absolute";
			["left", "top", "width", "height"].forEach(function (p) {
				p in styles && (elStyle[p] = styles[p] + "px");
			});
		}
	};

	DOMRenderer.renderItems = function renderItems(items) {
		items.forEach(function (item) {
			DOMRenderer.renderItem(item, item.rect);
		});
	};

	DOMRenderer.removeItems = function removeItems(items) {
		items.forEach(function (item) {
			if (item.el) {
				DOMRenderer.removeElement(item.el);
				item.el = null;
			}
		});
	};

	DOMRenderer.removeElement = function removeElement(element) {
		element.parentNode.removeChild(element);
	};

	DOMRenderer.createElements = function createElements(items) {
		var elements = (0, _utils.$)(items.reduce(function (acc, v) {
			return acc.concat(v.content);
		}, []).join(""), _consts.MULTI);

		return items.map(function (item, index) {
			item.el = elements[index];
			return item;
		});
	};

	function DOMRenderer(element, options) {
		_classCallCheck(this, DOMRenderer);

		_extends(this.options = {
			isOverflowScroll: false,
			isEqualSize: false,
			isVertical: true
		}, options);
		this._size = {
			containerOffset: 0,
			container: -1,
			view: -1,
			item: null
		};
		this._init(element);
		this.resize();
	}

	DOMRenderer.prototype.getStatus = function getStatus() {
		return {
			cssText: this.container.style.cssText,
			options: _extends({}, this.options),
			_size: _extends({}, this._size)
		};
	};

	DOMRenderer.prototype.setStatus = function setStatus(status, items) {
		this.container.style.cssText = status.cssText;
		_extends(this.options, status.options);
		_extends(this._size, status._size);

		DOMRenderer.renderItems(items);
		this._insert(items, _consts.APPEND);
	};

	DOMRenderer.prototype.updateSize = function updateSize(items) {
		var _this = this;

		return items.map(function (item) {
			if (item.el) {
				if (_this.options.isEqualSize) {
					_this._size.item = _this._size.item || {
						width: (0, _utils.innerWidth)(item.el),
						height: (0, _utils.innerHeight)(item.el)
					};
				} else {
					item.size = {
						width: (0, _utils.innerWidth)(item.el),
						height: (0, _utils.innerHeight)(item.el)
					};
				}
			}
			return item;
		});
	};

	DOMRenderer.prototype._init = function _init(el) {
		var element = (0, _utils.$)(el);

		if (element.style.position === "static") {
			element.style.position = "relative";
		}

		if (this.options.isOverflowScroll) {
			var container = element.querySelector("." + _consts.CONTAINER_CLASSNAME);

			if (!container) {
				container = document.createElement("div");
				container.className = _consts.CONTAINER_CLASSNAME;

				var children = element.children;
				var length = children.length; // for IE8
				var target = this.options.isVertical ? ["Y", "X"] : ["X", "Y"];

				for (var i = 0; i < length; i++) {
					container.appendChild(children[0]);
				}

				element.style["overflow" + target[0]] = "scroll";
				element.style["overflow" + target[1]] = "hidden";
				element.appendChild(container);
			}
			this.view = element;
			this.container = container;
		} else {
			this.view = window;
			this.container = element;
		}
	};

	DOMRenderer.prototype.append = function append(items) {
		this._insert(items, _consts.APPEND, {
			top: _consts.DUMMY_POSITION
		});
	};

	DOMRenderer.prototype.prepend = function prepend(items) {
		this._insert(items, _consts.PREPEND, {
			top: _consts.DUMMY_POSITION
		});
	};

	DOMRenderer.prototype.clear = function clear() {
		this.container.innerHTML = "";
		this.container.style[this.options.isVertical ? "height" : "width"] = "";
		this._size = {
			containerOffset: 0,
			container: -1,
			view: -1
		};
	};

	DOMRenderer.prototype.createAndInsert = function createAndInsert(items, isAppend) {
		var itemsWithElement = DOMRenderer.createElements(items);

		DOMRenderer.renderItems(itemsWithElement);
		this._insert(itemsWithElement, isAppend);
	};

	DOMRenderer.prototype._insert = function _insert(items, isAppend, styles) {
		var df = document.createDocumentFragment();

		items.forEach(function (item) {
			styles && DOMRenderer.renderItem(item, styles);
			isAppend ? df.appendChild(item.el) : df.insertBefore(item.el, df.firstChild);
		});
		isAppend ? this.container.appendChild(df) : this.container.insertBefore(df, this.container.firstChild);
	};

	DOMRenderer.prototype._calcSize = function _calcSize() {
		return this.options.isVertical ? (0, _utils.innerWidth)(this.container) : (0, _utils.innerHeight)(this.container);
	};

	DOMRenderer.prototype.getViewSize = function getViewSize() {
		return this._size.view;
	};

	DOMRenderer.prototype.scrollBy = function scrollBy(point) {
		var pos = this.options.isVertical ? [0, point] : [point, 0];

		_utils.scrollBy.apply(undefined, [this.view].concat(pos));
	};

	DOMRenderer.prototype.getContainerOffset = function getContainerOffset() {
		return this._size.containerOffset;
	};

	DOMRenderer.prototype.getContainerSize = function getContainerSize() {
		this.resize();
		return this._size.container;
	};

	DOMRenderer.prototype.setContainerSize = function setContainerSize(size) {
		this.container.style[this.options.isVertical ? "height" : "width"] = size + "px";
	};

	DOMRenderer.prototype.resize = function resize() {
		if (this.isNeededResize()) {
			var isVertical = this.options.isVertical;

			this._size = {
				containerOffset: this.container["offset" + (isVertical ? "Top" : "Left")],
				container: this._calcSize(),
				view: isVertical ? (0, _utils.innerHeight)(this.view) : (0, _utils.innerWidth)(this.view),
				item: null
			};
			return true;
		}
		return false;
	};

	DOMRenderer.prototype.isNeededResize = function isNeededResize() {
		return this._calcSize() !== this._size.container;
	};

	DOMRenderer.prototype.destroy = function destroy() {
		this._size = {
			containerOffset: 0,
			container: -1,
			view: -1,
			item: null
		};
	};

	return DOMRenderer;
}();

exports["default"] = DOMRenderer;
module.exports = exports["default"];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _consts = __webpack_require__(0);

var _utils = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var START = _consts.ALIGN.START,
    CENTER = _consts.ALIGN.CENTER,
    END = _consts.ALIGN.END;

/*
Frame
[
[1, 1, 1, 1, 1],
[0, 0, 2, 2, 2],
[0, 0, 2, 2, 2],
[3, 4, 5, 5, 5],
]
*/

function disableFrame(frame, type, x, y, width, height) {
	for (var i = y; i < y + height; ++i) {
		for (var j = x; j < x + width; ++j) {
			if (type !== frame[i][j]) {
				continue;
			}
			frame[i][j] = 0;
		}
	}
}
function searchShapeInFrame(frame, type, top, left, width, height) {
	var size = {
		left: left,
		top: top,
		type: type,
		width: 1,
		height: 1
	};

	for (var i = left; i < width; ++i) {
		if (frame[top][i] === type) {
			size.width = i - left + 1;
			continue;
		}
		break;
	}
	for (var _i = top; _i < height; ++_i) {
		if (frame[_i][left] === type) {
			size.height = _i - top + 1;
			continue;
		}
		break;
	}
	// After finding the shape, it will not find again.
	disableFrame(frame, type, left, top, size.width, size.height);
	return size;
}
function getShapes(frame) {
	var height = frame.length;
	var width = height ? frame[0].length : 0;
	var shapes = [];

	for (var i = 0; i < height; ++i) {
		for (var j = 0; j < width; ++j) {
			var type = frame[i][j];

			if (!type) {
				continue;
			}
			// Separate shapes with other numbers.
			shapes.push(searchShapeInFrame(frame, type, i, j, width, height));
		}
	}
	shapes.sort(function (a, b) {
		return a.type < b.type ? -1 : 1;
	});
	return {
		shapes: shapes,
		width: width,
		height: height
	};
}

var FrameLayout = function () {
	function FrameLayout() {
		var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		_classCallCheck(this, FrameLayout);

		this.options = (0, _utils.assignOptions)({
			itemSize: 0,
			frame: [],
			fitSize: 0,
			align: START,
			frameFill: true
		}, options);
		var frame = this.options.frame.map(function (row) {
			return row.slice();
		});
		// divide frame into shapes.
		var shapes = getShapes(frame);

		this._itemSize = this.options.itemSize || 0;
		this._shapes = shapes;
		this._size = 0;
		this._style = (0, _utils.getStyleNames)(this.options.direction);
	}

	FrameLayout.prototype._getItemSize = function _getItemSize() {
		this._checkItemSize();

		return this._itemSize;
	};

	FrameLayout.prototype._checkItemSize = function _checkItemSize() {
		if (this.options.itemSize) {
			this._itemSize = this.options.itemSize;
			return;
		}
		var style = this._style;
		var size = style.size2;
		var margin = this.options.margin;

		// if itemSize is not in options, caculate itemSize from size.
		this._itemSize = (this._size + margin) / this._shapes[size] - margin;
	};

	FrameLayout.prototype._layout = function _layout(items) {
		var outline = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
		var isAppend = arguments[2];

		var length = items.length;
		var style = this._style;
		var _options = this.options,
		    margin = _options.margin,
		    align = _options.align,
		    frameFill = _options.frameFill;

		var size1Name = style.size1;
		var size2Name = style.size2;
		var pos1Name = style.pos1;
		var pos2Name = style.pos2;
		var itemSize = this._getItemSize();
		var isItemObject = (typeof itemSize === "undefined" ? "undefined" : _typeof(itemSize)) === "object";
		var itemSize2 = isItemObject ? itemSize[size2Name] : itemSize;
		var itemSize1 = isItemObject ? itemSize[size1Name] : itemSize;
		var shapesSize = this._shapes[size2Name];
		var shapes = this._shapes.shapes;
		var shapesLength = shapes.length;
		var startOutline = new Array(shapesSize).fill(-1);
		var endOutline = new Array(shapesSize).fill(0);
		var shapesSize1 = shapes.height * (itemSize1 + margin) - margin;
		var fitSize = this.options.fitSize;
		var fitStartPos = 0;

		if (fitSize < shapesSize1) {
			fitSize = 0;
		}
		if (fitSize) {
			if (align === CENTER) {
				fitStartPos = (fitSize - shapesSize1) / 2;
			} else if (align === END) {
				fitStartPos = fitSize - shapesSize1;
			}
		}
		var dist = 0;
		var end = 0;
		var startIndex = -1;
		var endIndex = -1;
		var minPos = -1;
		var maxPos = -1;

		if (!shapesLength) {
			return { start: outline, end: outline, startIndex: startIndex, endIndex: endIndex };
		}
		for (var i = 0; i < length; i += shapesLength) {
			for (var j = 0; j < shapesLength && i + j < length; ++j) {
				var _item$rect;

				var item = items[i + j];
				var shape = shapes[j];
				var shapePos1 = shape[pos1Name];
				var shapePos2 = shape[pos2Name];
				var shapeSize1 = shape[size1Name];
				var shapeSize2 = shape[size2Name];
				var pos1 = end - dist + shapePos1 * (itemSize1 + margin) + fitStartPos;
				var pos2 = shapePos2 * (itemSize2 + margin);
				var size1 = shapeSize1 * (itemSize1 + margin) - margin;
				var size2 = shapeSize2 * (itemSize2 + margin) - margin;

				for (var k = shapePos2; k < shapePos2 + shapeSize2 && k < shapesSize; ++k) {
					if (startOutline[k] === -1) {
						startOutline[k] = pos1;
					}
					if (startIndex === -1) {
						minPos = pos1;
						startIndex = i + j;
						maxPos = pos1 + size1 + margin;
						endIndex = i + j;
					}
					if (minPos > pos1) {
						minPos = pos1;
						startIndex = i + j;
					}
					if (maxPos < pos1 + size1 + margin) {
						maxPos = pos1 + size1 + margin;
						endIndex = i + j;
					}
					startOutline[k] = Math.min(startOutline[k], pos1);
					endOutline[k] = Math.max(endOutline[k], pos1 + size1 + margin);
				}
				item.rect = (_item$rect = {}, _item$rect[pos1Name] = pos1, _item$rect[pos2Name] = pos2, _item$rect[size1Name] = size1, _item$rect[size2Name] = size2, _item$rect);
			}
			if (fitSize) {
				for (var _k = 0; _k < shapesSize; ++_k) {
					endOutline[_k] = end + fitSize;
				}
			}
			end = Math.max.apply(Math, endOutline);
			// check dist once
			if (i !== 0) {
				continue;
			}
			// find & fill empty block
			if (!frameFill) {
				dist = 0;
				continue;
			}
			dist = end;
			for (var _j = 0; _j < shapesSize; ++_j) {
				if (startOutline[_j] === -1) {
					startOutline[_j] = Math.max.apply(Math, startOutline);
					endOutline[_j] = startOutline[_j];
					continue;
				}
				// the dist between frame's end outline and next frame's start outline
				// expect that next frame's start outline is startOutline[j] + end
				dist = Math.min(startOutline[_j] + end - endOutline[_j], dist);
			}
		}
		// The target outline is start outline when type is APPENDING
		var targetOutline = isAppend ? startOutline : endOutline;
		var prevOutlineEnd = outline.length === 0 ? 0 : Math[isAppend ? "max" : "min"].apply(Math, outline);
		var prevOutlineDist = isAppend ? 0 : end;

		if (frameFill && outline.length === shapesSize) {
			prevOutlineDist = isAppend ? Math.abs(prevOutlineEnd) : 0;
			for (var _i2 = 0; _i2 < shapesSize; ++_i2) {
				if (startOutline[_i2] === endOutline[_i2]) {
					continue;
				}
				// if appending type is PREPEND, subtract dist from appending group's height.
				prevOutlineDist = Math[isAppend ? "min" : "max"](targetOutline[_i2] + prevOutlineEnd - outline[_i2], prevOutlineDist);
			}
		}
		for (var _i3 = 0; _i3 < shapesSize; ++_i3) {
			startOutline[_i3] += prevOutlineEnd - prevOutlineDist;
			endOutline[_i3] += prevOutlineEnd - prevOutlineDist;
		}
		items.forEach(function (item) {
			item.rect[pos1Name] += prevOutlineEnd - prevOutlineDist;
		});
		return {
			start: startOutline,
			end: endOutline,
			startIndex: startIndex,
			endIndex: endIndex
		};
	};

	FrameLayout.prototype._insert = function _insert(items, outline, type) {
		// this only needs the size of the item.
		var clone = items.map(function (item) {
			return _extends({}, item);
		});

		return {
			items: clone,
			outlines: this._layout(clone, outline, type)
		};
	};

	FrameLayout.prototype.layout = function layout(groups, outlines) {
		var length = groups.length;
		var point = outlines;

		for (var i = 0; i < length; ++i) {
			var group = groups[i];

			point = this._layout(group.items, point, _consts.APPEND);
			group.outlines = point;
			point = point.end;
		}
	};

	FrameLayout.prototype.append = function append(items, outline) {
		return this._insert(items, outline, _consts.APPEND);
	};

	FrameLayout.prototype.prepend = function prepend(items, outline) {
		return this._insert(items, outline, _consts.PREPEND);
	};

	FrameLayout.prototype.setSize = function setSize(size) {
		this._size = size;
	};

	return FrameLayout;
}();

exports["default"] = FrameLayout;
module.exports = exports["default"];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _InfiniteGrid = __webpack_require__(6);

var _InfiniteGrid2 = _interopRequireDefault(_InfiniteGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = _InfiniteGrid2["default"]; /**
                                             * Copyright (c) NAVER Corp.
                                             * egjs-infinitegrid projects are licensed under the MIT license
                                             */

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Copyright (c) 2017 NAVER Corp.
                                                                                                                                                                                                                                                                               * egjs projects are licensed under the MIT license
                                                                                                                                                                                                                                                                              */


var _component = __webpack_require__(7);

var _component2 = _interopRequireDefault(_component);

var _ItemManager = __webpack_require__(8);

var _ItemManager2 = _interopRequireDefault(_ItemManager);

var _DOMRenderer = __webpack_require__(3);

var _DOMRenderer2 = _interopRequireDefault(_DOMRenderer);

var _ImageLoaded = __webpack_require__(9);

var _ImageLoaded2 = _interopRequireDefault(_ImageLoaded);

var _Watcher = __webpack_require__(10);

var _Watcher2 = _interopRequireDefault(_Watcher);

var _GridLayout = __webpack_require__(11);

var _GridLayout2 = _interopRequireDefault(_GridLayout);

var _FrameLayout = __webpack_require__(4);

var _FrameLayout2 = _interopRequireDefault(_FrameLayout);

var _SquareLayout = __webpack_require__(12);

var _SquareLayout2 = _interopRequireDefault(_SquareLayout);

var _PackingLayout = __webpack_require__(13);

var _PackingLayout2 = _interopRequireDefault(_PackingLayout);

var _JustifiedLayout = __webpack_require__(15);

var _JustifiedLayout2 = _interopRequireDefault(_JustifiedLayout);

var _consts = __webpack_require__(0);

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// IE8
// https://stackoverflow.com/questions/43216659/babel-ie8-inherit-issue-with-object-create
/* eslint-disable */
if (typeof Object.create !== "function") {
	Object.create = function (o, properties) {
		if ((typeof o === "undefined" ? "undefined" : _typeof(o)) !== "object" && typeof o !== "function") {
			throw new TypeError("Object prototype may only be an Object: " + o);
		} else if (o === null) {
			throw new Error("This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.");
		}
		function F() {}
		F.prototype = o;
		return new F();
	};
}
/* eslint-enable */

/**
 * A module used to arrange card elements including content infinitely according to layout type. With this module, you can implement various layouts composed of different card elements whose sizes vary. It guarantees performance by maintaining the number of DOMs the module is handling under any circumstance
 * @ko 콘텐츠가 있는 카드 엘리먼트를 레이아웃 타입에 따라 무한으로 배치하는 모듈. 다양한 크기의 카드 엘리먼트를 다양한 레이아웃으로 배치할 수 있다. 카드 엘리먼트의 개수가 계속 늘어나도 모듈이 처리하는 DOM의 개수를 일정하게 유지해 최적의 성능을 보장한다
 * @alias eg.InfiniteGrid
 * @extends eg.Component
 *
 * @example
```
<ul id="grid">
	<li class="card">
		<div>test1</div>
	</li>
	<li class="card">
		<div>test2</div>
	</li>
	<li class="card">
		<div>test3</div>
	</li>
	<li class="card">
		<div>test4</div>
	</li>
	<li class="card">
		<div>test5</div>
	</li>
	<li class="card">
		<div>test6</div>
	</li>
</ul>
<script>
var some = new eg.InfiniteGrid("#grid").on("layoutComplete", function(e) {
	// ...
});
</script>
```
 *
 * @support {"ie": "8+", "ch" : "latest", "ff" : "latest",  "sf" : "latest", "edge" : "latest", "ios" : "7+", "an" : "2.1+ (except 3.x)"}
 **/

var InfiniteGrid = function (_Component) {
	_inherits(InfiniteGrid, _Component);

	/**
  * @param {HTMLElement|String|jQuery} element A base element for a module <ko>모듈을 적용할 기준 엘리먼트</ko>
  * @param {Object} [options] The option object of the eg.InfiniteGrid module <ko>eg.InfiniteGrid 모듈의 옵션 객체</ko>
  * @param {String} [options.itemSelector] A selector to select card elements that make up the layout<ko>레이아웃을 구성하는 카드 엘리먼트를 선택할 선택자(selector)</ko>
  * @param {Boolean} [options.useRecycle=true] Indicates whether keep the number of DOMs is maintained. If the useRecycle value is 'true', keep the number of DOMs is maintained. If the useRecycle value is 'false', the number of DOMs will increase as card elements are added. <ko>DOM의 수를 유지할지 여부를 나타낸다. useRecycle 값이 'true'이면 DOM 개수를 일정하게 유지한다. useRecycle 값이 'false' 이면 카드 엘리먼트가 추가될수록 DOM 개수가 계속 증가한다.</ko>
  * @param {Boolean} [options.isOverflowScroll=false] Indicates whether overflow:scroll is applied<ko>overflow:scroll 적용여부를 결정한다.</ko>
  * @param {Boolean} [options.horizontal=false] Direction of the scroll movement (true: horizontal, false: vertical) <ko>스크롤 이동 방향 (true 가로방향, false 세로방향</ko>
  * @param {Boolean} [options.isEqualSize=false] Indicates whether sizes of all card elements are equal to one another. If sizes of card elements to be arranged are all equal and this option is set to "true", the performance of layout arrangement can be improved. <ko>카드 엘리먼트의 크기가 동일한지 여부. 배치될 카드 엘리먼트의 크기가 모두 동일할 때 이 옵션을 'true'로 설정하면 레이아웃 배치 성능을 높일 수 있다</ko>
  * @param {Number} [options.threshold=300] The threshold size of an event area where card elements are added to a layout.<ko>레이아웃에 카드 엘리먼트를 추가하는 이벤트가 발생하는 기준 영역의 크기.</ko>
  *
  */
	function InfiniteGrid(element, options) {
		_classCallCheck(this, InfiniteGrid);

		var _this = _possibleConstructorReturn(this, _Component.call(this));

		_extends(_this.options = {
			itemSelector: "*",
			isOverflowScroll: false,
			threshold: 300,
			isEqualSize: false,
			useRecycle: true,
			horizontal: false
		}, options);
		_consts.IS_ANDROID2 && (_this.options.isOverflowScroll = false);
		_this._isVertical = !_this.options.horizontal;
		_this._reset();
		_this._items = new _ItemManager2["default"]();
		_this._renderer = new _DOMRenderer2["default"](element, {
			isOverflowScroll: _this.options.isOverflowScroll,
			isEqualSize: _this.options.isEqualSize,
			isVertical: _this._isVertical
		});
		_this._watcher = new _Watcher2["default"](_this._renderer, {
			layout: function layout() {
				return _this.layout();
			},
			check: function check(param) {
				return _this._onCheck(param);
			}
		});
		return _this;
	}
	/**
  * Adds a card element at the bottom of a layout. This method is available only if the isProcessing() method returns false.
  * @ko 카드 엘리먼트를 레이아웃 아래에 추가한다. isProcessing() 메서드의 반환값이 'false'일 때만 이 메서드를 사용할 수 있다
  * 이 메소드는 isProcessing()의 반환값이 false일 경우에만 사용 가능하다.
  * @param {Array|jQuery} elements Array of the card elements to be added <ko>추가할 카드 엘리먼트의 배열</ko>
  * @param {Number|String} [groupKey] The group key to be configured in a card element. It is automatically generated by default.
  * <ko>추가할 카드 엘리먼트에 설정할 그룹 키. 생략하면 값이 자동으로 생성된다.</ko>
  * @return {eg.InfiniteGrid} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
  * @example
  * infinitegrid.append("&lt;div class='item'&gt;test1&lt;/div&gt;&lt;div class='item'&gt;test2&lt;/div&gt;");
  * infinitegrid.append(["&lt;div class='item'&gt;test1&lt;/div&gt;", "&lt;div class='item'&gt;test2&lt;/div&gt;"]);
  * infinitegrid.append([HTMLElement1, HTMLElement2]);
  * infinitegrid.append(jQuery(["&lt;div class='item'&gt;test1&lt;/div&gt;", "&lt;div class='item'&gt;test2&lt;/div&gt;"]));
  */


	InfiniteGrid.prototype.append = function append(elements, groupKey) {
		this._layout && this._insert(elements, _consts.APPEND, groupKey);
		return this;
	};
	/**
  * Adds a card element at the top of a layout. This method is available only if the isProcessing() method returns false.
  * @ko 카드 엘리먼트를 레이아웃의 위에 추가한다. isProcessing() 메서드의 반환값이 'false'일 때만 이 메서드를 사용할 수 있다
  * @param {Array|jQuery} elements Array of the card elements to be added <ko>추가할 카드 엘리먼트 배열</ko>
  * @param {Number|String} [groupKey] The group key to be configured in a card element. It is automatically generated by default.
  * <ko>추가할 카드 엘리먼트에 설정할 그룹 키. 생략하면 값이 자동으로 생성된다.</ko>
  * @return {eg.InfiniteGrid} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
  * @example
  * infinitegrid.prepend("&lt;div class='item'&gt;test1&lt;/div&gt;&lt;div class='item'&gt;test2&lt;/div&gt;");
  * infinitegrid.prepend(["&lt;div class='item'&gt;test1&lt;/div&gt;", "&lt;div class='item'&gt;test2&lt;/div&gt;"]);
  * infinitegrid.prepend([HTMLElement1, HTMLElement2]);
  * infinitegrid.prepend(jQuery(["&lt;div class='item'&gt;test1&lt;/div&gt;", "&lt;div class='item'&gt;test2&lt;/div&gt;"]));
  */


	InfiniteGrid.prototype.prepend = function prepend(elements, groupKey) {
		this._layout && this._insert(elements, _consts.PREPEND, groupKey);
		return this;
	};
	/**
  * Specifies the Layout class to use.
  * @ko 사용할 Layout 클래스를 지정한다.
  * @param {Class} LayoutKlass The Layout class to use <ko>사용할 Layout 클래스</ko>
  * @param {Object} options Options to apply to the Layout.<ko>Layout에 적용할 옵션</ko>
  * @return {eg.InfiniteGrid} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
  * @example
  * infinitegrid.setLayout(eg.InfiniteGrid.GridLayout, {
  *  margin: 10,
  *  align: "start"
  * });
   * infinitegrid.setLayout(eg.InfiniteGrid.JustifiedLayout, {
  *  margin: 10,
  *  minSize: 100,
  *  maxSize: 200
  * });
   * infinitegrid.setLayout(eg.InfiniteGrid.SquareLayout, {
  *  margin: 10,
  *  column: 2
  * });
  * infinitegrid.setLayout(eg.InfiniteGrid.FrameLayout, {
  *  margin: 10,
  *  frame: [
  *   [1, 2],
   *   [4, 3],
  *  ]
  * });
  * infinitegrid.setLayout(eg.InfiniteGrid.PackingLayout, {
  *  margin: 10,
  *  aspectRatio: 1.5
  * });
  */


	InfiniteGrid.prototype.setLayout = function setLayout(LayoutKlass, options) {
		this._layout = new LayoutKlass(_extends(options || {}, {
			direction: this._isVertical ? "vertical" : "horizontal"
		}));
		this._layout.setSize(this._renderer.getContainerSize());
		return this;
	};
	/**
  * Returns the layouted items.
  * @ko 레이아웃된 아이템들을 반환한다.
  * @param {Boolean} includeCached Indicates whether to include the cached items. <ko>캐싱된 아이템을 포함할지 여부를 나타낸다.</ko>
  * @returns {Array} List of items <ko>아이템의 목록</ko>
  */


	InfiniteGrid.prototype.getItems = function getItems() {
		var includeCached = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

		return this[includeCached ? "_getItems" : "_getVisibleItems"]();
	};

	InfiniteGrid.prototype._getItems = function _getItems() {
		return this._items.pluck("items", 0, this._items.size());
	};

	InfiniteGrid.prototype._getVisibleItems = function _getVisibleItems() {
		return this._items.pluck("items", this._status.startCursor, this._status.endCursor);
	};

	InfiniteGrid.prototype._updateEdge = function _updateEdge() {
		this._status.start = this._items.getEdge("start", this._status.startCursor, this._status.endCursor);
		this._status.end = this._items.getEdge("end", this._status.startCursor, this._status.endCursor);
	};

	InfiniteGrid.prototype._getEdgeOffset = function _getEdgeOffset(cursor) {
		var rect = null;

		if (!this._status[cursor]) {
			var item = this._items.getEdge(cursor);

			this._status[cursor] = item;
		}

		if (this._status[cursor]) {
			rect = this._status[cursor].rect;
			if (cursor === "start") {
				rect.bottom = rect.top + this._status[cursor].size.height;
				rect.right = rect.left + this._status[cursor].size.width;
			}
		}
		return rect;
	};
	// called by visible


	InfiniteGrid.prototype._fit = function _fit() {
		var scrollCycle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "after";

		// for caching
		if (!this.options.useRecycle) {
			this._fit = function () {};
			return;
		}

		if (this._layout) {
			var base = this._getEdgeValue("start");

			if (base !== 0) {
				if (scrollCycle === "before") {
					this._renderer.scrollBy(-Math.abs(base));
					this._watcher.setScrollPos();
				}
				this._items.fit(base, this._isVertical);
				_DOMRenderer2["default"].renderItems(this._getVisibleItems());
				this._renderer.setContainerSize(this._getEdgeValue("end"));
				if (scrollCycle === "after") {
					this._renderer.scrollBy(Math.abs(base));
					this._watcher.setScrollPos();
				}
			}
		}
	};

	InfiniteGrid.prototype._getEdgeValue = function _getEdgeValue(cursor) {
		return this._items.getEdgeValue(cursor, this._status.startCursor, this._status.endCursor);
	};
	/**
  * Rearranges a layout.
  * @ko 레이아웃을 다시 배치한다.
  * @param {Boolean} [isRelayout=true] Indicates whether a card element is being relayouted <ko>카드 엘리먼트 재배치 여부</ko>
  * @return {eg.InfiniteGrid} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
  */


	InfiniteGrid.prototype.layout = function layout() {
		var _this2 = this;

		var isRelayout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

		if (!this._layout || this.isProcessing()) {
			return this;
		}
		// check childElement
		if (!this._items.size()) {
			this._insert((0, _utils.toArray)(this._renderer.container.children), true);
			return this;
		} else {
			this._status.isProcessing = true;

			var data = void 0;
			var outline = void 0;

			if (isRelayout) {
				// remove cache
				data = this._items.get(this._status.startCursor, this._status.endCursor);
				if (this._renderer.resize()) {
					this._layout.setSize(this._renderer.getContainerSize());
					data.forEach(function (v) {
						data.items = _this2._renderer.updateSize(v.items);
					});
				}
			} else {
				data = this._items.get(this._status.startCursor, this._items.size());
				outline = this._items.getOutline(this._status.startCursor, "start");
			}
			if (!data.length) {
				return this;
			}
			this._layout.layout(data, outline);

			if (isRelayout) {
				this._items.set(data);
				this._status.startCursor = 0;
				this._status.endCursor = data.length - 1;
			} else {
				data.forEach(function (v) {
					return _this2._items.set(v, v.groupKey);
				});
			}
			this._onLayoutComplete(data, _consts.APPEND, _consts.NO_TRUSTED);
			_DOMRenderer2["default"].renderItems(this._getVisibleItems());
			isRelayout && this._watcher.setScrollPos();
		}

		return this;
	};
	/**
  * Removes a item element on a grid layout.
  * @ko 그리드 레이아웃의 카드 엘리먼트를 삭제한다.
  * @param {HTMLElement} item element to be removed <ko>삭제될 아이템 엘리먼트</ko>
  * @return {Object}  Removed item element <ko>삭제된 아이템 엘리먼트 정보</ko>
  */


	InfiniteGrid.prototype.remove = function remove(element) {
		if (element) {
			var items = this._items.remove(element, this._status.startCursor, this._status.endCursor);

			if (items) {
				_DOMRenderer2["default"].removeElement(element);
				return items;
			}
		}
		return null;
	};

	InfiniteGrid.prototype._getNextItems = function _getNextItems(isAppend) {
		var items = [];
		var size = this._items.size();

		// from cache
		if (size > 0 && this._status.startCursor !== -1 && this._status.endCursor !== -1) {
			if (isAppend && size > this._status.endCursor + 1) {
				items = this._items.pluck("items", this._status.endCursor + 1);
			} else if (!isAppend && this._status.startCursor > 0) {
				items = this._items.pluck("items", this._status.startCursor - 1);
			}
		}
		return items;
	};
	/**
  * Returns the list of group keys which belongs to card elements currently being maintained. You can use the append() or prepend() method to configure group keys so that multiple card elements can be managed at once. If you do not use these methods to configure group keys, groupkey is automatically generated.
  * @ko 현재 유지하고 있는 카드 엘리먼트의 그룹 키 목록을 반환한다. 여러 개의 카드 엘리먼트를 묶어서 관리할 수 있도록 append() 메서드나 prepend() 메서드에서 그룹 키를 지정할 수 있다. append() 메서드나 prepend() 메서드에서 그룹 키를 지정하지 않았다면 자동으로 그룹키가 생성된다.
  * @param {Boolean} includeCached Indicates whether to include the cached groups. <ko>캐싱된 그룹을 포함할지 여부를 나타낸다.</ko>
  * @return {Array} List of group keys <ko>그룹 키의 목록</ko>
  */


	InfiniteGrid.prototype.getGroupKeys = function getGroupKeys(includeCached) {
		var data = includeCached ? this._items.get() : this._items.get(this._status.startCursor, this._status.endCursor);

		return data.map(function (v) {
			return v.groupKey;
		});
	};
	/**
  * Returns the current state of a module such as location information. You can use the setStatus() method to restore the information returned through a call to this method.
  * @ko 카드의 위치 정보 등 모듈의 현재 상태 정보를 반환한다. 이 메서드가 반환한 정보를 저장해 두었다가 setStatus() 메서드로 복원할 수 있다
  * @return {Object} State object of the eg.InfiniteGrid module<ko>eg.InfiniteGrid 모듈의 상태 객체</ko>
  */


	InfiniteGrid.prototype.getStatus = function getStatus() {
		return {
			options: _extends({}, this.options),
			_status: _extends({}, this._status),
			_items: this._items.getStatus(),
			_renderer: this._renderer.getStatus(),
			_watcher: this._watcher.getStatus()
		};
	};
	/**
  * Sets the state of the eg.InfiniteGrid module with the information returned through a call to the getStatue() method.
  * @ko getStatue() 메서드가 저장한 정보로 eg.InfiniteGrid 모듈의 상태를 설정한다.
  * @param {Object} status State object of the eg.InfiniteGrid module <ko>eg.InfiniteGrid 모듈의 상태 객체</ko>
  * @param {boolean} [applyScrollPos=true] Checks whether to scroll<ko>스크롤의 위치를 복원할지 결정한다.</ko>
  * @return {eg.InfiniteGrid} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
  */


	InfiniteGrid.prototype.setStatus = function setStatus(status) {
		var applyScrollPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

		if (!status || !status.options || !status._status || !status._renderer || !status._items || !status._watcher) {
			return this;
		}
		this._watcher.detachEvent();
		_extends(this.options, status.options);
		_extends(this._status, status._status);
		this._items.setStatus(status._items, this._status.startCursor, this._status.endCursor);
		this._renderer.setStatus(status._renderer, this._getVisibleItems());
		this._watcher.setStatus(status._watcher, applyScrollPos);
		this._updateEdge();
		this._watcher.attachEvent();
		return this;
	};
	/**
  * Clears added card elements and data.
  * @ko 추가된 카드 엘리먼트와 데이터를 모두 지운다.
  * @return {eg.InfiniteGrid} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
  */


	InfiniteGrid.prototype.clear = function clear() {
		this._items.clear();
		this._renderer.clear();
		this._reset();
		return this;
	};
	/**
  * Checks whether a card element is being added.
  * @ko 카드 엘리먼트 추가가 진행 중인지 확인한다
  * @return {Boolean} Indicates whether a card element is being added <ko>카드 엘리먼트 추가 진행 중 여부</ko>
  */


	InfiniteGrid.prototype.isProcessing = function isProcessing() {
		return this._status.isProcessing;
	};

	InfiniteGrid.prototype._insert = function _insert(elements, isAppend, groupKey) {
		if (this.isProcessing() || elements.length === 0) {
			return;
		}
		this._status.isProcessing = true;
		var key = typeof groupKey === "undefined" ? new Date().getTime() + Math.floor(Math.random() * 1000) : groupKey;
		var items = _ItemManager2["default"].from((0, _utils.$)(elements, true), this.options.itemSelector, {
			isAppend: isAppend,
			groupKey: key
		});

		if (!items.length) {
			return;
		}
		this._postLayout(_consts.NO_CACHE, items, isAppend, _consts.NO_TRUSTED);
	};
	// add items, and remove items for recycling


	InfiniteGrid.prototype._recycle = function _recycle(isAppend) {
		var remove = [];

		for (var i = this._status.startCursor; i <= this._status.endCursor; i++) {
			remove.push(this._isVisible(i));
		}
		var start = remove.indexOf(isAppend ? 1 : -1);
		var end = remove.lastIndexOf(isAppend ? 1 : -1);

		if (start !== -1 && end !== -1) {
			start = this._status.startCursor + start;
			end = start + end;
			_DOMRenderer2["default"].removeItems(this._items.pluck("items", start, end));
			if (isAppend) {
				this._status.startCursor = end + 1;
			} else {
				this._status.endCursor = start - 1;
			}
		}
	};

	InfiniteGrid.prototype._postLayout = function _postLayout(fromCache, items, isAppend, isTrusted) {
		var _this3 = this;

		if (fromCache) {
			this._renderer.createAndInsert(items, isAppend);
			this._updateCursor(isAppend);
			this.options.useRecycle && this._recycle(isAppend);
			this._onLayoutComplete(items, isAppend, isTrusted);
		} else {
			var method = isAppend ? "append" : "prepend";

			this._renderer[method](items);
			// check image sizes after elements are attated on DOM
			_ImageLoaded2["default"].check(items.map(function (item) {
				return item.el;
			}), function () {
				var layouted = _this3._layout[method](_this3._renderer.updateSize(items), _this3._items.getOutline(isAppend ? _this3._status.endCursor : _this3._status.startCursor, isAppend ? "end" : "start"));

				_this3._insertItems(layouted, isAppend);
				_this3._updateCursor(isAppend);
				_this3.options.useRecycle && _this3._recycle(isAppend);
				_DOMRenderer2["default"].renderItems(layouted.items);
				_this3._onLayoutComplete(layouted.items, isAppend, isTrusted);
			});
		}
	};

	InfiniteGrid.prototype._isVisible = function _isVisible(index) {
		var min = Math.min.apply(Math, this._items.getOutline(index, "start"));
		var max = Math.max.apply(Math, this._items.getOutline(index, "end"));
		var pos = this._watcher.getScrollPos();
		var viewSize = this._renderer.getViewSize();

		if (pos + viewSize + this.options.threshold < min) {
			return -1;
		} else if (pos - this.options.threshold > max) {
			return 1;
		}
		return 0;
	};

	InfiniteGrid.prototype._updateCursor = function _updateCursor(isAppend) {
		if (isAppend) {
			this._status.endCursor++;
		} else if (this._status.startCursor > 0) {
			this._status.startCursor--;
		} else {
			this._status.endCursor++; // outside prepend
		}
		if (this._status.startCursor < 0) {
			this._status.startCursor = 0;
		}
	};

	InfiniteGrid.prototype._insertItems = function _insertItems(layouted, isAppend) {
		layouted.groupKey = layouted.items[0].groupKey;
		this._items[isAppend ? "append" : "prepend"](layouted);
	};
	// called by visible


	InfiniteGrid.prototype._requestAppend = function _requestAppend() {
		var items = this._getNextItems(_consts.APPEND);

		if (items.length) {
			this._postLayout(_consts.CACHE, items, _consts.APPEND, _consts.TRUSTED);
		} else {
			/**
    * This event is fired when a card element must be added at the bottom or right of a layout because there is no card to be displayed on screen when a user scrolls near bottom or right.
    * @ko 카드 엘리먼트가 레이아웃의 아래나 오른쪽에 추가돼야 할 때 발생하는 이벤트. 사용자가 아래나 오른쪽으로 스크롤해서 화면에 표시될 카드가 없을 때 발생한다
    * @event eg.InfiniteGrid#append
    * @param {Object} param The object of data to be sent to an event <ko>이벤트에 전달되는 데이터 객체</ko>
    * @param {Boolean} param.isTrusted Returns true if an event was generated by the user action, or false if it was caused by a script or API call <ko>사용자의 액션에 의해 이벤트가 발생하였으면 true, 스크립트나 API호출에 의해 발생하였을 경우에는 false를 반환한다.</ko>
    */
			this.trigger("append");
		}
	};
	// called by visible


	InfiniteGrid.prototype._requestPrepend = function _requestPrepend() {
		var items = this._getNextItems(_consts.PREPEND);

		if (items.length) {
			this._postLayout(_consts.CACHE, items, _consts.PREPEND, _consts.TRUSTED);
		} else {
			/**
    * This event is fired when a card element must be added at the top or left of a layout because there is no card to be displayed on screen when a user scrolls near top or left.
    * @ko 카드가 레이아웃의 위나 왼쪽에 추가돼야 할 때 발생하는 이벤트. 사용자가 위나 왼쪽으로 스크롤해서 화면에 표시될 카드가 없을 때 발생한다.
    * @event eg.InfiniteGrid#prepend
    * @param {Object} param The object of data to be sent to an event <ko>이벤트에 전달되는 데이터 객체</ko>
    * @param {Boolean} param.isTrusted Returns true if an event was generated by the user action, or false if it was caused by a script or API call <ko>사용자의 액션에 의해 이벤트가 발생하였으면 true, 스크립트나 API호출에 의해 발생하였을 경우에는 false를 반환한다.</ko>
    */
			this.trigger("prepend");
		}
	};

	InfiniteGrid.prototype._onCheck = function _onCheck(_ref) {
		var isForward = _ref.isForward,
		    scrollPos = _ref.scrollPos,
		    horizontal = _ref.horizontal,
		    orgScrollPos = _ref.orgScrollPos;

		/**
   * This event is fired when the user scrolls.
   * @ko 사용자가 스크롤 할 경우 발생하는 이벤트.
   * @event eg.InfiniteGrid#change
   * @param {Object} param The object of data to be sent to an event <ko>이벤트에 전달되는 데이터 객체</ko>
   * @param {Boolean} param.isForward Indicates whether the scroll progression direction is forward or backword. <ko>스크롤 진행방향이 앞쪽으로 진행하는 지, 뒤쪽으로 진행하는지를 나타낸다.</ko>
   * @param {Number} param.scrollPos Current scroll position value relative to the infiniteGrid container element. <ko>infiniteGrid 컨테이너 엘리먼트 기준의 현재 스크롤 위치값</ko>
   * @param {Boolean} param.orgScrollPos Current position of the scroll <ko>현재 스크롤 위치값</ko>
   * @param {Boolean} param.isTrusted Returns true if an event was generated by the user action, or false if it was caused by a script or API call <ko>사용자의 액션에 의해 이벤트가 발생하였으면 true, 스크립트나 API호출에 의해 발생하였을 경우에는 false를 반환한다.</ko>
   * @param {Boolean} options.horizontal Direction of the scroll movement (true: horizontal, false: vertical) <ko>스크롤 이동 방향 (true 가로방향, false 세로방향</ko>
   */
		this.trigger("change", {
			isForward: isForward,
			horizontal: horizontal,
			scrollPos: scrollPos,
			orgScrollPos: orgScrollPos
		});
		if (this.isProcessing()) {
			return;
		}
		var rect = this._getEdgeOffset(isForward ? "end" : "start");

		if (!rect) {
			return;
		}
		var targetPos = isForward ? rect[horizontal ? "left" : "top"] - this._renderer.getViewSize() : rect[horizontal ? "right" : "bottom"];

		if (isForward) {
			if (scrollPos >= targetPos) {
				this._requestAppend();
			}
		} else if (scrollPos <= targetPos) {
			this._fit("before");
			this._requestPrepend();
		}
	};

	InfiniteGrid.prototype._onLayoutComplete = function _onLayoutComplete(items, isAppend) {
		var isTrusted = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

		this._updateEdge();
		this._renderer.setContainerSize(this._getEdgeValue("end"));
		!isAppend && this._fit("after");
		this._status.isProcessing = false;
		/**
   * This event is fired when layout is successfully arranged through a call to the append(), prepend(), or layout() method.
   * @ko 레이아웃 배치가 완료됐을 때 발생하는 이벤트. append() 메서드나 prepend() 메서드, layout() 메서드 호출 후 카드의 배치가 완료됐을 때 발생한다
   * @event eg.InfiniteGrid#layoutComplete
   *
   * @param {Object} param The object of data to be sent to an event <ko>이벤트에 전달되는 데이터 객체</ko>
   * @param {Array} param.target Rearranged card elements<ko>재배치된 카드 엘리먼트들</ko>
   * @param {Boolean} param.isAppend Checks whether the append() method is used to add a card element. It returns true even though the layoutComplete event is fired after the layout() method is called. <ko>카드 엘리먼트가 append() 메서드로 추가됐는지 확인한다. layout() 메서드가 호출된 후 layoutComplete 이벤트가 발생해도 'true'를 반환한다.</ko>
   * @param {Number} param.scrollPos Current scroll position value relative to the infiniteGrid container element. <ko>infiniteGrid 컨테이너 엘리먼트 기준의 현재 스크롤 위치값</ko>
   * @param {Boolean} param.orgScrollPos Current position of the scroll <ko>현재 스크롤 위치값</ko>
   * @param {Boolean} param.isTrusted Returns true if an event was generated by the user action, or false if it was caused by a script or API call <ko>사용자의 액션에 의해 이벤트가 발생하였으면 true, 스크립트나 API호출에 의해 발생하였을 경우에는 false를 반환한다.</ko>
   */
		this.trigger("layoutComplete", {
			target: items.concat(),
			isAppend: isAppend,
			isTrusted: isTrusted,
			scrollPos: this._watcher.getScrollPos(),
			orgScrollPos: this._watcher.getOrgScrollPos()
		});
		// console.warn("_onLayoutComplete [", this._status.startCursor, this._status.endCursor, "]");
	};

	InfiniteGrid.prototype._reset = function _reset() {
		this._status = {
			isProcessing: false,
			startCursor: -1,
			endCursor: -1,
			start: null,
			end: null
		};
	};
	/**
  * Destroys elements, properties, and events used on a grid layout.
  * @ko 그리드 레이아웃에 사용한 엘리먼트와 속성, 이벤트를 해제한다
  */


	InfiniteGrid.prototype.destroy = function destroy() {
		this.off();
		this._watcher.destroy();
		this._reset();
		this._items.clear();
		this._renderer.destroy();
	};

	return InfiniteGrid;
}(_component2["default"]);

InfiniteGrid.VERSION = "2.1.1-snapshot";

InfiniteGrid.GridLayout = _GridLayout2["default"];

InfiniteGrid.FrameLayout = _FrameLayout2["default"];

InfiniteGrid.SquareLayout = _SquareLayout2["default"];

InfiniteGrid.PackingLayout = _PackingLayout2["default"];

InfiniteGrid.JustifiedLayout = _JustifiedLayout2["default"];

exports["default"] = InfiniteGrid;
module.exports = exports["default"];

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _consts = __webpack_require__(0);

var _DOMRenderer = __webpack_require__(3);

var _DOMRenderer2 = _interopRequireDefault(_DOMRenderer);

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ItemManager = function () {
	ItemManager.from = function from(elements, selector, _ref) {
		var groupKey = _ref.groupKey,
		    isAppend = _ref.isAppend;

		var filted = ItemManager.selectItems((0, _utils.$)(elements, _consts.MULTI), selector);

		// Item Structure
		return (0, _utils.toArray)(filted).map(function (el) {
			return {
				el: el,
				groupKey: groupKey,
				content: el.outerHTML
			};
		});
	};

	ItemManager.selectItems = function selectItems(elements, selector) {
		return elements.filter(function (v) {
			if (selector === "*") {
				return v;
			} else {
				return v.className.split(" ").some(function (c) {
					return c === selector;
				});
			}
		});
	};

	ItemManager.pluck = function pluck(data, property) {
		return data.reduce(function (acc, v) {
			return acc.concat(v[property]);
		}, []);
	};

	function ItemManager() {
		_classCallCheck(this, ItemManager);

		this.clear();
	}

	ItemManager.prototype.getStatus = function getStatus() {
		return {
			_data: this._data.map(function (data) {
				data.items = data.items.map(function (item) {
					delete item.el;
					return item;
				});
				return data;
			})
		};
	};

	ItemManager.prototype.setStatus = function setStatus(status, start, end) {
		var data = status._data;

		for (var i = start; i <= end; i++) {
			data[i].items = _DOMRenderer2["default"].createElements(data[i].items);
		}
		this.set(data);
	};

	ItemManager.prototype.size = function size() {
		return this._data.length;
	};

	ItemManager.prototype.fit = function fit(base, isVertical) {
		if (!this._data.length) {
			return;
		}
		var property = isVertical ? "top" : "left";

		if (base !== 0) {
			this._data = this._data.map(function (v) {
				v.items = v.items.map(function (item) {
					item.rect[property] -= base;
					return item;
				});
				v.outlines.start = v.outlines.start.map(function (start) {
					return start - base;
				});
				v.outlines.end = v.outlines.end.map(function (end) {
					return end - base;
				});
				return v;
			});
		}
	};

	ItemManager.prototype.pluck = function pluck(property, start, end) {
		if (typeof start !== "undefined") {
			if (typeof end !== "undefined") {
				return ItemManager.pluck(this._data.slice(start, end + 1), property);
			} else {
				return ItemManager.pluck(this._data.slice(start, start + 1), property);
			}
		} else {
			return ItemManager.pluck(this._data, property);
		}
	};

	ItemManager.prototype.getOutline = function getOutline(index, property) {
		if (this._data.length) {
			return this._data[index].outlines[property];
		} else {
			return [];
		}
	};

	ItemManager.prototype.getEdgeIndex = function getEdgeIndex(cursor, start, end) {
		var prop = cursor === "start" ? "min" : "max";
		var index = -1;
		var targetValue = cursor === "start" ? Infinity : -Infinity;

		for (var i = start; i <= end; i++) {
			var value = Math[prop].apply(Math, this.getOutline(i, cursor));

			if (cursor === "start" && targetValue > value || cursor === "end" && targetValue < value) {
				targetValue = value;
				index = i;
			}
		}
		return index;
	};

	ItemManager.prototype.getEdge = function getEdge(cursor, start, end) {
		var dataIdx = this.getEdgeIndex(cursor, start, end);
		var items = this.pluck("items", dataIdx);

		if (items.length) {
			var itemIdx = this.getOutline(dataIdx, cursor + "Index");

			return items.length > itemIdx ? items[itemIdx] : null;
		}
		return null;
	};

	ItemManager.prototype.getEdgeValue = function getEdgeValue(cursor, start, end) {
		return Math[cursor === "start" ? "min" : "max"].apply(Math, this.pluck("outlines", this.getEdgeIndex(cursor, start, end)).reduce(function (acc, v) {
			return acc.concat(v[cursor]);
		}, []));
	};

	ItemManager.prototype.append = function append(layouted) {
		this._data.push(layouted);
		return layouted.items;
	};

	ItemManager.prototype.prepend = function prepend(layouted) {
		this._data.unshift(layouted);
		return layouted.items;
	};

	ItemManager.prototype.clear = function clear() {
		this._data = [];
	};

	ItemManager.prototype.remove = function remove(element, start, end) {
		var items = null;
		var key = element.getAttribute(_consts.GROUPKEY_ATT);
		var data = this.get(start, end).filter(function (v) {
			return String(v.groupKey) === key;
		});

		if (!data.length) {
			return items;
		}
		data = data[0];

		var len = data.items.length;
		var idx = -1;

		for (var i = 0; i < len; i++) {
			if (data.items[i].el === element) {
				idx = i;
				break;
			}
		}
		if (~idx) {
			// remove item information
			data.items.splice(idx, 1);
			this.set(data, key);
			items = data.items;
		}
		return items;
	};

	ItemManager.prototype.get = function get(start, end) {
		if (typeof start !== "undefined") {
			if (typeof end !== "undefined") {
				return this._data.slice(start, end + 1);
			} else {
				return this._data.slice(start, start + 1);
			}
		} else {
			return this._data.concat();
		}
	};

	ItemManager.prototype.set = function set(data, key) {
		if (typeof key !== "undefined" && !Array.isArray(data)) {
			var len = this._data.length;
			var idx = -1;

			for (var i = 0; i < len; i++) {
				if (this._data[i].groupKey === key) {
					idx = i;
					break;
				}
			}
			~idx && (this._data[idx] = data);
		} else {
			this._data = data.concat();
		}
	};

	return ItemManager;
}();

exports["default"] = ItemManager;
module.exports = exports["default"];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _consts = __webpack_require__(0);

var _utils = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ImageLoaded = function () {
	function ImageLoaded() {
		_classCallCheck(this, ImageLoaded);
	}

	ImageLoaded.waitImageLoaded = function waitImageLoaded(needCheck, callback) {
		var checkCount = needCheck.length;
		var checkImage = function checkImage() {
			checkCount--;
			checkCount <= 0 && callback && callback();
		};
		var onCheck = function onCheck(e) {
			(0, _utils.removeEvent)(e.target || e.srcElement, "load", onCheck);
			(0, _utils.removeEvent)(e.target || e.srcElement, "error", onCheck);
			checkImage();
		};

		// workaround for IE
		_consts.IS_IE && needCheck.forEach(function (v) {
			return v.setAttribute("src", v.getAttribute("src"));
		});
		needCheck.forEach(function (v) {
			if (v.complete) {
				checkImage();
			} else {
				(0, _utils.addEvent)(v, "load", onCheck);
				(0, _utils.addEvent)(v, "error", onCheck);
			}
		});
	};

	ImageLoaded.checkImageLoaded = function checkImageLoaded(el) {
		if (el.tagName === "IMG") {
			return !el.complete ? [el] : [];
		} else {
			return (0, _utils.toArray)(el.querySelectorAll("img")).filter(function (v) {
				if (v.nodeType && [1, 9, 11].indexOf(v.nodeType) !== -1) {
					return !v.complete;
				} else {
					return false;
				}
			});
		}
	};

	ImageLoaded.check = function check(elements, callback) {
		var _this = this;

		var needCheck = elements.reduce(function (acc, v) {
			return acc.concat(_this.checkImageLoaded(v));
		}, []);

		if (needCheck.length > 0) {
			ImageLoaded.waitImageLoaded(needCheck, callback);
		} else {
			// convert to async
			setTimeout(function () {
				callback && callback();
			}, 0);
		}
	};

	return ImageLoaded;
}();

exports["default"] = ImageLoaded;
module.exports = exports["default"];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _consts = __webpack_require__(0);

var _utils = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Watcher = function () {
	function Watcher(renderer, callback) {
		_classCallCheck(this, Watcher);

		_extends(this._callback = {
			layout: null,
			check: null
		}, callback);
		this._timer = {
			resize: null
			// doubleCheck: null,
			// doubleCheckCount: RETRY,
		};
		this._prevPos = -1;
		this._renderer = renderer;
		this._onCheck = this._onCheck.bind(this);
		this._onResize = this._onResize.bind(this);
		this.attachEvent();
		this.setScrollPos();
	}

	Watcher.prototype.getStatus = function getStatus() {
		return {
			_prevPos: this._prevPos,
			scrollPos: this.getOrgScrollPos()
		};
	};

	Watcher.prototype.setStatus = function setStatus(status) {
		var applyScrollPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

		this._prevPos = status._prevPos;
		applyScrollPos && this.scrollTo(status.scrollPos);
	};

	Watcher.prototype.scrollTo = function scrollTo(pos) {
		var arrPos = this._renderer.options.isVertical ? [0, pos] : [pos, 0];

		_utils.scrollTo.apply(undefined, [this._renderer.view].concat(arrPos));
	};

	Watcher.prototype.getScrollPos = function getScrollPos() {
		return this._prevPos;
	};

	Watcher.prototype.setScrollPos = function setScrollPos(pos) {
		var rawPos = pos;

		if (typeof pos === "undefined") {
			rawPos = this.getOrgScrollPos();
		}
		this._prevPos = rawPos - this._renderer.getContainerOffset();
	};

	Watcher.prototype.attachEvent = function attachEvent() {
		(0, _utils.addEvent)(this._renderer.view, "scroll", this._onCheck);
		(0, _utils.addEvent)(window, "resize", this._onResize);
	};

	Watcher.prototype.getOrgScrollPos = function getOrgScrollPos() {
		return (0, _utils.scroll)(this._renderer.view, this._renderer.options.isVertical);
	};

	Watcher.prototype._onCheck = function _onCheck() {
		var orgScrollPos = this.getOrgScrollPos();
		var prevPos = this.getScrollPos();

		this.setScrollPos(orgScrollPos);
		var scrollPos = this.getScrollPos();

		if (_consts.IS_IOS && orgScrollPos === 0 || prevPos === scrollPos) {
			return;
		}
		this._callback.check && this._callback.check({
			isForward: prevPos < scrollPos,
			scrollPos: scrollPos,
			orgScrollPos: orgScrollPos,
			horizontal: !this._renderer.options.isVertical
		});
	};

	Watcher.prototype._onResize = function _onResize() {
		var _this = this;

		if (this._timer.resize) {
			clearTimeout(this._timer.resize);
		}
		this._timer.resize = setTimeout(function () {
			_this._renderer.isNeededResize() && _this._callback.layout && _this._callback.layout();
			_this._timer.resize = null;
			_this._prevPos = -1;
		}, 100);
	};

	Watcher.prototype.detachEvent = function detachEvent() {
		(0, _utils.removeEvent)(window, "resize", this._onResize);
	};

	Watcher.prototype.destroy = function destroy() {
		this.detachEvent();
		this._prevPos = -1;
	};

	return Watcher;
}();

exports["default"] = Watcher;
module.exports = exports["default"];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _consts = __webpack_require__(0);

var _utils = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// ALIGN
var START = _consts.ALIGN.START,
    CENTER = _consts.ALIGN.CENTER,
    END = _consts.ALIGN.END,
    JUSTIFY = _consts.ALIGN.JUSTIFY;

/**
 * A module used to arrange card elements including content infinitely according to layout type. With this module, you can implement various layouts composed of different card elements whose sizes vary. It guarantees performance by maintaining the number of DOMs the module is handling under any circumstance
 * @ko GridLayout는 벽돌을 쌓아 올린 모양처럼 동일한 너비를 가진 이미지가 엇갈려 배열되는 레이아웃이다. 모든 이미지의 너비를 동일한 크기로 조정하고, 가장 높이가 낮은 열을 찾아 새로운 이미지를 삽입한다. 따라서 배치된 이미지 사이에 빈 공간이 생기지는 않지만 배치된 레이아웃의 아래쪽은 울퉁불퉁해진다.
 * @class eg.InfiniteGrid.GridLayout
 * @param {Object} [options] The option object of eg.InfiniteGrid.GridLayout module <ko>eg.InfiniteGrid.GridLayout 모듈의 옵션 객체</ko>
 * @param {String} [options.margin=0] Margin used to create space around items <ko>아이템들 사이의 공간</ko>
 * @param {Boolean} [options.horizontal="vertical"] Direction of the scroll movement (vertical, horizontal) <ko>스크롤 이동 방향 (vertical 세로방향, horizontal 가로방향)</ko>
 * @param {Boolean} [options.align=START] Align of the position of the items (START, CENTER, END, JUSTIFY) <ko>아이템들의 위치의 정렬 (START, CENTER, END, JUSTIFY)</ko>
 * @param {Boolean} [options.itemSize=0] Direction of the scroll movement (true: horizontal, false: vertical) <ko>스크롤 이동 방향 (true 가로방향, false 세로방향</ko>
 * @example
```
<script>
var ig = new eg.InfiniteGrid("#grid");

ig.setLayout(eg.InfiniteGrid.GridLayout, {
	margin: 10,
	align: "start",
	itemSize: 200
});

// or

var layout = new eg.InfiniteGrid.GridLayout({
	margin: 10,
	align: "center",
	itemSize: 200,
	direction: "horizontal"
});

</script>
```
 **/

var GridLayout = function () {
	function GridLayout() {
		var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		_classCallCheck(this, GridLayout);

		this.options = (0, _utils.assignOptions)({
			align: START,
			itemSize: 0
		}, options);
		this._size = 0;
		this._isHorizontal = this.options.direction === _consts.HORIZONTAL;
		this._columnSize = 0;
		this._columnLength = 0;
		this._style = (0, _utils.getStyleNames)(this.options.direction);
	}

	GridLayout.prototype.getPoints = function getPoints(outlines) {
		var pos = this._isHorizontal ? "left" : "top";

		return outlines.map(function (outline) {
			return outline[pos];
		});
	};

	GridLayout.prototype.checkColumn = function checkColumn(item) {
		var margin = this.options.margin;
		// if direction is horizontal, fixed dimension is height
		// if direction is vertical, fixed dimension is width
		var sizeName = this._isHorizontal ? "height" : "width";
		var columnSize = this.options.itemSize || item && item.size[sizeName] || 0;

		this._columnSize = columnSize;
		if (!columnSize) {
			this._columnLength = 1;
			return;
		}
		this._columnLength = Math.max(parseInt((this._size + margin) / (columnSize + margin), 10), 1);
	};

	GridLayout.prototype._layout = function _layout(items, outline, isAppend) {
		var length = items.length;
		var margin = this.options.margin;
		var align = this.options.align;
		var style = this._style;

		var size1Name = style.size1;
		var size2Name = style.size2;
		var pos1Name = style.pos1;
		var pos2Name = style.pos2;
		var columnSize = this._columnSize;
		var columnLength = this._columnLength;

		var size = this._size;
		var viewDist = size - (columnSize + margin) * columnLength + margin;

		var pointCaculateName = isAppend ? "min" : "max";
		var startOutline = outline.slice();
		var endOutline = outline.slice();
		var startIndex = 0;
		var endIndex = -1;
		var endPos = -1;

		for (var i = 0; i < length; ++i) {
			var _item$rect;

			var point = Math[pointCaculateName].apply(Math, endOutline) || 0;
			var index = endOutline.indexOf(point);
			var item = items[isAppend ? i : length - 1 - i];
			var size1 = item.size[size1Name];
			var size2 = item.size[size2Name];
			var pos1 = isAppend ? point : point - margin - size1;
			var endPos1 = pos1 + size1 + margin;

			if (index === -1) {
				index = 0;
			}
			var pos2 = (columnSize + margin) * index;

			// ALIGN
			if (align === CENTER) {
				pos2 += viewDist / 2;
			} else if (align === END) {
				pos2 += viewDist + columnSize - size2;
			} else if (align === JUSTIFY) {
				pos2 = (size - columnSize) / (columnLength - 1) * index;
			}
			// tetris
			item.rect = (_item$rect = {}, _item$rect[pos1Name] = pos1, _item$rect[pos2Name] = pos2, _item$rect);
			item.column = index;
			endOutline[index] = isAppend ? endPos1 : pos1;
			if (endIndex === -1) {
				endIndex = i;
				endPos = endPos1;
			} else if (endPos < endPos1) {
				endIndex = i;
				endPos = endPos1;
			}
		}
		if (!isAppend) {
			items.sort(function (a, b) {
				var item1pos1 = a.rect[pos1Name];
				var item1pos2 = a.rect[pos2Name];
				var item2pos1 = b.rect[pos1Name];
				var item2pos2 = b.rect[pos2Name];

				if (item1pos1 - item2pos1) {
					return item1pos1 - item2pos1;
				}
				return item1pos2 - item2pos2;
			});
			endIndex = length - 1;
		}
		// if append items, startOutline is low, endOutline is high
		// if prepend items, startOutline is high, endOutline is low
		return {
			start: isAppend ? startOutline : endOutline,
			end: isAppend ? endOutline : startOutline,
			startIndex: startIndex,
			endIndex: endIndex
		};
	};

	GridLayout.prototype._insert = function _insert() {
		var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
		var outline = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
		var type = arguments[2];

		var clone = items.map(function (item) {
			return _extends({}, item);
		});

		var startOutline = outline;

		if (!this._columnLength) {
			this.checkColumn(items[0]);
		}
		if (outline.length !== this._columnLength) {
			startOutline = (0, _utils.fill)(this._columnLength, outline.length === 0 ? 0 : Math[type === _consts.APPEND ? "min" : "max"].apply(Math, outline) || 0);
		}

		var result = this._layout(clone, startOutline, type);

		return {
			items: clone,
			outlines: result
		};
	};
	/**
  * Adds items at the bottom of a outline.
  * @ko 아이템들을 아웃라인 아래에 추가한다.
  * @method eg.InfiniteGrid.GridLayout#append
  * @param {Array} items Array of items to be layouted <ko>레이아웃할 아이템들의 배열</ko>
  * @param {Array} outline Array of outline points to be reference points <ko>기준점이 되는 아웃라인 점들의 배열</ko>
  * @return {Object} Layouted items and outline of start and end <ko> 레이아웃이 된 아이템과 시작과 끝의 아웃라인이 담긴 정보</ko>
  * @example
  * layout.prepend(items, [100, 200, 300, 400]);
  */


	GridLayout.prototype.append = function append(items, outline) {
		return this._insert(items, outline, _consts.APPEND);
	};
	/**
  * Adds items at the top of a outline.
  * @ko 아이템을 아웃라인 위에 추가한다.
  * @method eg.InfiniteGrid.GridLayout#prepend
  * @param {Array} items Array of items to be layouted <ko>레이아웃할 아이템들의 배열</ko>
  * @param {Array} outline Array of outline points to be reference points <ko>기준점이 되는 아웃라인 점들의 배열</ko>
  * @return {Object} Layouted items and outline of start and end <ko> 레이아웃이 된 아이템과 시작과 끝의 아웃라인이 담긴 정보</ko>
  * @example
  * layout.prepend(items, [100, 200, 300, 400]);
  */


	GridLayout.prototype.prepend = function prepend(items, outline) {
		return this._insert(items, outline, _consts.PREPEND);
	};
	/**
  * Adds items of groups at the bottom of a outline.
  * @ko 그룹들의 아이템들을 아웃라인 아래에 추가한다.
  * @method eg.InfiniteGrid.GridLayout#layout
  * @param {Array} groups Array of groups to be layouted <ko>레이아웃할 그룹들의 배열</ko>
  * @param {Array} outline Array of outline points to be reference points <ko>기준점이 되는 아웃라인 점들의 배열</ko>
  * @return {eg.InfiniteGrid.GridLayout} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
  * @example
  * layout.layout(groups, [100, 200, 300, 400]);
  */


	GridLayout.prototype.layout = function layout() {
		var _this = this;

		var groups = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
		var outline = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

		var firstItem = groups.length && groups[0].items.length && groups[0].items[0] || 0;

		this.checkColumn(firstItem);

		// if outlines' length and columns' length are now same, re-caculate outlines.
		var startOutline = void 0;

		if (outline.length !== this._columnLength) {
			var pos = outline.length === 0 ? 0 : Math.min.apply(Math, outline);

			// re-layout items.
			startOutline = (0, _utils.fill)(this._columnLength, pos);
		} else {
			startOutline = outline.slice();
		}
		groups.forEach(function (group) {
			var items = group.items;
			var result = _this._layout(items, startOutline, _consts.APPEND);

			group.outlines = result;
			startOutline = result.end;
		});

		return this;
	};
	/**
  * Set the viewport size of the layout.
  * @ko 레이아웃의 가시 사이즈를 설정한다.
  * @method eg.InfiniteGrid.GridLayout#setSize
  * @param {Number} size The viewport size of container area where items are added to a layout <ko>레이아웃에 아이템을 추가하는 컨테이너 영역의 가시 사이즈</ko>
  * @return {eg.InfiniteGrid.GridLayout} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
  * @example
  * layout.layout(groups, [100, 200, 300, 400]);
  */


	GridLayout.prototype.setSize = function setSize(size) {
		this._size = size;
		return this;
	};

	return GridLayout;
}();

exports["default"] = GridLayout;
module.exports = exports["default"];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _FrameLayout2 = __webpack_require__(4);

var _FrameLayout3 = _interopRequireDefault(_FrameLayout2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function makeShapeOutline(outline, itemSize, columnLength, isAppend) {
	var point = Math[isAppend ? "min" : "max"].apply(Math, outline) || 0;

	if (outline.length !== columnLength) {
		return new Array(columnLength).fill(0);
	}
	return outline.map(function (l) {
		return parseInt((l - point) / itemSize, 10);
	});
}
function getColumn(item) {
	if (item.column) {
		return item.column;
	}
	if (item.el) {
		var dataset = item.el.dataset;

		if (dataset) {
			item.column = dataset.column || 1;
		} else {
			item.column = item.el.getAttribute("column") || 1;
		}
		return item.column;
	}
	item.column = 1;
	return 1;
}

var SquareLayout = function (_FrameLayout) {
	_inherits(SquareLayout, _FrameLayout);

	function SquareLayout() {
		_classCallCheck(this, SquareLayout);

		return _possibleConstructorReturn(this, _FrameLayout.apply(this, arguments));
	}

	SquareLayout.prototype._checkItemSize = function _checkItemSize() {
		var column = this.options.column;

		if (!column) {
			_FrameLayout.prototype._checkItemSize.call(this);
			return;
		}
		var margin = this.options.margin;

		// if itemSize is not in options, caculate itemSize from size.
		this._itemSize = (this._size + margin) / column - margin;
	};

	SquareLayout.prototype._layout = function _layout(items) {
		var _shapes;

		var outline = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
		var isAppend = arguments[2];

		var itemSize = this._getItemSize();
		var margin = this.options.margin;
		var columnLength = this.options.column || parseInt((this._size + margin) / (itemSize + margin), 10);
		var length = items.length;
		var endOutline = makeShapeOutline(outline, itemSize, columnLength, isAppend);
		var pointCaculateName = isAppend ? "min" : "max";
		var shapes = [];
		var sign = isAppend ? 1 : -1;
		var style = this._style;
		var pos1Name = style.pos1;
		var pos2Name = style.pos2;

		for (var i = 0; i < length; ++i) {
			var _shapes$push;

			var point = Math[pointCaculateName].apply(Math, endOutline);
			var index = endOutline.indexOf(point);
			var item = items[isAppend ? i : length - 1 - i];
			var column = getColumn(item);
			var columnCount = 1;

			if (column > 1) {
				for (var j = 1; j < column && index + j < columnLength; ++j) {
					if (isAppend && endOutline[index + j] <= point || !isAppend && endOutline[index + j] >= point) {
						++columnCount;
						continue;
					}
					break;
				}
			}
			shapes.push((_shapes$push = {
				width: columnCount,
				height: columnCount
			}, _shapes$push[pos1Name] = point - (!isAppend ? columnCount : 0), _shapes$push[pos2Name] = index, _shapes$push));
			for (var _j = 0; _j < columnCount; ++_j) {
				endOutline[index + _j] = point + sign * columnCount;
			}
		}

		this._shapes = (_shapes = {
			shapes: shapes
		}, _shapes[style.size2] = columnLength, _shapes);
		var result = _FrameLayout.prototype._layout.call(this, items, outline, isAppend);

		shapes.sort(function (shape1, shape2) {
			var item1pos1 = shape1[pos1Name];
			var item1pos2 = shape1[pos2Name];
			var item2pos1 = shape2[pos1Name];
			var item2pos2 = shape2[pos2Name];

			if (item1pos1 - item2pos1) {
				return item1pos1 - item2pos1;
			}
			return item1pos2 - item2pos2;
		});
		items.sort(function (a, b) {
			var item1pos1 = a.rect[pos1Name];
			var item1pos2 = a.rect[pos2Name];
			var item2pos1 = b.rect[pos1Name];
			var item2pos2 = b.rect[pos2Name];

			if (item1pos1 - item2pos1) {
				return item1pos1 - item2pos1;
			}
			return item1pos2 - item2pos2;
		});
		return result;
	};

	return SquareLayout;
}(_FrameLayout3["default"]);

exports["default"] = SquareLayout;
module.exports = exports["default"];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _BoxModel = __webpack_require__(14);

var _BoxModel2 = _interopRequireDefault(_BoxModel);

var _consts = __webpack_require__(0);

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getCost(originLength, length) {
	var cost = originLength / length;

	if (cost < 1) {
		cost = 1 / cost;
	}

	return cost - 1;
}
function fitArea(item, bestFitArea, itemFitSize, containerFitSize, layoutVertical) {
	item.height = itemFitSize.height;
	item.width = itemFitSize.width;

	bestFitArea.height = containerFitSize.height;
	bestFitArea.width = containerFitSize.width;

	if (layoutVertical) {
		item.top = bestFitArea.top + bestFitArea.height;
		item.left = bestFitArea.left;
	} else {
		item.left = bestFitArea.left + bestFitArea.width;
		item.top = bestFitArea.top;
	}
}

var PackingLayout = function () {
	function PackingLayout() {
		var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		_classCallCheck(this, PackingLayout);

		this.options = (0, _utils.assignOptions)({
			aspectRatio: 1,
			sizeWeight: 1,
			ratioWeight: 1
		}, options);
		this._size = 0;
		this._style = (0, _utils.getStyleNames)(this.options.direction);
		this._isHorizontal = this.options.direction === _consts.HORIZONTAL;
	}

	PackingLayout.prototype._findBestFitArea = function _findBestFitArea(container, item) {
		if (container.getRatio() === 0) {
			// 아이템 최초 삽입시 전체영역 지정
			container.originWidth = item.width;
			container.originHeight = item.height;
			container.width = item.width;
			container.height = item.height;
			return;
		}

		var bestFitArea = null;
		var minCost = 10000000;
		var layoutVertical = false;
		var itemFitSize = {
			width: 0,
			height: 0
		};
		var containerFitSize = {
			width: 0,
			height: 0
		};
		var _options = this.options,
		    sizeWeight = _options.sizeWeight,
		    ratioWeight = _options.ratioWeight;


		container.innerItem.forEach(function (v) {
			var containerSizeCost = getCost(v.getOriginSize(), v.getSize()) * sizeWeight;
			var containerRatioCost = getCost(v.getOriginRatio(), v.getRatio()) * ratioWeight;
			var cost = void 0;

			for (var i = 0; i < 2; ++i) {
				var itemWidth = void 0;
				var itemHeight = void 0;
				var containerWidth = void 0;
				var containerHeight = void 0;

				if (i === 0) {
					// 상하에 아이템 추가
					itemWidth = v.width;
					itemHeight = v.height * (item.height / (v.originHeight + item.height));
					containerWidth = v.width;
					containerHeight = v.height - itemHeight;
				} else {
					// 좌우에 아이템 추가
					itemHeight = v.height;
					itemWidth = v.width * (item.width / (v.originWidth + item.width));
					containerHeight = v.height;
					containerWidth = v.width - itemWidth;
				}

				var itemSize = itemWidth * itemHeight;
				var itemRatio = itemWidth / itemHeight;
				var containerSize = containerWidth * containerHeight;
				var containerRatio = containerHeight / containerHeight;

				cost = getCost(item.getSize(), itemSize) * sizeWeight;
				cost += getCost(item.getRatio(), itemRatio) * ratioWeight;
				cost += getCost(v.getOriginSize(), containerSize) * sizeWeight - containerSizeCost;
				cost += getCost(v.getOriginRatio(), containerRatio) * ratioWeight - containerRatioCost;

				if (cost === Math.min(cost, minCost)) {
					minCost = cost;
					bestFitArea = v;
					layoutVertical = i === 0;
					itemFitSize.width = itemWidth;
					itemFitSize.height = itemHeight;
					containerFitSize.width = containerWidth;
					containerFitSize.height = containerHeight;
				}
			}
		});

		fitArea(item, bestFitArea, itemFitSize, containerFitSize, layoutVertical);
	};

	PackingLayout.prototype._layout = function _layout(items) {
		var _this = this;

		var outline = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
		var isAppend = arguments[2];

		var style = this._style;
		var isHorizontal = this._isHorizontal;
		var aspectRatio = this.options.aspectRatio;
		var margin = this.options.margin;
		var pos1Name = style.pos1;
		var size1Name = style.size1;
		var containerWidth = this._size * (isHorizontal ? aspectRatio : 1);
		var containerHeight = this._size / (isHorizontal ? 1 : aspectRatio);
		var containerSize1 = isHorizontal ? containerWidth : containerHeight;
		var prevOutline = (0, _utils.toZeroArray)(outline);
		var start = isAppend ? Math.max.apply(Math, prevOutline) : Math.min.apply(Math, prevOutline) - containerSize1 - margin;
		var end = start + containerSize1 + margin;
		var container = new _BoxModel2["default"]({});

		var startIndex = -1;
		var endIndex = -1;
		var startPos = -1;
		var endPos = -1;

		items.forEach(function (item) {
			var model = new _BoxModel2["default"]({
				originWidth: item.size.width,
				originHeight: item.size.height,
				width: item.size.width,
				height: item.size.height
			});

			_this._findBestFitArea(container, model);
			container.pushItem(model);
			container.scaleTo(containerWidth + margin, containerHeight + margin);
		});
		items.forEach(function (item, i) {
			var _container$innerItem$ = container.innerItem[i],
			    left = _container$innerItem$.left,
			    top = _container$innerItem$.top,
			    width = _container$innerItem$.width,
			    height = _container$innerItem$.height;


			item.rect = { top: top, left: left, width: width - margin, height: height - margin };
			item.rect[pos1Name] += start;

			if (startIndex === -1) {
				startIndex = i;
				endIndex = i;
				startPos = item.rect[pos1Name];
				endPos = startPos;
			}
			if (startPos > item.rect[pos1Name]) {
				startPos = item.rect[pos1Name];
				startIndex = i;
			}
			if (endPos < item.rect[pos1Name] + item.rect[size1Name] + margin) {
				endPos = item.rect[pos1Name] + item.rect[size1Name] + margin;
				endIndex = i;
			}
		});

		return {
			start: [start],
			end: [end],
			startIndex: startIndex,
			endIndex: endIndex
		};
	};

	PackingLayout.prototype._insert = function _insert(items, outline, type) {
		// this only needs the size of the item.
		var clone = items.map(function (item) {
			return _extends({}, item);
		});

		return {
			items: clone,
			outlines: this._layout(clone, outline, type)
		};
	};

	PackingLayout.prototype.append = function append(items, outline) {
		return this._insert(items, outline, _consts.APPEND);
	};

	PackingLayout.prototype.prepend = function prepend(items, outline) {
		return this._insert(items, outline, _consts.PREPEND);
	};

	PackingLayout.prototype.layout = function layout(groups) {
		var outline = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

		var length = groups.length;
		var point = outline;

		for (var i = 0; i < length; ++i) {
			var group = groups[i];

			point = this._layout(group.items, point, _consts.APPEND);
			group.outlines = point;
			point = point.end;
		}
	};

	PackingLayout.prototype.setSize = function setSize(size) {
		this._size = size;
	};

	return PackingLayout;
}();

exports["default"] = PackingLayout;
module.exports = exports["default"];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BoxModel = function () {
	function BoxModel(option) {
		_classCallCheck(this, BoxModel);

		this._originWidth = option.originWidth || 0;
		this._originHeight = option.originHeight || 0;
		this._width = option.width || 0;
		this._height = option.height || 0;
		this._left = option.left || 0;
		this._top = option.top || 0;
		this._item = option.item;
		this._innerItem = option.innerItem || [];
	}

	BoxModel.prototype.scaleTo = function scaleTo(width, height) {
		var scaleX = this._width === 0 ? 0 : width / this._width;
		var scaleY = this._height === 0 ? 0 : height / this._height;

		this._innerItem.forEach(function (v) {
			if (scaleX !== 0) {
				v.left *= scaleX;
				v.width *= scaleX;
			}
			if (scaleY !== 0) {
				v.top *= scaleY;
				v.height *= scaleY;
			}
		});

		this.width = width;
		this.height = height;
	};

	BoxModel.prototype.pushItem = function pushItem(item) {
		this._innerItem.push(item);
	};

	BoxModel.prototype.getOriginSize = function getOriginSize() {
		return this.originWidth * this.originHeight;
	};

	BoxModel.prototype.getSize = function getSize() {
		return this.width * this.height;
	};

	BoxModel.prototype.getOriginRatio = function getOriginRatio() {
		return this.originHeight === 0 ? 0 : this.originWidth / this.originHeight;
	};

	BoxModel.prototype.getRatio = function getRatio() {
		return this.height === 0 ? 0 : this.width / this.height;
	};

	BoxModel.prototype.isSmallerThen = function isSmallerThen(box) {
		return this.width <= box.width && this.height <= box.height;
	};

	BoxModel.prototype.isEqual = function isEqual(box) {
		return this.left === box.left && this.top === box.top && this.width === box.width && this.height === box.height;
	};

	_createClass(BoxModel, [{
		key: "item",
		get: function get() {
			return this._item;
		}
	}, {
		key: "originWidth",
		get: function get() {
			return this._originWidth;
		},
		set: function set(width) {
			this._originWidth = width;
		}
	}, {
		key: "originHeight",
		get: function get() {
			return this._originHeight;
		},
		set: function set(height) {
			this._originHeight = height;
		}
	}, {
		key: "width",
		get: function get() {
			return this._width;
		},
		set: function set(width) {
			this._width = width;
		}
	}, {
		key: "height",
		get: function get() {
			return this._height;
		},
		set: function set(height) {
			this._height = height;
		}
	}, {
		key: "left",
		get: function get() {
			return this._left;
		},
		set: function set(left) {
			this._left = left;
		}
	}, {
		key: "top",
		get: function get() {
			return this._top;
		},
		set: function set(top) {
			this._top = top;
		}
	}, {
		key: "innerItem",
		get: function get() {
			return this._innerItem;
		}
	}]);

	return BoxModel;
}();

module.exports = BoxModel;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dijkstra = __webpack_require__(16);

var _dijkstra2 = _interopRequireDefault(_dijkstra);

var _consts = __webpack_require__(0);

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JustifiedLayout = function () {
	function JustifiedLayout() {
		var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		_classCallCheck(this, JustifiedLayout);

		this.options = (0, _utils.assignOptions)({
			minSize: 0,
			maxSize: 0
		}, options);
		this._style = (0, _utils.getStyleNames)(this.options.direction);
		this._size = 0;
	}

	JustifiedLayout.prototype._layout = function _layout(items, outline, isAppend) {
		var _this = this;

		var style = this._style;
		var size1Name = style.size1;
		var size2Name = style.size2;
		var startIndex = 0;
		var endIndex = items.length;
		var graph = function graph(_start) {
			var results = {};
			var start = +_start.replace(/[^0-9]/g, "");
			var length = endIndex + 1;

			for (var i = start + 1; i < length; ++i) {
				if (i - start > 8) {
					break;
				}
				var cost = _this._getCost(items, start, i, size1Name, size2Name);

				if (cost < 0 && i === length - 1) {
					cost = 0;
				}
				if (cost !== null) {
					results["node" + i] = Math.pow(cost, 2);
				}
			}

			return results;
		};
		// shortest path for items' total height.
		var path = _dijkstra2["default"].find_path(graph, "node" + startIndex, "node" + endIndex);

		return this._setStyle(items, path, outline, isAppend);
	};

	JustifiedLayout.prototype._getSize = function _getSize(items, size1Name, size2Name) {
		var margin = this.options.margin;
		var size = items.reduce(function (sum, item) {
			return sum + item.size[size2Name] / item.size[size1Name];
		}, 0);

		return (this._size - margin * (items.length - 1)) / size;
	};

	JustifiedLayout.prototype._getCost = function _getCost(items, i, j, size1Name, size2Name) {
		var size = this._getSize(items.slice(i, j), size1Name, size2Name);
		var min = this.options.minSize || 0;
		var max = this.options.maxSize || Infinity;

		if (isFinite(max)) {
			// if this size is not in range, the cost increases sharply.
			if (size < min) {
				return Math.pow(size - min, 2) + Math.pow(max, 2);
			} else if (size > max) {
				return Math.pow(size - max, 2) + Math.pow(max, 2);
			} else {
				// if this size in range, the cost is negative or low.
				return Math.min(size - max, min - size);
			}
		}
		// if max is infinite type, caculate cost only with "min".
		if (size < min) {
			return Math.max(Math.pow(min, 2), Math.pow(size, 2));
		}
		return size - min;
	};

	JustifiedLayout.prototype._setStyle = function _setStyle(items, path) {
		var outline = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
		var isAppend = arguments[3];

		var style = this._style;
		// if direction is vertical
		// pos1 : top, pos11 : bottom
		// size1 : height
		// pos2 : left, pos22 : right
		// size2 : width

		// if direction is horizontal
		// pos1 : left, pos11 : right
		// size1 : width
		// pos2 : top, pos22 : bottom
		// size2 : height
		var pos1Name = style.pos1;
		var size1Name = style.size1;
		var pos2Name = style.pos2;
		var size2Name = style.size2;
		var length = path.length;
		var margin = this.options.margin;
		var startPoint = outline[0] || 0;
		var endPoint = startPoint;
		var height = 0;

		for (var i = 0; i < length - 1; ++i) {
			var path1 = parseInt(path[i].replace("node", ""), 10);
			var path2 = parseInt(path[i + 1].replace("node", ""), 10);
			// pathItems(path1 to path2) are in 1 line.
			var pathItems = items.slice(path1, path2);
			var pathItemsLength = pathItems.length;
			var size1 = this._getSize(pathItems, size1Name, size2Name);
			var pos1 = endPoint;

			for (var j = 0; j < pathItemsLength; ++j) {
				var _item$rect;

				var item = pathItems[j];
				var size2 = item.size[size2Name] / item.size[size1Name] * size1;
				// item has margin bottom and right.
				// first item has not margin.
				var prevItemRect = j === 0 ? 0 : pathItems[j - 1].rect;
				var pos2 = prevItemRect ? prevItemRect[pos2Name] + prevItemRect[size2Name] + margin : 0;

				item.rect = (_item$rect = {}, _item$rect[pos1Name] = pos1, _item$rect[pos2Name] = pos2, _item$rect[size1Name] = size1, _item$rect[size2Name] = size2, _item$rect);
			}
			height += margin + size1;
			endPoint = startPoint + height;
		}
		var itemsLength = items.length;
		var startIndex = itemsLength ? 0 : -1;
		var endIndex = itemsLength ? itemsLength - 1 : -1;

		if (isAppend) {
			// previous group's end outline is current group's start outline
			return {
				start: [startPoint],
				end: [endPoint],
				startIndex: startIndex,
				endIndex: endIndex
			};
		}
		// for prepend, only substract height from position.
		// always start is lower than end.

		for (var _i = 0; _i < itemsLength; ++_i) {
			var _item = items[_i];

			// move items as long as height for prepend
			_item.rect[pos1Name] -= height;
		}
		return {
			start: [startPoint - height],
			end: [startPoint], // endPoint - height = startPoint
			startIndex: startIndex,
			endIndex: endIndex
		};
	};

	JustifiedLayout.prototype._insert = function _insert(items, outline, type) {
		// this only needs the size of the item.
		var clone = items.map(function (item) {
			return _extends({}, item);
		});

		return {
			items: clone,
			outlines: this._layout(clone, outline, type)
		};
	};

	JustifiedLayout.prototype.setSize = function setSize(size) {
		this._size = size;
	};

	JustifiedLayout.prototype.append = function append(items, outline) {
		return this._insert(items, outline, _consts.APPEND);
	};

	JustifiedLayout.prototype.prepend = function prepend(items, outline) {
		return this._insert(items, outline, _consts.PREPEND);
	};

	JustifiedLayout.prototype.layout = function layout(groups, outlines) {
		var length = groups.length;
		var point = outlines;

		for (var i = 0; i < length; ++i) {
			var group = groups[i];

			point = this._layout(group.items, point, _consts.APPEND);
			group.outlines = point;
			point = point.end;
		}
	};

	return JustifiedLayout;
}();

exports["default"] = JustifiedLayout;
module.exports = exports["default"];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */
/******************************************************************************
 * Created 2008-08-19.
 *
 * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
 *
 * Copyright (C) 2008
 *   Wyatt Baldwin <self@wyattbaldwin.com>
 *   All rights reserved
 *
 * Licensed under the MIT license.
 *
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *****************************************************************************/
(function () {
  var dijkstra = {
    single_source_shortest_paths: function single_source_shortest_paths(graph, s, d) {
      // Predecessor map for each node that has been encountered.
      // node ID => predecessor node ID
      var predecessors = {};

      // Costs of shortest paths from s to all nodes encountered.
      // node ID => cost
      var costs = {};
      costs[s] = 0;

      // Costs of shortest paths from s to all nodes encountered; differs from
      // `costs` in that it provides easy access to the node that currently has
      // the known shortest path from s.
      // XXX: Do we actually need both `costs` and `open`?
      var open = new BinaryHeap(function (x) {
        return x.cost;
      });
      open.push({ value: s, cost: 0 });

      var closest, u, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
      while (open.size()) {
        // In the nodes remaining in graph that have a known cost from s,
        // find the node, u, that currently has the shortest path from s.
        closest = open.pop();
        u = closest.value;
        cost_of_s_to_u = closest.cost;

        // Get nodes adjacent to u...
        adjacent_nodes = graph(u) || {};

        // ...and explore the edges that connect u to those nodes, updating
        // the cost of the shortest paths to any or all of those nodes as
        // necessary. v is the node across the current edge from u.
        for (var v in adjacent_nodes) {
          // Get the cost of the edge running from u to v.
          cost_of_e = adjacent_nodes[v];

          // Cost of s to u plus the cost of u to v across e--this is *a*
          // cost from s to v that may or may not be less than the current
          // known cost to v.
          cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;

          // If we haven't visited v yet OR if the current known cost from s to
          // v is greater than the new cost we just found (cost of s to u plus
          // cost of u to v across e), update v's cost in the cost list and
          // update v's predecessor in the predecessor list (it's now u).
          cost_of_s_to_v = costs[v];
          first_visit = typeof costs[v] === 'undefined';
          if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
            costs[v] = cost_of_s_to_u_plus_cost_of_e;
            open.push({ value: v, cost: cost_of_s_to_u_plus_cost_of_e });
            predecessors[v] = u;
          }
        }
      }

      if (typeof costs[d] === 'undefined') {
        var msg = ['Could not find a path from ', s, ' to ', d, '.'].join('');
        throw new Error(msg);
      }

      return predecessors;
    },

    extract_shortest_path_from_predecessor_list: function extract_shortest_path_from_predecessor_list(predecessors, d) {
      var nodes = [];
      var u = d;
      var predecessor;
      while (u) {
        nodes.push(u);
        predecessor = predecessors[u];
        u = predecessors[u];
      }
      nodes.reverse();
      return nodes;
    },

    find_path: function find_path(graph, s, d) {
      var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
      return dijkstra.extract_shortest_path_from_predecessor_list(predecessors, d);
    }

  };

  function BinaryHeap(scoreFunction) {
    this.content = [];
    this.scoreFunction = scoreFunction;
  }

  BinaryHeap.prototype = {
    push: function push(element) {
      // Add the new element to the end of the array.
      this.content.push(element);
      // Allow it to bubble up.
      this.bubbleUp(this.content.length - 1);
    },

    pop: function pop() {
      // Store the first element so we can return it later.
      var result = this.content[0];
      // Get the element at the end of the array.
      var end = this.content.pop();
      // If there are any elements left, put the end element at the
      // start, and let it sink down.
      if (this.content.length > 0) {
        this.content[0] = end;
        this.sinkDown(0);
      }
      return result;
    },

    remove: function remove(node) {
      var len = this.content.length;
      // To remove a value, we must search through the array to find
      // it.
      for (var i = 0; i < len; i++) {
        if (this.content[i] === node) {
          // When it is found, the process seen in 'pop' is repeated
          // to fill up the hole.
          var end = this.content.pop();
          if (i !== len - 1) {
            this.content[i] = end;
            if (this.scoreFunction(end) < this.scoreFunction(node)) {
              this.bubbleUp(i);
            } else {
              this.sinkDown(i);
            }
          }
          return;
        }
      }
      throw new Error('Node not found.');
    },

    size: function size() {
      return this.content.length;
    },

    bubbleUp: function bubbleUp(n) {
      // Fetch the element that has to be moved.
      var element = this.content[n];
      // When at 0, an element can not go up any further.
      while (n > 0) {
        // Compute the parent element's index, and fetch it.
        var parentN = Math.floor((n + 1) / 2) - 1,
            parent = this.content[parentN];
        // Swap the elements if the parent is greater.
        if (this.scoreFunction(element) < this.scoreFunction(parent)) {
          this.content[parentN] = element;
          this.content[n] = parent;
          // Update 'n' to continue at the new position.
          n = parentN;
        }
        // Found a parent that is less, no need to move it further.
        else {
            break;
          }
      }
    },

    sinkDown: function sinkDown(n) {
      // Look up the target element and its score.
      var length = this.content.length,
          element = this.content[n],
          elemScore = this.scoreFunction(element);

      while (true) {
        // Compute the indices of the child elements.
        var child2N = (n + 1) * 2,
            child1N = child2N - 1;
        // This is used to store the new position of the element,
        // if any.
        var swap = null;
        // If the first child exists (is inside the array)...
        if (child1N < length) {
          // Look it up and compute its score.
          var child1 = this.content[child1N],
              child1Score = this.scoreFunction(child1);
          // If the score is less than our element's, we need to swap.
          if (child1Score < elemScore) {
            swap = child1N;
          }
        }
        // Do the same checks for the other child.
        if (child2N < length) {
          var child2 = this.content[child2N],
              child2Score = this.scoreFunction(child2);
          if (child2Score < (swap == null ? elemScore : child1Score)) {
            swap = child2N;
          }
        }

        // If the element needs to be moved, swap it, and continue.
        if (swap !== null) {
          this.content[n] = this.content[swap];
          this.content[swap] = element;
          n = swap;
        }
        // Otherwise, we are done.
        else {
            break;
          }
      }
    }
  };

  /**
   * Browserify 지원을 위한 모듈화 코드
   */
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = dijkstra;
  } else {
    window.dijkstra = dijkstra;
  }
})();

/***/ })
/******/ ]);
});
//# sourceMappingURL=infinitegrid.js.map