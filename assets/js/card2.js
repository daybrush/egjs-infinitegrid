var isSupportClipPath = (function() {
	var body = document.body;
	if (!body) {
		return false;
	}
	var style = body.style;
	if (!style) {
		return false;
	}
	if ("clipPath" in style || "webkitClipPath" in style || "msClipPath" in style) {
		return true;
	}
	return false;
})();

var link = window.HOMELINK;
function getItem(template, options) {
	return template.replace(/\$\{([^\}]*)\}/g, function () {
		var replaceTarget = arguments[1];

		return options[replaceTarget];
	});
}
var template = '<div class="item ${className}"><img src="${link}../image/${no}.jpg"><div class="info"><p class="title">${title}</p><p class="subtitle">${subtitle}</p></div></div>';
var className = isSupportClipPath ? "item_clip" : "";
function getItems(length) {
	var arr = [];
	for (var i = 1; i <= length; ++i) {
		arr.push(getItem(template, {
			no: i % 60,
			title: "egjs gallery item" + i,
			subtitle: "egjs item" + i,
			className: className,
			link: link
		}));
	}
	return arr;
}
var num = 21;

var container = document.querySelector(".container");
var ig = new eg.InfiniteGrid(container, {
	horizontal: true,
});
var parallax = new eg.Parallax(window, {
	container: container,
	horizontal: true,
	align: "center",
});

ig.setLayout(eg.InfiniteGrid.GridLayout, {
	margin: isSupportClipPath ? -80 : 0,
});
ig.on({
	"append": function (e) {
		var groupKey = (ig.groupKey || 0) + 1;

		ig.append(getItems(num), groupKey);
	},
	"layoutComplete": function (e) {
		parallax.refresh(e.target, e.orgScrollPos);
	},
	"change": function (e) {
		parallax.refresh(ig.getItems(), e.orgScrollPos);
	}
});

ig.append(getItems(num * 2), 0);


window.addEventListener("resize", function (e) {
	var items = ig.getItems();

	parallax.resize(items);
	parallax.refresh(items, e.orgScrollPos);
});
