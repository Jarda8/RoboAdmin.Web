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
                            messages: {
                                clear: "Zrušit",
                                filter: "Filtrovat",
                                checkAll: "Vše"
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
                                    if (dataItem.priority == "kritická")
                                        return '<span class="label label-danger">' + dataItem.priority + '</span>';
                                    else if (dataItem.priority == "vysoká")
                                        return '<span class="label label-warning">' + dataItem.priority + '</span>';
                                    else
                                        return dataItem.priority;
                                },
                                     width: 150,
                                filterable: {
                                    multi: true,
                                    dataSource: [
                                        {priority: "neznámá"},
                                        {priority: "ignorovat"},
                                        {priority: "nízká"},
                                        {priority: "normální"},
                                        {priority: "vysoká"},
                                        {priority: "kritická"},
                                    ],
                                    checkAll: false
                                }
                            },
                           
                            {
                                field: "level",
                                title: "Typ",
                                width: 150,
                                filterable: {multi: true}
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
                           
                            {
                                field: "source",
                                title: "Zdroj",
                                 width: 150,
                                attributes: {
                                    style: "white-space: nowrap"
                                }
                            },
                            
                            {
                                field: "event_id",
                                title: "ID",
                                width: 150
                            },
                            
                            
                        ]
                    })
                }
            }
    );
});