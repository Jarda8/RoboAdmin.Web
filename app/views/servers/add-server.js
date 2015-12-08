define(["jquery", "ds/servers", "kendo"], function ($, dsServers) {
    return new kendo.View(
            "add-server",
            {
                init: function (e) {
                    currentId = 50;
                    $("#add-server").click(function (e) {
                        e.preventDefault();

                        var $serverName = $("input[name='server-name']");
                        var $customer = $("input[name='customer']");
                        var $os = $("input[name='os']");
                        
                        currentId += 1;
                        dsServers.add({
                            id: currentId,
                            server_name: $serverName.val(),
                            customer: $customer.val(),
                            os: $os.val(),
                            "incidents1": 0,
                            "incidents2": 0,
                            "ping1": 0,
                            "ping2": 0,
                            "days_since_re": 0,
                            state: "ok",
                            incidents: []
                        });
                        $serverName.val("");
                        $customer.val("");
                        $os.val("");
                    });
                }
            }
    );
});