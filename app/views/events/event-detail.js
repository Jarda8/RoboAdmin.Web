define(["kendo"], function() {
	return function (id) {
            return new kendo.View(
                "event-detail",
                { model: kendo.observable({ id: id }) }
        );};
});

