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
                    clickIncidents: function (e) {
                        router.navigate("incidents");
                    },
                    clickCustomers: function (e) {
                        router.navigate("customers");
                    }
                })
        }
    );
});