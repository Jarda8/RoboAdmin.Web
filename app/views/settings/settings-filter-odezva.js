define(["jquery", "ds/settings", "app/router", "kendo"], function ($, dsSettings, router) {
    return new kendo.View(
            "settings-filter-odezva",
            {
                model: {
                    events: dsSettings
                },
                init: function (e) {
                    currentId = dsSettings.data().lenght;
                    $("#addfilter").click(function (e) {
                        e.preventDefault();

                        var $filterName = $("input[name='filter-name']");
                        var $typ = $("select[name='typ-drop']");
                        var $email = $("input[name='filter-email']");
                       
                        currentId += 1;
                        dsSettings.add({
                            id: currentId,
                            name: $filterName.val(),
                            type: $typ.val(),
                            email: $email.val(),
                            active: true                           
                        });
//                       
                        router.navigate("#settings");
                        var $alert = $("#alert");
                        $alert.html("<div class='alert alert-success alert-dismissible'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button>\n\
                                        <h4><i class='icon fa fa-check'></i> Server byl úspěšně uložen!</h4></div>");
       
                    });
                }
            }
    );
});