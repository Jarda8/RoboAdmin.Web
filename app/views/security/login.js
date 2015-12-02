define(["jquery","app/router","kendo" ], function($,router) {

	return new kendo.View(
	    "login",
	    {
			show: function () {
				$("#over").css("background-color",'#cfcfcf');
				$("#over").css("position", "fixed");
				$("#over").css("left", "0");
				$("#over").css("top", "0");
				$("#over").css("bottom", "0");
				$("#over").css("z-index","10000");
				$("#over").css("width",$("html").width()+20);
				$("#over").css("height",$("html").height()*2);
				$("#over").css("display","block");





			},
			model: kendo.observable({
				login: function(e) {
					$("#over").css("display", "none");
					router.navigate("#");
				}
			})
		}
	);
});