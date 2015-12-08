define(["kendo"], function () {
//    var ds = new kendo.data.DataSource({
//        autoSync: true,
//        schema: {
//            model: {
//                id: "id",
//                fields: {
//                    "id": {type: "number"},
//                    "priority": {type: "string"}
//                }
//            }
//        },
//        data: [
//            {
//                "id": "5",
//                "priority": "vysoká"
//            }]
//
//    });
    return new kendo.View(
            "test",
            {
                model: kendo.observable({
                    priority: "nízká"
                }),
                evalTemplate: true
            }
    );
});

