define(["kendo"], function() {
	return function (id) {
            return new kendo.View(
                "event-detail",
                {
                    model: kendo.observable({ id: id }),
                    
                    init: function (e) {
                        //CKEDITOR.replace( 'description-original' );
                        CKEDITOR.replace( 'description-custom' );
                        CKEDITOR.replace( 'solution' );
                    }
                }
        );};
});

