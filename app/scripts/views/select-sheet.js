/*global sugarSmartsheetBackbone, Backbone, JST*/

sugarSmartsheetBackbone.Views.SelectSheetView = Backbone.View.extend({

    template: JST['app/scripts/templates/select-sheet.ejs'],

    initialize: function (options) {
  		var self = this;
  		this.collection = options.collection;
  		this.$el = options.$el
  		this.selectedCallback = options.selectedCallback;

  		this.collection.on("add", function(model){
  			console.log("Add sheet");
            var sheetView = new sugarSmartsheetBackbone.Views.SheetView({
                "model": model
            });
            sheetView.render();
            self.$el.find("#sheet-list").append(sheetView.$el);
  		});
  		this.render();	
    },
    events: {
    	"click a": "selected"
    },

    render: function(argument) {
      this.$el.html(this.template())
      this.$el.dialog({
        autoOpen: false,
        modal: true
      });
    	return this;
    },

    selected: function(evt) {
    	var item = $(evt.target).closest("li");
    	evt.preventDefault();
    	var model = this.collection.get(item.data("id"));
    	console.log("selected", model);
      this.selectedCallback && this.selectedCallback(model);
      this.$el.dialog("close");
    },

    open: function(){
      console.log("open");

      this.$el.dialog("open");
    },




});
