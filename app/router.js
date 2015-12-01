define([
    "require",
    "kendo"],
        function (require) {
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

	    router.route("event-detail/:id", function (id) {
	        require(["layouts/main/main", "views/events/event-detail"], function (layoutMain, viewEventDetail) {              
	            layoutMain.showIn("#layout-content", viewEventDetail(id));	          
	        });
	    });
            
	    router.route("incidents", function () {
	        require(["layouts/main/main", "views/incidents/incidents"], function (layoutMain, viewIncidents) {
	            layoutMain.showIn("#layout-content", viewIncidents);	         
	    	});
	    });
             router.route("eventsDB", function () {
	        require(["layouts/main/main", "views/eventsDB/eventsDB"], function (layoutMain, viewEventsDB) {              
	            layoutMain.showIn("#layout-content", viewEventsDB);	          
	        });
	    });
            router.route("eventDB-detail/:id", function (id) {
	        require(["layouts/main/main", "views/eventsDB/eventDB-detail"], function (layoutMain, viewEventDBDetail) {              
	            layoutMain.showIn("#layout-content", viewEventDBDetail(id));	          
	        });
	    });
            	
            router.route("settings", function () {
	        require(["layouts/main/main", "views/settings/settings"], function (layoutMain, viewSettings) {              
	            layoutMain.showIn("#layout-content", viewSettings);	          
	        });
	    });
            router.route("settings-filter-udalost", function () {
	        require(["layouts/main/main", "views/settings/settings-filter-udalost"], function (layoutMain, viewSettings) {              
	            layoutMain.showIn("#layout-content", viewSettings);	          
	        });
	    });
            
            //tohle zatim nikam moc nevede, ale časem se to možná použije
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

            router.route("events", function () {
                require(["layouts/main/main", "views/events/events"], function (layoutMain, viewEvents) {
                    layoutMain.showIn("#layout-content", viewEvents);
                });
            });

            router.route("event-detail/:id", function (id) {
                require(["layouts/main/main", "views/events/event-detail"], function (layoutMain, viewEventDetail) {
                    layoutMain.showIn("#layout-content", viewEventDetail(id));
                });
            });

	    router.route("server-detail/:id", function (id) {
	        require(["layouts/main/main", "views/servers/server-detail"], function (layoutMain, viewServerDetail) {              
	            layoutMain.showIn("#layout-content", viewServerDetail(id));	          
	        });
	    });

            router.route("disk-settings/:id", function (id) {
	        require(["layouts/main/main", "views/disks/disk-settings"], function (layoutMain, viewDiskSettings) {
	            layoutMain.showIn("#layout-content", viewDiskSettings(id));	           
	        });
	    });
            
            router.route("server-factors/:id", function (id) {
	        require(["layouts/main/main", "views/servers/server-factors"], function (layoutMain, viewServerFactors) {              
	            layoutMain.showIn("#layout-content", viewServerFactors(id));	          
	        });
	    });

            router.route("incidents", function () {
                require(["layouts/main/main", "views/incidents/incidents"], function (layoutMain, viewIncidents) {
                    layoutMain.showIn("#layout-content", viewIncidents);
                });
            });

            router.route("settings", function () {
                require(["layouts/main/main", "views/settings/settings"], function (layoutMain, viewSettings) {
                    layoutMain.showIn("#layout-content", viewSettings);
                });
            });

            //tohle zatim nikam moc nevede, ale časem se to možná použije
            router.route("customers", function () {
                require(["layouts/main/main", "views/customers/customers"], function (layoutMain, viewCustomers) {
                    layoutMain.showIn("#layout-content", viewCustomers);
                });
            });

            router.route("user/profile", function () {
                require(["layouts/main/main", "views/user/profile"], function (layoutMain, viewProfile) {
                    layoutMain.showIn("#layout-content", viewProfile);
                });
            });

            router.route("val", function () {
                require(["layouts/main/main", "views/validator-test/validator-test"], function (layoutMain, viewVal) {
                    layoutMain.showIn("#layout-content", viewVal);
                });
            });

            return router;
        }
);
