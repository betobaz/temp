/*global sugarSmartsheetBackbone, $*/


window.sugarSmartsheetBackbone = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
        sugarSmartsheetBackbone.Collections.sheetCollection = new sugarSmartsheetBackbone.Collections.SheetCollection();
        
        var selectSheetView = new sugarSmartsheetBackbone.Views.SelectSheetView({
            $el: $('#select-sheet').find('.search-dialog'),
            collection: sugarSmartsheetBackbone.Collections.sheetCollection,
            selectedCallback: function(model){
                $('#select-sheet')
                    .find('input:text').val(model.get("name"))
                    .end()
                    .find('input:hidden').val(model.id);
            }

        });
        $('button.open-search-dialog').on("click", function(){
            selectSheetView.open()
        });
        $('button.clear-field').on("click", function(){
            $('#select-sheet').find("input").val("");
        });
        sugarSmartsheetBackbone.Collections.sheetCollection.add([
            {
                id: 123,
                name: "Sheet1"
            },
            {
                id: 124,
                name: "Sheet2"
            },
            {
                id: 125,
                name: "Sheet3"
            }
        ]);
       var matchFieldColumnView = new sugarSmartsheetBackbone.Views.MatchFieldColumnView ({
            $el: $('#match-field-colum')
            
        });
    }
};

$(document).ready(function () {
    'use strict';
    sugarSmartsheetBackbone.init();
});
