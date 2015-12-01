define(["jquery", "kendo"], function ($) {
    return new kendo.data.DataSource({
        schema: {
            model: {
                id: "id",
                fields: {
                    id: { type: "Number"},
                    date_since: {type: "String"},
                    date_until: {type: "String"},
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