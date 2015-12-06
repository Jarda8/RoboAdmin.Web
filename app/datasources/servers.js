define(["jquery", "kendo"], function ($) {
    return new kendo.data.DataSource({
        schema: {
            model: {
                id: "id",
                fields: {
                    id: { type: "Number", editable: false },
                    server_name: { type: "String", editable: false },
                    customer: {type: "String", editable: false },
                    os: { type: "String", editable: false },
                    incidents1: {type: "Number", editable: false },
                    incidents2: {type: "Number", editable: false },
                    ping1: {type: "Number", editable: false },
                    ping2: {type: "Number", editable: false },
                    days_since_re: {type: "Number", editable: false }
                }
            }
        },
        pageSize: 18,       
        data: [
    {
        "id": "1",
        "server_name": "Server1",
        "customer": "OBF",
        "os": "SBS2012",
        "incidents1": 1,
        "incidents2": 3,
        "ping1": 25,
        "ping2": 23,
        "days_since_re": 12
    },
    {
        "id": "2",
        "server_name": "Server2",
        "customer": "DIGI",
        "os": "SBS2008R2",
        "incidents1": 0,
        "incidents2": 5,
        "ping1": 6,
        "ping2": 8,
        "days_since_re": 35
    },
    {
        "id": "3",
        "server_name": "Server3",
        "customer": "DIGI",
        "os": "SBS2008R2",
        "incidents1": 0,
        "incidents2": 5,
        "ping1": 0,
        "ping2": 0,
        "days_since_re": 2
    },
    {
        "id": "3",
        "server_name": "Server3",
        "customer": "DIGI",
        "os": "SBS2008R2",
        "incidents1": 0,
        "incidents2": 5,
        "ping1": 0,
        "ping2": 0,
        "days_since_re": 2
    },
    {
        "id": "3",
        "server_name": "Server3",
        "customer": "DIGI",
        "os": "SBS2008R2",
        "incidents1": 0,
        "incidents2": 5,
        "ping1": 0,
        "ping2": 0,
        "days_since_re": 2
    },
    {
        "id": "3",
        "server_name": "Server3",
        "customer": "DIGI",
        "os": "SBS2008R2",
        "incidents1": 0,
        "incidents2": 5,
        "ping1": 0,
        "ping2": 0,
        "days_since_re": 2
    },
    {
        "id": "3",
        "server_name": "Server3",
        "customer": "DIGI",
        "os": "SBS2008R2",
        "incidents1": 0,
        "incidents2": 5,
        "ping1": 0,
        "ping2": 0,
        "days_since_re": 2
    },
    {
        "id": "3",
        "server_name": "Server3",
        "customer": "DIGI",
        "os": "SBS2008R2",
        "incidents1": 0,
        "incidents2": 5,
        "ping1": 0,
        "ping2": 0,
        "days_since_re": 2
    },
    {
        "id": "3",
        "server_name": "Server3",
        "customer": "DIGI",
        "os": "SBS2008R2",
        "incidents1": 0,
        "incidents2": 5,
        "ping1": 0,
        "ping2": 0,
        "days_since_re": 2
    },
    {
        "id": "3",
        "server_name": "Server3",
        "customer": "DIGI",
        "os": "SBS2008R2",
        "incidents1": 0,
        "incidents2": 5,
        "ping1": 0,
        "ping2": 0,
        "days_since_re": 2
    },
    {
        "id": "3",
        "server_name": "Server3",
        "customer": "DIGI",
        "os": "SBS2008R2",
        "incidents1": 0,
        "incidents2": 5,
        "ping1": 0,
        "ping2": 0,
        "days_since_re": 2
    },
    {
        "id": "3",
        "server_name": "Server3",
        "customer": "DIGI",
        "os": "SBS2008R2",
        "incidents1": 0,
        "incidents2": 5,
        "ping1": 0,
        "ping2": 0,
        "days_since_re": 2
    },
    {
        "id": "3",
        "server_name": "Server3",
        "customer": "DIGI",
        "os": "SBS2008R2",
        "incidents1": 0,
        "incidents2": 5,
        "ping1": 0,
        "ping2": 0,
        "days_since_re": 2
    },
    {
        "id": "3",
        "server_name": "Server3",
        "customer": "DIGI",
        "os": "SBS2008R2",
        "incidents1": 0,
        "incidents2": 5,
        "ping1": 0,
        "ping2": 0,
        "days_since_re": 2
    },
    {
        "id": "3",
        "server_name": "Server3",
        "customer": "DIGI",
        "os": "SBS2008R2",
        "incidents1": 0,
        "incidents2": 5,
        "ping1": 0,
        "ping2": 0,
        "days_since_re": 2
    },
    {
        "id": "3",
        "server_name": "Server3",
        "customer": "DIGI",
        "os": "SBS2008R2",
        "incidents1": 0,
        "incidents2": 5,
        "ping1": 0,
        "ping2": 0,
        "days_since_re": 2
    },
    {
        "id": "3",
        "server_name": "Server3",
        "customer": "DIGI",
        "os": "SBS2008R2",
        "incidents1": 0,
        "incidents2": 5,
        "ping1": 0,
        "ping2": 0,
        "days_since_re": 2
    },
    {
        "id": "3",
        "server_name": "Server3",
        "customer": "DIGI",
        "os": "SBS2008R2",
        "incidents1": 0,
        "incidents2": 5,
        "ping1": 0,
        "ping2": 0,
        "days_since_re": 2
    },
    {
        "id": "3",
        "server_name": "Server3",
        "customer": "DIGI",
        "os": "SBS2008R2",
        "incidents1": 0,
        "incidents2": 5,
        "ping1": 0,
        "ping2": 0,
        "days_since_re": 2
    },
    {
        "id": "3",
        "server_name": "Server3",
        "customer": "DIGI",
        "os": "SBS2008R2",
        "incidents1": 0,
        "incidents2": 5,
        "ping1": 0,
        "ping2": 0,
        "days_since_re": 2
    },
    {
        "id": "3",
        "server_name": "Server3",
        "customer": "DIGI",
        "os": "SBS2008R2",
        "incidents1": 0,
        "incidents2": 5,
        "ping1": 0,
        "ping2": 0,
        "days_since_re": 2
    },
    {
        "id": "3",
        "server_name": "Server3",
        "customer": "DIGI",
        "os": "SBS2008R2",
        "incidents1": 0,
        "incidents2": 5,
        "ping1": 0,
        "ping2": 0,
        "days_since_re": 2
    },
    {
        "id": "3",
        "server_name": "Server3",
        "customer": "DIGI",
        "os": "SBS2008R2",
        "incidents1": 0,
        "incidents2": 5,
        "ping1": 0,
        "ping2": 0,
        "days_since_re": 2
    },
    {
        "id": "3",
        "server_name": "Server3",
        "customer": "DIGI",
        "os": "SBS2008R2",
        "incidents1": 0,
        "incidents2": 5,
        "ping1": 0,
        "ping2": 0,
        "days_since_re": 2
    }
]
    });
});