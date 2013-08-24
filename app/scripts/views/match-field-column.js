/*global sugarSmartsheetBackbone, Backbone, JST*/

sugarSmartsheetBackbone.Views.MatchFieldColumnView = Backbone.View.extend({

    template: JST['app/scripts/templates/match-field-column.ejs'],

    initialize: function(options) {
    	
    	this.render();
    },

    render:function () {
    	this.$el.html(this.template());
    	return this;
    }
});
