define(["app/router", "kendo"], function (router) {   
    return new kendo.Layout(
        "layout",
        {
            model:
                kendo.observable({
                    clickIndex: function (e) {
                        router.navigate("")
                    },
                    clickEvents: function (e) {
                        router.navigate("events")
                    },
                    clickCustomers: function (e) {
                        router.navigate("customers")
                    }
                })
        }
    );
});