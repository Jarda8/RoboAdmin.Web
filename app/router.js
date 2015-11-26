define([
	"require",
	"kendo"],

	function(require) {
		var router = new kendo.Router();

	    router.route("/", function () {
	        require(["layouts/main/main", "views/index/index"], function (layoutMain, viewIndex) {
	            layoutMain.showIn("#layout-content", viewIndex);	         
	    	});
	    });

	    router.route("events", function () {
	        require(["layouts/main/main", "views/events/events"], function (layoutMain, viewEvents) {              
	            layoutMain.showIn("#layout-content", viewEvents);	          
	        });
	    });

		router.route("customers", function () {
			require(["layouts/main/main", "views/customers/customers"], function (layoutMain, viewCustomers) {
				layoutMain.showIn("#layout-content", viewCustomers);
			});
		});



		router.route("user/profile", function () {
			require(["layouts/main/main", "views/user/profile"], function (layoutMain,viewProfile) {
				layoutMain.showIn("#layout-content", viewProfile);
			});
		});

	    return router;
	}
)