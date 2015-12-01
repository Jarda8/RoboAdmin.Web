define(["jquery", "kendo"], function ($) {
    return new kendo.data.DataSource({
        schema: {
            model: {
                id: "id",
                fields: {
                    id: { type: "Number"},
                    disk_name: {type: "String"},
                    capacity: {type: "int"},
                    limitWarning: {type: "int"},
                    limitError: {type: "int"},
                    time6m: {type: "int"},
                    time3m: {type: "int"},
                    time1m: {type: "int"},
                    time20d: {type: "int"},
                    time10d: {type: "int"},
                    time9d: {type: "int"},
                    time8d: {type: "int"},
                    time7d: {type: "int"},
                    time6d: {type: "int"},
                    time5d: {type: "int"},
                    time4d: {type: "int"},
                    time3d: {type: "int"},
                    time2d: {type: "int"},
                    time1d: {type: "int"},
                    timeToday: {type: "int"},
                }
            }
        },
        pageSize: 25,
        data: [
            {
                "id": "1",
                "disk_name": "C",
                "capacity": 100,
                "limitWarning": 10,
                "limitError": 5,
                "time6m": 18,
                "time3m": 12,
                "time1m": 10,
                "time20d": 10,
                "time10d": 10,
                "time9d": 9,
                "time8d": 9,
                "time7d": 9,
                "time6d": 8,
                "time5d": 9,
                "time4d": 9,
                "time3d": 8,
                "time2d": 8,
                "time1d": 7,
                "timeToday": 7
            },
            {
                "id": "2",
                "disk_name": "D",
                "capacity": 300,
                "limitWarning": 20,
                "limitError": 10,
                "time6m": 40,
                "time3m": 28,
                "time1m": 24,
                "time20d": 22,
                "time10d": 23,
                "time9d": 23,
                "time8d": 23,
                "time7d": 22,
                "time6d": 22,
                "time5d": 21,
                "time4d": 21,
                "time3d": 21,
                "time2d": 22,
                "time1d": 22,
                "timeToday": 22
            }]
    });
});