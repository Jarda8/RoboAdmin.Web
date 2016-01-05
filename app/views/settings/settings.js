define(["jquery", "views/settings/settings-filter-data", "app/router", "kendo"], function ($, dsSettings, router) {
    return new kendo.View(
            "settings",
            {
                model: {
                    settings: dsSettings
                },
                
                init: function (e) {
                    var currentID =0;
                    var grid = $("#grid-settings").kendoGrid({
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
                                title: "Název upozornění",
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
                            {
                                field: "",
                                command: { text: "Upravit", click: showDetails },                               
                                width: 50
                            },
                            {
                                field: "",
                                command: { text: "Smazat", click: deleteFilter },                               
                                width: 50
                            },
                      
                        ]
                    })
                    function showDetails(e) {
                    e.preventDefault();
                    var dataItem = this.dataItem($(e.currentTarget).closest("tr"));
                   // router.navigate("settings-filter-"+dataItem.type);
                 
                   
                   
                    router.navigate("settings-filter-udalost/"+dataItem.id);
                };                                          
                }
                
            }
    );
     function deleteFilter(e) {
                    e.preventDefault();
                    var dataItem = this.dataItem($(e.currentTarget).closest("tr"));
                    dsSettings.remove(dataItem);
                    for (var i = 0; i< dsSettings.lenght; i++){
                        dsSettings[i].id=i;
                    }
                 
                }
});
