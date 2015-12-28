define(["jquery", "ds/DBevents", "app/router", "kendo"], function ($, dsDBEvents, router) {
    return new kendo.View(
            "eventsDB",
            {
                model: {
                    DBevents: dsDBEvents
                },
                init: function (e) {
                    $("#grid-events").kendoGrid({
                        dataSource: dsDBEvents,
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
                        },
                        filterMenuInit: function (e) {
                            if (e.field === "source") {
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
                                router.navigate("eventDB-detail/" + rowData.id);
                            });
                        },
                        columns: [
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
                                width: 200,
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
                                field: "level",
                                title: "Typ",
                                width: 200,
                                filterable: {
                                    multi: true,
                                    checkAll: false}
                            },
                            {
                                field: "event_id",
                                title: "ID",
                                width: 200,
                                filterable: {extra: true}
                            },
                            {
                                field: "source",
                                title: "Zdroj",
                                filterable: {
                                    ui: function (e) {
                                        e.kendoAutoComplete({
                                            dataSource: dsDBEvents,
                                            dataTextField: "source"
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
            }
    );
});