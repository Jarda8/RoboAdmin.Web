(function () {
    requirejs.config({
        baseUrl: ".",
        paths: {
            jquery: "lib/jquery",
            bootstrap: "lib/bootstrap",
            adminlte: "lib/adminlte/app",
            kendo: "lib/kendobundle",
            layouts: "app/layouts",
            views: "app/views",
            ds: "app/datasources"
        },
        shim: {
            "lib/kendo/kendo.core.min": {
                deps: ["jquery"]
            },
            "lib/kendo/kendo.dataviz.chart.min": {
                deps: [
                    "jquery",
                    "lib/kendo/kendo.core.min"
                ]
            },
            "lib/kendo/kendo.grid.min": {
                deps: [
                    "jquery",
                    "lib/kendo/kendo.core.min"
                ]
            },
            "lib/kendo/kendo.router.min": {
                deps: [
                    "jquery",
                    "lib/kendo/kendo.core.min"
                ]
            },
            "lib/kendo/kendo.validator.min": {
                deps: [
                    "jquery",
                    "lib/kendo/kendo.core.min"
                ]
            },
            "lib/kendo/kendo.autocomplete.min": {
                deps: [
                    "jquery",
                    "lib/kendo/kendo.core.min"
                ]
            },
            "lib/kendo/cultures/kendo.culture.cs-CZ.min": {
                deps: [
                    "lib/kendo/kendo.core.min",
                    "lib/kendo/kendo.grid.min"
                ]
            },
            "lib/kendo/messages/kendo.messages.cs-CZ.min": {
                deps: [
                    "lib/kendo/cultures/kendo.culture.cs-CZ.min"
                ]
            },
            "bootstrap": {
                deps: ["jquery"]
            },
            "adminlte": {
                deps: [
                    "jquery",
                    "bootstrap"
                ]
            }
        }
    });

    require([
        "layouts/main/main",
        "app/router",
        // následující je inlcudnuto pouze kvůli optimizeru, který nedetekuje
        // nekompiluje závislosti při volání require() uvnitř implementací. 
        "jquery",
        "bootstrap",
        "views/index/index",
        "views/events/events",
        "views/eventsDB/eventsDB",
        "views/incidents/incidents",
        "views/eventsDB/eventDB-detail",
        "views/events/event-detail",
        "views/servers/server-detail",
        "views/disks/disk-settings",
        "views/servers/server-factors",
        "views/profile/profile",
        "views/security/login",
        "views/validator-test/validator-test",
        "views/settings/settings",
        "views/settings/settings-filter-udalost",
        "views/settings/settings-filter-disk",
        "views/settings/settings-filter-dostupnost",
        "views/settings/settings-filter-odezva",
        "views/settings/settings-filter-sluzba"
    ], function (layoutMain, router) {
        layoutMain.render("#app-container");

        // adminlte nutno inicializovat až po sestavení layoutu
        require(["adminlte"]);
        router.start();
    });
})();
