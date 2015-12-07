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
                            extra: false,
                            messages: {
                                clear: "Zrušit",
                                filter: "Filtrovat",
                                info: ""
                            },
                            operators: {
                                string: {
                                    contains: "obsahuje"
                                }
                            }
                        },
                        filterMenuInit: function (e) {
                            if (e.field === "server_name" || e.field === "customer" || e.field === "os") {
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
                                router.navigate("server-detail/" + rowData.id);
                            });
                        },
                        columns: [
                            {
                                field: "server_name",
                                title: "Název serveru",
                                template: function (dataItem) {
                                    if (dataItem.state === "error")
                                        return '<span class="label label-danger">' + dataItem.server_name + '</span>';
                                    else if (dataItem.state === "warning")
                                        return '<span class="label label-warning">' + dataItem.server_name + '</span>';
                                    else
                                        return dataItem.server_name;
                                },
                                filterable: {
                                    ui: function (e) {
                                        e.kendoAutoComplete({
                                            dataSource: dsServers,
                                            dataTextField: "server_name"
                                        });
                                    }
                                },
                                width: 200
                            },
                            {
                                field: "customer",
                                title: "Zákazník",
                                filterable: {
                                    ui: function (e) {
                                        e.kendoAutoComplete({
                                            dataSource: dsServers,
                                            dataTextField: "customer"
                                        });
                                    }
                                },
                                width: 200
                            },
                            {
                                field: "os",
                                title: "OS",
                                filterable: {
                                    ui: function (e) {
                                        e.kendoAutoComplete({
                                            dataSource: dsServers,
                                            dataTextField: "os"
                                        });
                                    }
                                },
                                width: 200
                            },
                            {
                                field: "incidents",
                                title: "Závažné události",
                                template: function (dataItem) {
                                    return "" + dataItem.incidents1 + " / " + dataItem.incidents2;
                                },
                                width: 200
                            },
                            {
                                field: "ping",
                                title: "Odezva",
                                template: function (dataItem) {
                                    return "" + dataItem.ping1 + " / " + dataItem.ping2;
                                },
                                width: 200
                            },
                            {
                                field: "days_since_re",
                                title: "Dnů od restartu",
                                width: 200
                            }
                        ]
                    });
                }
            }
    );
});