define(["jquery", "ds/events", "kendo"], function($, dsEvents) {
	return new kendo.View(
		"events",
		{
			model: {
			    events: dsEvents				
			},

			init: function (e) {
			    $("#grid-events").kendoGrid({
			        dataSource: dsEvents,
			        resizable: true,
			        editable: true,
                    detailTemplate: kendo.template($("#events-grid-detail").html()),
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
                            width: 150,                         
                        },
                        {
                            field: "level",
                            title: "Typ",
                            width: 100,                         
                            filterable: { multi: true }
                        },
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
                            editor: function (container, options) {                               
                                var select = $("<select/>");
                                select.attr("name", options.field);                               
                                select.append($("<option />", { value: "neznámá", text: "neznámá" }));
                                select.append($("<option />", { value: "ignorovat", text: "ignorovat" }));
                                select.append($("<option />", { value: "nízká", text: "nízká" }));
                                select.append($("<option />", { value: "normální", text: "normální" }));
                                select.append($("<option />", { value: "vysoká", text: "vysoká" }));
                                select.append($("<option />", { value: "kritická", text: "kritická" }));
                                select.val(options.model.priority);
                                select.appendTo(container);
                                select.kendoDropDownList();
                                var kendoDropDown = select.data("kendoDropDownList");
                                kendoDropDown.open();
                            },
                            width: 100,
                            filterable: {
                                multi: true,
                                dataSource: [
                                    { priority: "neznámá"},
                                    { priority: "ignorovat" },
                                    { priority: "nízká" },
                                    { priority: "normální" },
                                    { priority: "vysoká" },
                                    { priority: "kritická" },
                                ],
                                checkAll: false
                            }
                        },
                        {
                            field: "server_name",
                            title: "Server",                          
                            width: 200                           
                        },                                               
                        {
                            field: "source",
                            title: "Zdroj",                         
                            attributes: {
                                style: "white-space: nowrap"
                            }
                        },
                        {
                            field: "event_id",
                            title: "ID",                         
                            width: 120
                        },
                        {
                            field: "occurences",
                            title: "Výskytů",                           
                            width: 100
                        },
                        {
                            field: "state",
                            title: "Zpracovaná",                          
                            attributes: {
                                style: "text-align: center"
                            },
                            template: function(dataItem) {
                                if (dataItem.state == "vyřešená")
                                    return '<i class="fa fa-check" style="color: #00a65a"></i>';
                                else
                                    return '<i class="fa fa-wrench" style="color: #dd4b39"></i>';
                            },
                            width: 115
                        },
			        ]
			    })
			}
		}		
	);
});