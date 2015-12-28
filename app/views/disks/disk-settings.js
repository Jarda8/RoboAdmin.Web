define(["ds/server-disks", "kendo"], function (dsServerDisks) {
    return function (id) {
        return new kendo.View(
                "disk-settings",
                {
                    model: dsServerDisks.at(0),
                    evalTemplate: true,
                    init: function (e) {
                        //CKEDITOR.replace( 'description-original' );
                        $("#removeDisk").click(function (e) {
                            e.preventDefault();
                            dsServerDisks.remove(dsServerDisks.at(0));
                            window.location.href = "/RoboAdmin/page.html\#server-detail/1";
                        });

                        $("#saveDisk").click(function (e) {
                            e.preventDefault();

                            var $warning = $("input[name='limit-warning']");
                            var $error = $("input[name='limit-error']");

                            dsServerDisks.at(0).set("limitWarning", $warning.val());
                            dsServerDisks.at(0).set("limitError", $error.val());
//                                    
//                                    var product = dataSource.at(0);
//  product.set("UnitPrice", 20);
                            window.location.href = "/RoboAdmin/page.html\#server-detail/1";
                        });
                    }
                }
        );
    };
});

