/*global sugarSmartsheetBackbone, Backbone, JST*/

sugarSmartsheetBackbone.Views.SheetView = Backbone.View.extend({

	tagName: "li",

    template: JST['app/scripts/templates/sheet.ejs'],

    initialize: function (argument) {
    	this.model.on('destroy', function(){
			self.remove();
		});
    }, 

    render: function (argument) {
    	this.$el.data("id", this.model.id);
    	console.log(this.model);
    	this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});
