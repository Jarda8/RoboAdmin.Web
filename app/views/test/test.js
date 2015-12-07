define(["kendo"], function () {
    return new kendo.View(
            "test",
            {
                evalTemplate: true,
                init: function (e) {
                    var ds = new kendo.data.DataSource({
                            schema: {
                                model: {
                                    id: "neco",
                                    fields: {
                                        "date_time": {type: "date"},
                                        "number": {type: "number"},
                                        "text": {type: "string"}
                                    }
                                }
                            },
                            data: [
                                {
                                    "date_time": "2015-07-08 12:52:54",
                                    "number": "5",
                                    "text": "baf"
                                },
                                {
                                    "date_time": "2015-07-08 10:52:54",
                                    "number": "6",
                                    "text": "lek"
                                },
                                {
                                    "date_time": "2015-07-07 12:52:54",
                                    "number": "7",
                                    "text": "foo"
                                },
                                {
                                    "date_time": "2015-05-08 12:52:54",
                                    "number": "8",
                                    "text": "bar"
                                },
                                {
                                    "date_time": "2014-07-08 12:52:54",
                                    "number": "9",
                                    "text": "baz"
                                }]

                        });
                    $("#test-grid").kendoGrid({
                        dataSource: ds,
                        filterable: true,
                        columns: [
                            {
                                field: "date_time",
                                title: "Datum/Čas",
                                format: "{0:d.M.yyyy H:m:s}",
                                filterable: {
                                    ui: function (element) {
                                        element.kendoDateTimePicker({
                                            culture: "cs-CZ",
                                            format: "d.M.yyyy H:m:s"
                                        });
                                    }
                                }
                            },
                            {
                                field: "number",
                                title: "Číslo"
                            },
                            {
                                field: "text",
                                title: "Text",
                                filterable: {
                                    extra: false,
                                    ui: function (e) {
                                        e.kendoAutoComplete({
                                            dataSource: ds,
                                            dataTextField: "text"
                                        });
                                    }
                                }
                            }]
                    });
                }
            }
    );
});

