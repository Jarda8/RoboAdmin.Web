define(["jquery", "kendo"], function ($) {
    return new kendo.data.DataSource({
        schema: {
            model: {
                id: "id",
                fields: {
                    id: { type: "number"},
                    date_since: {type: "date"},
                    date_until: {type: "date"},
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
                "date_since": "2015-10-22 18:56:29",
                "date_until": "2015-11-1 20:20:00",
                "source": "Disky",
                "level": "Varování",
                "description": "Málo místa na disku C:"
            },
            {
                "id": "567614",
                "date_since": "2015-10-8 00:00:00",
                "date_until": "2015-10-15 08:42:25",
                "source": "Výpisy",
                "level": "Chyba",
                "description": "Chybějící výpis o odezvě"
            }]
    });
});