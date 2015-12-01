define(["app/router", "kendo"], function (router) {   
    return new kendo.Layout(
        "layout",
        {
            model:
                kendo.observable({
                    //nejsem si jistej, jestli se tyhle funkce vůbec někdy volaj
                    clickIndex: function (e) {
                        router.navigate("");
                    },
                    clickEvents: function (e) {
                        router.navigate("events");
                    },   
                    clickEventsDB: function (e) {
                        router.navigate("eventsDB");
                    },   
                    clickIncidents: function (e) {
                        router.navigate("incidents");
                    },
                    clickSettings: function (e) {
                        router.navigate("settings");
                    },
                    clickCustomers: function (e) {
                        router.navigate("customers");
                    }
                })
        }
    );
});