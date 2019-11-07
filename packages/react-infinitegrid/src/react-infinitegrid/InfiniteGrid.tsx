import * as React from "react";
import NativeInfiniteGrid, {
	GridLayout,
	ILayout,
	categorize,
	CONTAINER_CLASSNAME,
	ItemManager,
	IItem,
	INFINITEGRID_EVENTS,
	withInfiniteGridMethods,
} from "@egjs/infinitegrid";
import { findDOMNode } from "react-dom";
import { InfiniteGridProps, InfiniteGridType } from "./types";
import LoadingBar from "./LoadingBar";
import { camelize } from "./utils";

export default class InfiniteGrid<T extends ILayout = GridLayout> extends React.Component<InfiniteGridProps<T>, {
	layout: string;
}> {
	public static defaultProps: Required<InfiniteGridProps> = {
		tag: "div",
		containerTag: "div",
		layoutType: GridLayout,
		options: {},
		layoutOptions: {},
		useFirstRender: true,
		status: null,
		loading: null,
		groupBy: (item: any, index: number) => {
			const props = item.props;

			if ("data-groupkey" in props) {
				return props["data-groupkey"];
			} else if ("groupKey" in props) {
				return props.groupKey;
			} else {
				return "";
			}
		},
		onAppend: () => { },
		onPrepend: () => { },
		onLayoutComplete: () => { },
		onImageError: () => { },
		onChange: () => { },
	};
	public state = {
		layout: "",
	};
	@withInfiniteGridMethods
	private ig!: NativeInfiniteGrid;
	private wrapperElement!: HTMLElement;
	private containerElement!: HTMLElement;

	public render() {
		const props = this.props;
		const attributes = {};
		const items = this.toItems();
		const Tag = this.props.tag as any;

		for (const name in props) {
			if (name in InfiniteGrid.defaultProps) {
				continue;
			}
			attributes[name] = props[name];
		}

		let visibleChildren: React.ReactElement[] = [];
		const ig = this.ig;

		if (ig) {
			const state = this.state;
			const result = ig.beforeSync(items);
			state.layout = result === "relayout" ? result : state.layout || result;

			visibleChildren = ig.getRenderingItems().map((item: IItem) => item.jsx);

			if (this.props.loading && ig.isLoading()) {
				visibleChildren.push(<LoadingBar key="loadingBar" loading={this.props.loading!} />);
			}
		} else {
			const groups = categorize(items);
			if (props.status) {
				const { startCursor, endCursor } = props.status._infinite;

				visibleChildren = ItemManager.pluck(
					groups.slice(startCursor, endCursor + 1),
					"items",
				).map((item: IItem) => item.jsx);
			} else if (props.useFirstRender && groups[0]) {
				visibleChildren = groups[0].items.map((item: IItem) => item.jsx);
			}
		}
		return <Tag {...attributes}>{this.renderContainer(visibleChildren)}</Tag>;
	}
	public componentDidUpdate() {
		const ig = this.ig;
		const state = this.state;
		const layout = state.layout;
		const elements = this.getElements();

		if (this.props.loading && ig.isLoading()) {
			const loadingElement = elements.splice(elements.length - 1, 1)[0];

			ig.setLoadingBar({
				append: loadingElement,
				prepend: loadingElement,
			});
		}
		ig.sync(elements);

		if (layout) {
			state.layout = "";
			ig.layout(layout === "relayout");
		}
	}
	public componentDidMount() {
		this.wrapperElement = findDOMNode(this) as HTMLElement;

		this.ig = new NativeInfiniteGrid(this.wrapperElement, {
			...this.props.options,
			renderExternal: true,
		}).on("render", ({ next }) => {
			this.forceUpdate(() => {
				next();
			});
		});
		const ig = this.ig;

		INFINITEGRID_EVENTS.forEach((name: string) => {
			const eventName = camelize(`on ${name}`);
			ig.on(name, (e: any) => {
				this.props[eventName]!({ ...e, currentTarget: this });
			});
		});

		ig.setLayout(this.props.layoutType, this.props.layoutOptions);

		const elements = this.getElements();

		if (this.props.status) {
			ig.setStatus(this.props.status, true, elements);
		} else {
			ig.beforeSync(this.toItems());
			ig.layout(true);
		}
	}
	public componentWillUnmount() {
		this.ig.destroy();
	}
	public isLoading() {
		return this.ig.isLoading();
	}
	private renderContainer(children: React.ReactElement[]) {
		const props = this.props;
		const { isOverflowScroll } = props.options;

		if (!isOverflowScroll) {
			return children;
		}
		const ContainerTag = props.containerTag as any;

		return <ContainerTag className={CONTAINER_CLASSNAME} ref={(e: any) => {
			e && (this.containerElement = e);
		}}>
			{children}
		</ContainerTag>;
	}
	private getElements(): HTMLElement[] {
		return [].slice.call((this.containerElement || this.wrapperElement).children);
	}
	private toItems() {
		const {
			children,
			groupBy,
		} = this.props;
		const reactChildren = React.Children.toArray(children);
		return reactChildren.map((child: React.ReactElement, i) => {
			const groupKey = groupBy(child, i);
			const itemKey = child.key;

			return { groupKey, itemKey, jsx: child };
		});
	}
}

export default interface InfiniteGrid extends InfiniteGridType<InfiniteGrid> { }
