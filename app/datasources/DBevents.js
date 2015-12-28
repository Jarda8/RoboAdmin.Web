define(["jquery", "kendo"], function ($) {
    return new kendo.data.DataSource({
        schema: {
            model: {
                id: "id",
                fields: {
                    id: { type: "number"},
                    occurences: {type: "number"},
                    date_time: {type: "date"},
                    server_name: { type: "string"},
                    source: {type: "string"},
                    event_id: { type: "number"},
                    priority: {type: "string"},
                    state: {type: "string"},
                    level: {type: "string"},
                    log: { type: "string"}
                }
            }
        },
        pageSize: 25,       
        data: [
    {
        "id": "12135120",
        "occurences": "1332",
        "date_time": "2015-07-08 12:52:54",
        "server_name": "VINSBS.v-invest.local",
        "source": "MsiInstaller",
        "event_id": "1015",
        "priority": "normální",
        "state": "v řešení",
        "level": "Upozornění",
        "log": "Application"
    },
     {
        "id": "12135122",
        "occurences": "100",
        "date_time": "2015-07-08 12:32:50",
        "server_name": "VINSBS.v-invest.local",
        "source": "Microsoft-Windows-User Profiles Service",
        "event_id": "1530",
        "priority": "normální",
        "state": "v řešení",
        "level": "Upozornění",
        "log": "Application"
    },
    {
        "id": "12135455",
        "occurences": "48",
        "date_time": "2015-07-08 12:31:50",
        "server_name": "VINSBS.v-invest.local",
        "source": "Microsoft-SharePoint Products-SharePoint Foundation",
        "event_id": "8058",
        "priority": "normální",
        "state": "v řešení",
        "level": "Upozornění",
        "log": "Microsoft-SharePoint Products-Shared/Operational"
    },
    {
        "id": "12131487",
        "occurences": "33",
        "date_time": "2015-07-08 05:00:13",
        "server_name": "SRV-SPA.spartners.local",
        "source": "SRMSVC",
        "event_id": "8196",
        "priority": "nízká",
        "state": "fronta",
        "level": "Upozornění",
        "log": "Application"
    },
    {
        "id": "12098521",
        "occurences": "46",
        "date_time": "2015-07-08 04:50:14",
        "server_name": "srv-dms.DMS.local",
        "source": "Microsoft-Windows-DeviceSetupManager",
        "event_id": "122",
        "priority": "nízká",
        "state": "fronta",
        "level": "Upozornění",
        "log": "Microsoft-Windows-DeviceSetupManager/Admin"
    },
    {
        "id": "12124269",
        "occurences": "459",
        "date_time": "2015-07-08 04:43:09",
        "server_name": "SRV-KR.kralicek.local",
        "source": "ASP.NET 2.0.50727.0",
        "event_id": "1309",
        "priority": "nízká",
        "state": "fronta",
        "level": "Upozornění",
        "log": "Application"
    },
    {
        "id": "12124270",
        "occurences": "160",
        "date_time": "2015-07-08 04:42:38",
        "server_name": "SRV-KR.kralicek.local",
        "source": "Windows Server Update Services",
        "event_id": "12032",
        "priority": "normální",
        "state": "fronta",
        "level": "Chyba",
        "log": "Application"
    },
    {
        "id": "12131490",
        "occurences": "899",
        "date_time": "2015-07-08 04:32:04",
        "server_name": "SRV-SPA.spartners.local",
        "source": "Microsoft-SharePoint Products-SharePoint Foundation",
        "event_id": "6398",
        "priority": "vysoká",
        "state": "fronta",
        "level": "Kritická",
        "log": "Application"
    },
    {
        "id": "12111131",
        "occurences": "325",
        "date_time": "2015-07-08 04:31:58",
        "server_name": "SRV-GA.GREIF.praha",
        "source": "Microsoft-SharePoint Products-SharePoint Foundation",
        "event_id": "6398",
        "priority": "vysoká",
        "state": "fronta",
        "level": "Kritická",
        "log": "Application"
    },
   
]
    });
});