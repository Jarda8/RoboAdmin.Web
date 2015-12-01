define(["kendo"], function() {
	return function (id) {
            return new kendo.View(
                "server-factors",
                {
                    model: kendo.observable({ id: id }),
                    
                    init: function (e) {
                        //CKEDITOR.replace( 'description-original' );
                    }
                }
        );};
});

