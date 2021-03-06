define(["jquery", "ds/server-events", "ds/server-disks", "views/servers/server-detail-data", "app/router", "kendo"], function ($, dsServerEvents, dsServerDisks, data, router) {
    return function (id) {

        function ignore() {
            var $index = this.value;
            var $badList = $("#bad-services");
            var $ignoredList = $("#ignored-services");
            data.ignored_services.push(data.bad_services[$index]);
            data.bad_services.splice($index, 1);
            $badList.html("");
            for (var i = 0; i < data.bad_services.length; i++) {
                $badList.append("<li>" + data.bad_services[i] + "<button class='btn btn-default btn-xs' value=" + i + ">Ignorovat</button></li>");

            }
            $("#bad-services button").click(ignore);
            $ignoredList.html("");
            for (var i = 0; i < data.ignored_services.length; i++) {
                $ignoredList.append("<li>" + data.ignored_services[i] + "<button class='btn btn-default btn-xs' value=" + i + ">Sledovat</button></li>");

            }
            $("#ignored-services button").click(monitor);
        }

        function monitor() {
            var $index = this.value;
            var $ignoredList = $("#ignored-services");
            var $badList = $("#bad-services");
            data.bad_services.push(data.ignored_services[$index]);
            data.ignored_services.splice($index, 1);
            $ignoredList.html("");
            for (var i = 0; i < data.ignored_services.length; i++) {
                $ignoredList.append("<li>" + data.ignored_services[i] + "<button class='btn btn-default btn-xs' value=" + i + ">Sledovat</button></li>");

            }
            $("#ignored-services button").click(monitor);
            $badList.html("");
            for (var i = 0; i < data.bad_services.length; i++) {
                $badList.append("<li>" + data.bad_services[i] + "<button class='btn btn-default btn-xs' value=" + i + ">Ignorovat</button></li>");

            }
            $("#bad-services button").click(ignore);
        }
        
        function initChart() {
            $("#chart").kendoChart({
                            legend: {
                                position: "right"
                            },
                            chartArea: {
                                height: 400
                            },
                            seriesDefaults: {
                                type: "line"
                            },
                            series: [{
                                    name: "Průměr",
                                    data: [5.3, 2.9, 6.2, 7.9, 4, 2.9, 2.8, 2.4, 2.7, 2.6, 2.5, 2.6, 2.8, 2.4, 2.1, 2.9, 2.6, 7.5, 2.4, 2.8, 3.3, 2.9, 4.2]
                                }, {
                                    name: "Vrchol",
                                    data: [9.8, 5.3, 10.8, 11.9, 9.7, 5.3, 4.8, 4, 4.6, 4.4, 3.9, 4.3, 4.7, 3.8, 2.7, 5.3, 4.4, 11.4, 4, 4.7, 6.8, 5.4, 9.4]
                                }],
                            valueAxis: {
                                labels: {
                                    format: "{0}"
                                },
                                line: {
                                    visible: false
                                },
                                axisCrossingValue: -10,
                                plotBands: [{
                                        from: data.ping_limit,
                                        to: 14,
                                        color: "#c00",
                                        opacity: 0.3
                                    }, {
                                        from: data.ping_limit,
                                        to: data.ping_limit + 0.1,
                                        color: "#c00",
                                        opacity: 0.8
                                    }]
                            },
                            categoryAxis: {
                                categories: ['-23h', '-22h', '-21h', '-20h', '-19h', '-18h', '-17h', '-16h', '-15h', '-14h', '-13h', '-12h', '-11h', '-10h', '-9h', '-8h', '-7h', '-6h', '-5h', '-4h', '-3h', '-2h', '-1h'],
                                //categories: [23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1],
                                majorGridLines: {
                                    visible: false
                                }
                            },
                            tooltip: {
                                visible: true,
                                format: "{0",
                                template: "#= series.name #: #= value #"
                            }
                        });
        }

        return new kendo.View(
                "server-detail",
                {
                    model: data,
                    evalTemplate: true,
//                    model: //kendo.observable({ id: id }), 
//                    {
//                        serverEvents: dsServerEvents
//                    },

                    init: function (e) {

                        $("#bad-services button").click(ignore);

                        $("#ignored-services button").click(monitor);

                        initChart();
                        
                        $("#limit").change(function() {
                            initChart();
                        });

                        $("#grid-incidents").kendoGrid({
                            dataSource: dsServerEvents,
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
                                if (e.field === "description") {
                                    var firstValueDropDown = e.container.find("select:eq(0)").data("kendoDropDownList");
                                    setTimeout(function () {
                                        firstValueDropDown.wrapper.hide();
                                    });
                                }
                            },
                            pageable: true,
                            columns: [
                                {
                                    field: "description",
                                    title: "Název události",
                                    width: 400,
                                    filterable: {
                                        ui: function (e) {
                                            e.kendoAutoComplete({
                                                dataSource: dsServerEvents,
                                                dataTextField: "description"
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
                                    title: "Zdroj události",
                                    width: 200,
                                    filterable: {multi: true, checkAll: false}
                                },
                                {
                                    field: "level",
                                    title: "Závažnost",
                                    width: 200,
                                    filterable: {multi: true, checkAll: false}
                                },
                                {
                                    field: "date_since",
                                    title: "Od",
                                    width: 200,
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
                                    field: "date_until",
                                    title: "Do",
                                    width: 200,
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
                                }
                            ]
                        });

                        $("#grid-disks").kendoGrid({
                            dataSource: dsServerDisks,
                            resizable: true,
                            //editable: true,
                            //detailTemplate: kendo.template($("#events-grid-detail").html()),
                            dataBound: function (e) {
                                var that = this;
                                $(that.tbody).on("click", "tr", function (e) {
                                    var rowData = that.dataItem(this);
                                    router.navigate("disk-settings/" + rowData.id);
                                });
                            },
                            columns: [
                                {
                                    field: "disk_name",
                                    title: "Disk",
                                    width: 30
                                },
                                {
                                    field: "capacity",
                                    title: "Kapacita", template: function (dataItem) {
                                        return "" + dataItem.capacity + "GB";
                                    },
                                    width: 50
                                },
                                {
                                    field: "limit",
                                    title: "Hranice",
                                    template: function (dataItem) {
                                        return "" + dataItem.limitWarning + "GB/" + dataItem.limitError + "GB";
                                    },
                                    width: 50
                                },
                                {
                                    field: "time6m",
                                    title: "-6m",
                                    width: 30
                                },
                                {
                                    field: "time3m",
                                    title: "-3m",
                                    width: 30
                                },
                                {
                                    field: "time1m",
                                    title: "-1m",
                                    width: 30
                                },
                                {
                                    field: "time20d",
                                    title: "-20d",
                                    width: 30
                                },
                                {
                                    field: "time10d",
                                    title: "-10d",
                                    width: 30
                                },
                                {
                                    field: "time9d",
                                    title: "-9d",
                                    width: 30
                                },
                                {
                                    field: "time8d",
                                    title: "-8d",
                                    width: 30
                                },
                                {
                                    field: "time7d",
                                    title: "-7d",
                                    width: 30
                                },
                                {
                                    field: "time6d",
                                    title: "-6d",
                                    width: 30
                                },
                                {
                                    field: "time5d",
                                    title: "-5d",
                                    width: 30
                                },
                                {
                                    field: "time4d",
                                    title: "-4d",
                                    width: 30
                                },
                                {
                                    field: "time3d",
                                    title: "-3d",
                                    width: 30
                                },
                                {
                                    field: "time2d",
                                    title: "-2d",
                                    width: 30
                                },
                                {
                                    field: "time1d",
                                    title: "-1d",
                                    width: 30
                                },
                                {
                                    field: "timeToday",
                                    title: "Dnes",
                                    width: 30
                                }
                            ]
                        });
                    }
                }
        );
    };
});

