define(["kendo"], function() {
	return function (id) {
            return new kendo.View(
                "eventDB-detail",
                {model: kendo.observable({ id: id })}
        );};
});

