define(["app/router", "kendo", "jquery"], function (router) {
    return new kendo.View(
        "sidebar",
        {
            init: function (e) {
                $("li").addClass("active");
                
//                $("li").each(function (idx) {
//                    $(this).addClass("active");
//                });
            }
        }
    );
});

//click(function () {
//                    $("#servers-nav").addClass("active");
//                });