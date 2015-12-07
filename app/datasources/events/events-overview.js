define(["jquery", "kendo"], function($) {
	return new kendo.data.DataSource({
	    data: [
	    	{ critical: 1, highPriority: 2, normalPriority: 28 }
	    ]
	});
});