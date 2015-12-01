(function() {
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
            "lib/kendo/kendo.core.min" : {
                deps: ["jquery"]
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
        "views/incidents/incidents",
        "views/events/event-detail",
        "views/customers/customers",
        "views/user/profile",
        "views/validator-test/validator-test",
        "views/settings/settings"
    ], function (layoutMain, router) {
        layoutMain.render("#app-container");

        // adminlte nutno inicializovat až po sestavení layoutu
        require(["adminlte"]);
        router.start();
    });
})();