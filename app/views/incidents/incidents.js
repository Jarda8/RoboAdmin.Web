define(["jquery", "ds/incidents", "kendo"], function ($, dsIncidents) {
    return new kendo.View(
            "incidents",
            {
                model: {
                    events: dsIncidents
                },
                init: function (e) {
                    $("#grid-incidents").kendoGrid({
                        dataSource: dsIncidents,
                        resizable: true,
                        groupable: true,
                        sortable: {
                            mode: "single",
                            allowUnsort: false
                        },
                        filterable: {
                            extra: false,
                            messages: {
                                clear: "Zrušit",
                                filter: "Filtrovat",
                                info: ""
                            }
                        },
                        filterMenuInit: function (e) {
                            if (e.field === "server_name" || e.field === "customer" || e.field === "description") {
                                var firstValueDropDown = e.container.find("select:eq(0)").data("kendoDropDownList");
                                setTimeout(function () {
                                    firstValueDropDown.wrapper.hide();
                                });
                            }
                        },
                        pageable: true,
                        columns: [
                            {
                                field: "date_time",
                                title: "Datum/Čas",
                                width: 150,
                                format: "{0:d.M.yyyy H:m:s}",
                                filterable: {
                                    extra: true,
                                    ui: function (element) {
                                        element.kendoDateTimePicker({
                                            culture: "cs-CZ",
                                            format: "d.M.yyyy H:m:s"
                                        });
                                    }
                                }
                            },
                            {
                                field: "level",
                                title: "Úroveň",
                                width: 100,
                                filterable: {
                                    multi: true,
                                    checkAll: false}
                            },
                            {
                                field: "server_name",
                                title: "Server",
                                width: 200,
                                filterable: {
                                    ui: function (e) {
                                        e.kendoAutoComplete({
                                            dataSource: dsIncidents,
                                            dataTextField: "server_name"
                                        });
                                    },
                                    operators: {
                                        string: {
                                            startswith: "Začíná na"
                                        }
                                    }
                                }
                            },
                            {
                                field: "customer",
                                title: "Zákazník",
                                width: 100,
                                filterable: {
                                    ui: function (e) {
                                        e.kendoAutoComplete({
                                            dataSource: dsIncidents,
                                            dataTextField: "customer"
                                        });
                                    },
                                    operators: {
                                        string: {
                                            startswith: "Začíná na"
                                        }
                                    }
                                }
                            },
                            {
                                field: "source",
                                title: "Zdroj",
                                width: 200,
                                filterable: {
                                    multi: true,
                                    checkAll: false}
                            },
                            {
                                field: "description",
                                title: "Popis",
                                filterable: {
                                    ui: function (e) {
                                        e.kendoAutoComplete({
                                            dataSource: dsIncidents,
                                            dataTextField: "description"
                                        });
                                    },
                                    operators: {
                                        string: {
                                            startswith: "Začíná na"
                                        }
                                    }
                                }
                            }
                        ]
                    });
                }
            });
});

