define(["jquery", "ds/settings", "app/router", "kendo"], function ($, dsSettings, router) {
    return new kendo.View(
            "settings",
            {
                model: {
                    settings: dsSettings
                },
                init: function (e) {
                    $("#grid-settings").kendoGrid({
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