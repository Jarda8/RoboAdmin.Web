define(["kendo"], function () {
    return new kendo.data.ObservableArray(
         [
            {
                "id": "0",
                "name": 'Filtr1',
                "type": "udalost",
                "email": "admin@firma.com",
                "active": "true",
                "priority": "0",
                "source": "0",
                "server": "0",
                "customer":"0"
            },
            {
                "id": "1",
                "name": 'Filtr2',
                "type": "disk",
                "email": "admin@firma.com",
                "active": "true"  
            },
            {
                "id": "2",
                "name": "Filtr3",
                "type": "odezva",
                "email": "sef@firma.com",
                "active": "false"           
            },
            {
                "id": "3",
                "name": "Filtr4",
                "type": "dostupnost",
                "email": "sef@firma.com",
                "active": "false"           
            },
            {
                "id": "4",
                "name": "Filtr5",
                "type": "sluzba",
                "email": "admin@firma.com",
                "active": "true"           
            }]
    );
});
