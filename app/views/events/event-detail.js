define(["kendo"], function() {
	return function (id) {
            return new kendo.View(
                "event-detail",
                {
                    model: kendo.observable({ id: id }),
                    
                    init: function (e) {
                        CKEDITOR.replace( 'description-cz' );
                        CKEDITOR.replace( 'description-en' );
                        CKEDITOR.replace( 'solution' );
                    }
                }
        );};
});

