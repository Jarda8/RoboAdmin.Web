define(["jquery", "ds/events/events", "ds/events/events-overview", "app/router", "kendo"], function ($, dsEvents, dsEventsOverview, router) {
    return new kendo.View(
            "events",
            {
//                model: {
//                    events: dsEvents,
//                    eventsOverview: dsEventsOverview
//                },
                init: function (e) {
                    $("#grid-events").kendoGrid({
                        dataSource: dsEvents,
                        resizable: true,
                        //editable: true,
                        //detailTemplate: kendo.template($("#events-grid-detail").html()),
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
//                            operators: {
//                                string: {
//                                    contains: "obsahuje"
//                                }
//                            }
                        },
                        filterMenuInit: function (e) {
                            if (e.field === "server_name" || e.field === "customer" || e.field === "source") {
                                var firstValueDropDown = e.container.find("select:eq(0)").data("kendoDropDownList");
                                setTimeout(function () {
                                    firstValueDropDown.wrapper.hide();
                                });
                            }
                        },
                        pageable: true,
                        dataBound: function (e) {
                            var that = this;
                            $(that.tbody).on("click", "tr", function (e) {
                                var rowData = that.dataItem(this);
                                router.navigate("event-detail/" + rowData.id);
                            });
                        },
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
                                title: "Typ",
                                width: 100,
                                filterable: {
                                    multi: true,
                                    checkAll: false
                                }
                            },
                            {
                                field: "priority",
                                title: "Priorita",
                                template: function (dataItem) {
                                    if (dataItem.priority === "kritická")
                                        return '<span class="label label-danger">' + dataItem.priority + '</span>';
                                    else if (dataItem.priority === "vysoká")
                                        return '<span class="label label-warning">' + dataItem.priority + '</span>';
                                    else
                                        return dataItem.priority;
                                },
                                /*editor: function (container, options) {
                                 var select = $("<select/>");
                                 select.attr("name", options.field);
                                 select.append($("<option />", {value: "neznámá", text: "neznámá"}));
                                 select.append($("<option />", {value: "ignorovat", text: "ignorovat"}));
                                 select.append($("<option />", {value: "nízká", text: "nízká"}));
                                 select.append($("<option />", {value: "normální", text: "normální"}));
                                 select.append($("<option />", {value: "vysoká", text: "vysoká"}));
                                 select.append($("<option />", {value: "kritická", text: "kritická"}));
                                 select.val(options.model.priority);
                                 select.appendTo(container);
                                 select.kendoDropDownList();
                                 var kendoDropDown = select.data("kendoDropDownList");
                                 kendoDropDown.open();
                                 },*/
                                width: 100,
                                filterable: {
                                    multi: true,
                                    dataSource: [
                                        {priority: "neznámá"},
                                        {priority: "ignorovat"},
                                        {priority: "nízká"},
                                        {priority: "normální"},
                                        {priority: "vysoká"},
                                        {priority: "kritická"}
                                    ],
                                    checkAll: false
                                }
                            },
                            {
                                field: "server_name",
                                title: "Server",
                                width: 200,
                                filterable: {
                                    ui: function (e) {
                                        e.kendoAutoComplete({
                                            dataSource: dsEvents,
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
                                            dataSource: dsEvents,
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
                                filterable: {
                                    ui: function (e) {
                                        e.kendoAutoComplete({
                                            dataSource: dsEvents,
                                            dataTextField: "source"
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
                                field: "event_id",
                                title: "ID",
                                width: 120,
                                filterable: {
                                    extra: true
                                }
                            },
                            {
                                field: "occurences",
                                title: "Výskytů",
                                width: 100,
                                filterable: {
                                    extra: true
                                }
                            },
                            {
                                field: "state",
                                title: "Zpracovaná",
                                attributes: {
                                    style: "text-align: center"
                                },
                                template: function (dataItem) {
                                    if (dataItem.state === "vyřešená")
                                        return '<i class="fa fa-check" style="color: #00a65a"></i>';
                                    else
                                        return '<i class="fa fa-wrench" style="color: #dd4b39"></i>';
                                },
                                width: 115,
                                filterable: {
                                    multi: true,
                                    checkAll: false
                                }
                            }
                        ]
                    });
                    dsEventsOverview.read();
                    $("#critical").html(dsEventsOverview.data()[0].critical);
                    $("#highPriority").html(dsEventsOverview.data()[0].highPriority);
                    $("#normalPriority").html(dsEventsOverview.data()[0].normalPriority);
                }
            }
    );
});