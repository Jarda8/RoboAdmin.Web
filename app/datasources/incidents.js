define(["jquery", "kendo"], function ($) {
    return new kendo.data.DataSource({
        schema: {
            model: {
                id: "id",
                fields: {
                    id: { type: "Number"},
                    date_time: {type: "String"},
                    server_name: {type: "String"},
                    customer: {type: "String"},
                    source: {type: "String"},
                    level: {type: "String"},
                    description: {type: "String"}
                }
            }
        },
        pageSize: 25,
        data: [
            {
                "id": "15465",
                "date_time": "2015-07-08 12:52:54",
                "server_name": "Server1",
                "customer": "DIGI",
                "source": "Disky",
                "level": "Upozornění",
                "description": "Málo místa na disku C: (< 2GB)"
            },
            {
                "id": "567614",
                "date_time": "2015-07-08 12:32:50",
                "server_name": "Server2",
                "customer": "DIGI",
                "source": "Dostupnost",
                "level": "Chyba",
                "description": "Server je nedostupný"
            }]
    });
});