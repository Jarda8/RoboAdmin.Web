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
                "id": "1",
                "name": "Filtr 1",
                "type": "udalost",
                "email": "admin@firma.com",
                "active": "true"           
            },
            {
                "id": "2",
                "name": "Filtr 2",
                "type": "disku",
                "email": "admin@firma.com",
                "active": "true"  
            },
            {
                "id": "3",
                "name": "Filtr 3",
                "type": "odezva",
                "email": "sef@firma.com",
                "active": "false"           
            },
            {
                "id": "4",
                "name": "Filtr 4",
                "type": "dostupnost",
                "email": "sef@firma.com",
                "active": "false"           
            },
            {
                "id": "5",
                "name": "Filtr 5",
                "type": "sluzba",
                "email": "admin@firma.com",
                "active": "true"           
            },]
    });
});