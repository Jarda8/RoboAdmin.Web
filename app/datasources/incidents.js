define(["jquery", "kendo"], function ($) {
    return new kendo.data.DataSource({
        schema: {
            model: {
                id: "id",
                fields: {
                    id: { type: "number"},
                    date_time: {type: "date"},
                    server_name: {type: "string"},
                    customer: {type: "string"},
                    source: {type: "string"},
                    level: {type: "string"},
                    description: {type: "string"}
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