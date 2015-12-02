define(["kendo"], function() {
	return new kendo.View(
	    "login",
	    {
			model: kendo.observable({ foo: "Login!" })
		}
	);
});