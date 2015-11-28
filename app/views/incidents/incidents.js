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
                            messages: {
                                clear: "Zrušit",
                                filter: "Filtrovat",
                                checkAll: "Vše"
                            }
                        },
                        pageable: true,
                        columns: [
                            {
                                field: "date_time",
                                title: "Datum/Čas",
                                width: 150
                            },
                            {
                                field: "level",
                                title: "Úroveň",
                                width: 100,
                                filterable: {multi: true}
                            },
                            {
                                field: "server_name",
                                title: "Server",
                                width: 200
                            },
                            {
                                field: "customer",
                                title: "Zákazník",
                                width: 100
                            },
                            {
                                field: "source",
                                title: "Zdroj",
                                width: 200
                            },
                            {
                                field: "description",
                                title: "Popis"
                            }
                        ]
                    });
                }
            })
});

