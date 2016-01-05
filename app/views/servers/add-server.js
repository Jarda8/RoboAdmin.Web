define(["jquery", "ds/servers", "kendo"], function ($, dsServers) {
    return new kendo.View(
            "add-server",
            {
                init: function (e) {
                    currentId = 50;
                    
                    var validator = $("#myform").kendoValidator().data("kendoValidator");
                        
                    $("#addserver").click(function (e) {
                        e.preventDefault();
                        if (validator.validate()) {
                                
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
    //                        $serverName.val("");
    //                        $customer.val("");
    //                        $os.val("");

                            var $alert = $("#alert");
                            $alert.html("<div class='alert alert-success alert-dismissible'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button>\n\
                                            <h4><i class='icon fa fa-check'></i> Server byl úspěšně uložen!</h4></div>");
  
                        }
                    });
                }
            }
    );
});