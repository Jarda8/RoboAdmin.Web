define([
    "require",
    "kendo"],
        function (require) {
            var router = new kendo.Router();

            router.route("/", function () {
                require(["layouts/main/main", "views/sidebar/sidebar", "views/index/index"], function (layoutMain, sidebar, viewIndex) {
                    layoutMain.showIn("#layout-content", viewIndex);
                    $("#main-nav li").removeClass("active");
                    $("#servers-nav").addClass("active");
                    //layoutMain.showIn("#sidebar", sidebar);
                });
            });

            router.route("events", function () {
                require(["layouts/main/main", "views/sidebar/sidebar", "views/events/events"], function (layoutMain, sidebar, viewEvents) {
                    layoutMain.showIn("#layout-content", viewEvents);
                    $("#main-nav li").removeClass("active");
                    $("#events-nav").addClass("active");
                    //layoutMain.showIn("#sidebar", sidebar);
                });
            });

            router.route("event-detail/:id", function (id) {
                require(["layouts/main/main", "views/sidebar/sidebar", "views/events/event-detail"], function (layoutMain, sidebar, viewEventDetail) {
                    layoutMain.showIn("#layout-content", viewEventDetail(id));
                    //layoutMain.showIn("#sidebar", sidebar);
                });
            });

            router.route("incidents", function () {
                require(["layouts/main/main", "views/sidebar/sidebar", "views/incidents/incidents"], function (layoutMain, sidebar, viewIncidents) {
                    layoutMain.showIn("#layout-content", viewIncidents);
                    //layoutMain.showIn("#sidebar", sidebar);
                    $("#main-nav li").removeClass("active");
                    $("#incidents-nav").addClass("active");
                });
            });
            router.route("eventsDB", function () {
                require(["layouts/main/main", "views/sidebar/sidebar", "views/eventsDB/eventsDB"], function (layoutMain, sidebar, viewEventsDB) {
                    layoutMain.showIn("#layout-content", viewEventsDB);
                    $("#main-nav li").removeClass("active");
                    $("#eventsdb-nav").addClass("active");
                    //layoutMain.showIn("#sidebar", sidebar);
                });
            });
            router.route("eventDB-detail/:id", function (id) {
                require(["layouts/main/main", "views/sidebar/sidebar", "views/eventsDB/eventDB-detail"], function (layoutMain, sidebar, viewEventDBDetail) {
                    layoutMain.showIn("#layout-content", viewEventDBDetail(id));
                    //layoutMain.showIn("#sidebar", sidebar);
                });
            });

            router.route("settings", function () {
                require(["layouts/main/main", "views/sidebar/sidebar", "views/settings/settings"], function (layoutMain, sidebar, viewSettings) {
                    layoutMain.showIn("#layout-content", viewSettings);
                    $("#main-nav li").removeClass("active");
                    $("#settings-nav").addClass("active");
                    //layoutMain.showIn("#sidebar", sidebar);
                });
            });
            router.route("settings-filter-udalost", function () {
                require(["layouts/main/main", "views/sidebar/sidebar", "views/settings/settings-filter-udalost"], function (layoutMain, sidebar, viewSettings) {
                    layoutMain.showIn("#layout-content", viewSettings);
                    //layoutMain.showIn("#sidebar", sidebar);
                });
            });
            router.route("settings-filter-disk", function () {
                require(["layouts/main/main", "views/sidebar/sidebar", "views/settings/settings-filter-disk"], function (layoutMain, sidebar, viewSettings) {
                    layoutMain.showIn("#layout-content", viewSettings);
                    //layoutMain.showIn("#sidebar", sidebar);
                });
            });
            router.route("settings-filter-odezva", function () {
                require(["layouts/main/main", "views/sidebar/sidebar", "views/settings/settings-filter-odezva"], function (layoutMain, sidebar, viewSettings) {
                    layoutMain.showIn("#layout-content", viewSettings);
                    //layoutMain.showIn("#sidebar", sidebar);
                });
            });
            router.route("settings-filter-dostupnost", function () {
                require(["layouts/main/main", "views/sidebar/sidebar", "views/settings/settings-filter-dostupnost"], function (layoutMain, sidebar, viewSettings) {
                    layoutMain.showIn("#layout-content", viewSettings);
                    //layoutMain.showIn("#sidebar", sidebar);
                });
            });
            router.route("settings-filter-sluzba", function () {
                require(["layouts/main/main", "views/sidebar/sidebar", "views/settings/settings-filter-sluzba"], function (layoutMain, sidebar, viewSettings) {
                    layoutMain.showIn("#layout-content", viewSettings);
                    //layoutMain.showIn("#sidebar", sidebar);
                });
            });

            //tohle zatim nikam moc nevede, ale časem se to možná použije
            router.route("customers", function () {
                require(["layouts/main/main", "views/sidebar/sidebar", "views/customers/customers"], function (layoutMain, sidebar, viewCustomers) {
                    layoutMain.showIn("#layout-content", viewCustomers);
                    //layoutMain.showIn("#sidebar", sidebar);
                });
            });

            router.route("events", function () {
                require(["layouts/main/main", "views/sidebar/sidebar", "views/events/events"], function (layoutMain, sidebar, viewEvents) {
                    layoutMain.showIn("#layout-content", viewEvents);
                    //layoutMain.showIn("#sidebar", sidebar);
                });
            });

            router.route("event-detail/:id", function (id) {
                require(["layouts/main/main", "views/sidebar/sidebar", "views/events/event-detail"], function (layoutMain, sidebar, viewEventDetail) {
                    layoutMain.showIn("#layout-content", viewEventDetail(id));
                    //layoutMain.showIn("#sidebar", sidebar);
                });
            });

            router.route("server-detail/:id", function (id) {
                require(["layouts/main/main", "views/sidebar/sidebar", "views/servers/server-detail"], function (layoutMain, sidebar, viewServerDetail) {
                    layoutMain.showIn("#layout-content", viewServerDetail(id));
                    //layoutMain.showIn("#sidebar", sidebar);
                });
            });

            router.route("disk-settings/:id", function (id) {
                require(["layouts/main/main", "views/sidebar/sidebar", "views/disks/disk-settings"], function (layoutMain, sidebar, viewDiskSettings) {
                    layoutMain.showIn("#layout-content", viewDiskSettings(id));
                    //layoutMain.showIn("#sidebar", sidebar);
                });
            });

            router.route("server-factors/:id", function (id) {
                require(["layouts/main/main", "views/sidebar/sidebar", "views/servers/server-factors"], function (layoutMain, sidebar, viewServerFactors) {
                    layoutMain.showIn("#layout-content", viewServerFactors(id));
                    //layoutMain.showIn("#sidebar", sidebar);
                });
            });

            router.route("incidents", function () {
                require(["layouts/main/main", "views/sidebar/sidebar", "views/incidents/incidents"], function (layoutMain, sidebar, viewIncidents) {
                    layoutMain.showIn("#layout-content", viewIncidents);
                    //layoutMain.showIn("#sidebar", sidebar);
                });
            });

            router.route("settings", function () {
                require(["layouts/main/main", "views/sidebar/sidebar", "views/settings/settings"], function (layoutMain, sidebar, viewSettings) {
                    layoutMain.showIn("#layout-content", viewSettings);
                    //layoutMain.showIn("#sidebar", sidebar);
                });
            });

            //tohle zatim nikam moc nevede, ale časem se to možná použije
            router.route("customers", function () {
                require(["layouts/main/main", "views/sidebar/sidebar", "views/customers/customers"], function (layoutMain, sidebar, viewCustomers) {
                    layoutMain.showIn("#layout-content", viewCustomers);
                    //layoutMain.showIn("#sidebar", sidebar);
                });
            });

            router.route("profile/:action", function (action) {
                require(["layouts/main/main", "views/sidebar/sidebar", "views/profile/profile"], function (layoutMain, sidebar, viewProfile) {
                    layoutMain.showIn("#layout-content", viewProfile(action));
                    //layoutMain.showIn("#sidebar", sidebar);
                });
            });

            router.route("profile", function () {
                require(["layouts/main/main", "views/sidebar/sidebar", "views/profile/profile"], function (layoutMain, sidebar, viewProfile) {
                    layoutMain.showIn("#layout-content", viewProfile(''));
                    //layoutMain.showIn("#sidebar", sidebar);
                });
            });

            router.route("login", function () {
                require(["layouts/main/main", "views/security/login"], function (layoutMain, viewLogin) {
                    layoutMain.showIn("#layout-content", viewLogin);
                    //layoutMain.showIn("#sidebar", new kendo.View("<div/>"));
                });
            });

            router.route("logout", function () {
                require(["layouts/main/main", "views/security/login"], function (layoutMain, viewLogin) {
                    layoutMain.showIn("#layout-content", viewLogin);
                    //layoutMain.showIn("#sidebar", new kendo.View("<div/>"));
                });
            });

            router.route("test", function () {
                require(["layouts/main/main", "views/sidebar/sidebar", "views/test/test"], function (layoutMain, sidebar, viewVal) {
                    layoutMain.showIn("#layout-content", viewVal);
                    //layoutMain.showIn("#sidebar", sidebar);
                });
            });

            return router;
        }
);
