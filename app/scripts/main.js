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
        sugarSmartsheetBackbone.Collections.sheetCollection.add([{"id":436052830775172,"name":"EP SOL. TELCO - Publicado","accessLevel":"ADMIN"},{"id":3072862102808452,"name":"HARBOR","accessLevel":"ADMIN"},{"id":2367018587449220,"name":"INTEGRACI\u00d3N SUGARCRM - SAP","accessLevel":"ADMIN"},{"id":1058720009480068,"name":"P - FIBRAS QUIMICAS - Publicado","accessLevel":"EDITOR_SHARE"},{"id":7570362876618628,"name":"P BAJA RACK","accessLevel":"EDITOR_SHARE"},{"id":2318107499882372,"name":"P BONAFONT - Publicado","accessLevel":"EDITOR"},{"id":5441545156487044,"name":"P BURO CREATIVO - PUBLICADO","accessLevel":"EDITOR_SHARE"},{"id":7662017478715268,"name":"P CONVERMEX - Publicado","accessLevel":"EDITOR_SHARE"},{"id":876536086718340,"name":"P COPPEL","accessLevel":"EDITOR_SHARE"},{"id":7913410504484740,"name":"P GRUAS MTY","accessLevel":"EDITOR_SHARE"},{"id":6083823155865476,"name":"P MAQUINTER","accessLevel":"EDITOR_SHARE"},{"id":8006241927620484,"name":"P MARITIMEX.","accessLevel":"ADMIN"},{"id":4262576633735044,"name":"P ONE-OFICINAS","accessLevel":"EDITOR_SHARE"},{"id":6035753881888644,"name":"P PAQUETEXPRESS - Publicado","accessLevel":"EDITOR_SHARE"},{"id":336955050354564,"name":"Plan de Acci\u00f3n - ODG\/SOFIA","accessLevel":"EDITOR_SHARE"},{"id":3833865883150212,"name":"Plan de Acci\u00f3n CRV - CRM","accessLevel":"ADMIN"},{"id":5684893708511108,"name":"Plan de Acci\u00f3n ODG\/ARBOLEDA - CRM","accessLevel":"EDITOR_SHARE"},{"id":5313177173944196,"name":"Timing ingredientes base - Sugar","accessLevel":"ADMIN"}]);
       var matchFieldColumnView = new sugarSmartsheetBackbone.Views.MatchFieldColumnView ({
            $el: $('#match-field-colum')
            
        });
    }
};

$(document).ready(function () {
    'use strict';
    sugarSmartsheetBackbone.init();
});
