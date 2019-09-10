const buildHelper = require("@egjs/build-helper");
const layouts = ["gridlayout", "justifiedlayout", "squarelayout", "framelayout", "packinglayout"];
const name = "eg.InfiniteGrid";
const entries = layouts.reduce((arr, layout) => arr.concat([
	{
		name,
		input: `./src/index.${layout}.ts`,
		name: "eg.InfiniteGrid",
		output: `./dist/infinitegrid.${layout}.js`,
		format: "umd",
		resolve: true,
		uglify: false,
	},
	{
		name,
		input: `./src/index.${layout}.ts`,
		name: "eg.InfiniteGrid",
		output: `./dist/infinitegrid.${layout}.min.js`,
		format: "umd",
		resolve: true,
		uglify: true,
	},
]), []);


const external = {
	"@egjs/component": "eg.Component",
	"@egjs/list-differ": "eg.ListDiffer",
	"@egjs/lazyloaded": "eg.LazyLoaded",
};


export default buildHelper([
	{
		name,
		input: "./src/index.umd.ts",
		output: "./dist/infinitegrid.js",
		format: "umd",
		external,
	},
	{
		name,
		input: "./src/index.umd.ts",
		output: "./dist/infinitegrid.min.js",
		uglify: true,
		format: "umd",
		external,
	},
	{
		name,
		input: "./src/index.umd.ts",
		output: "./dist/infinitegrid.pkgd.js",
		resolve: true,
		uglify: false,
		format: "umd",
	},
	{
		name,
		input: "./src/index.umd.ts",
		output: "./dist/infinitegrid.pkgd.min.js",
		resolve: true,
		uglify: true,
		format: "umd",
	},
]);
