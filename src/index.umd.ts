/**
 * Copyright (c) NAVER Corp.
 * egjs-infinitegrid projects are licensed under the MIT license
 */
import InfiniteGrid from "./InfiniteGrid";
import GridLayout from "./layouts/GridLayout";
import FrameLayout from "./layouts/FrameLayout";
import SquareLayout from "./layouts/SquareLayout";
import PackingLayout from "./layouts/PackingLayout";
import JustifiedLayout from "./layouts/JustifiedLayout";
import DOMRenderer from "./DOMRenderer";
import ItemManager from "./ItemManager";
import Infinite from "./Infinite";
import { CONTAINER_CLASSNAME, DEFAULT_OPTIONS } from "./consts";
import { categorize } from "./utils";

// fix for IE8
(InfiniteGrid as any).categorize = categorize;
(InfiniteGrid as any).CONTAINER_CLASSNAME = CONTAINER_CLASSNAME;
(InfiniteGrid as any).DEFAULT_OPTIONS = DEFAULT_OPTIONS;
(InfiniteGrid as any).GridLayout = GridLayout;
(InfiniteGrid as any).FrameLayout = FrameLayout;
(InfiniteGrid as any).SquareLayout = SquareLayout;
(InfiniteGrid as any).PackingLayout = PackingLayout;
(InfiniteGrid as any).JustifiedLayout = JustifiedLayout;
(InfiniteGrid as any).ItemManager = ItemManager;
(InfiniteGrid as any).Infinite = Infinite;
(InfiniteGrid as any).DOMRenderer = DOMRenderer;
(InfiniteGrid as any).default = InfiniteGrid;

export default InfiniteGrid;
