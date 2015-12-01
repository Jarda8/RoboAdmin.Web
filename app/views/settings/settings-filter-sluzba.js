define(["jquery", "ds/settings", "app/router", "kendo"], function ($, dsSettings, router) {
    return new kendo.View(
            "settings-filter-sluzba",
            {
                model: {
                    events: dsSettings
                },
                init: function (e) {
                    $("#grid-events").kendoGrid({
                        dataSource: dsSettings,
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
                                router.navigate("event-detail/" + rowData.id);
                            });
                        },
                        columns: [
                            {
                                field: "name",
                                title: "Název filtru",
                                width: 150
                            },
                            {
                                field: "type",
                                title: "Typ",
                                width: 100
                              
                            },
                            {
                                field: "email",
                                title: "Email",                                
                                width: 100                                
                            },
                            {
                                field: "active",
                                title: "Aktivní",
                                template: '<input type="checkbox" #= active ? \'checked="checked"\' : "" # class="chkbx" />',
                                width: 50
                            },
                      
                        ]
                    })
                }
            }
    );
});