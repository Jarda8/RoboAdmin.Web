define(["kendo"], function() {
	return new kendo.View(
	    "index",
	    { model: kendo.observable({ foo: "World!" }) }
	);
});