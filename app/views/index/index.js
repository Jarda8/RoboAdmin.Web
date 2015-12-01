define(["jquery", "ds/servers", "app/router", "kendo"], function ($, dsServers, router) {
    return new kendo.View(
            "index",
            {
                model: {
                    servers: dsServers
                },
                init: function (e) {
                    $("#grid-servers").kendoGrid({
                        dataSource: dsServers,
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
                                router.navigate("server-detail/" + rowData.id);
                            });
                        },
                        columns: [
                            {
                                field: "server_name",
                                title: "Název serveru",
                                template: function (dataItem) {
                                    if (dataItem.incidents1 > 0)
                                        return '<span class="label label-danger">' + dataItem.server_name + '</span>';
                                    else if (dataItem.priority == "vysoká")
                                        return '<span class="label label-warning">' + dataItem.server_name + '</span>';
                                    else
                                        return dataItem.server_name;
                                },
                                width: 200,
                            },
                            {
                                field: "customer",
                                title: "Zákazník",
                                width: 200,
                            },
                            {
                                field: "os",
                                title: "OS",
                                width: 200,
                            },
                            {
                                field: "incidents",
                                title: "Závažné události",
                                template: function (dataItem) { 
                                        return "" + dataItem.incidents1 + " / " + dataItem.incidents2;
                                    },
                                width: 200,
                            },
                            {
                                field: "ping",
                                title: "Odezva",
                                template: function (dataItem) { 
                                        return "" + dataItem.ping1 + " / " + dataItem.ping2;
                                    },
                                width: 200,
                            },
                            {
                                field: "days_since_re",
                                title: "Dnů od restartu",
                                width: 200,
                            }
                        ]
                    });
                }
            }
    );
});