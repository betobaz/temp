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
        
        var sheetView = new sugarSmartsheetBackbone.Views.SelectSheetView({
            $el: $('#select-sheet'),
            collection: sugarSmartsheetBackbone.Collections.sheetCollection
        });
        sugarSmartsheetBackbone.Collections.sheetCollection.add([
            {
                id: 123,
                name: "bla bla bla"
            }
        ]);
       debugger;
       var matchFieldColumnView = new sugarSmartsheetBackbone.Views.MatchFieldColumnView ({
            $el: $('#match-field-colum')
            
        });
    }
};

$(document).ready(function () {
    'use strict';
    sugarSmartsheetBackbone.init();
});
