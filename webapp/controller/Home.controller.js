sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("zfioritesting.controller.Home", {
            onInit: function () {
                var odataModel = new sap.ui.model.odata.v2.ODataModel("/V2/(S(5kpg2vlml1ktv5k4f35f4pac))/OData/OData.svc/");
                odataModel.read("/Products",{
                    success:function(oData,oResponse){
                        MessageBox.success("Success");
                        
                    },
                    error: function(oError){
                        MessageBox.error("Error");
                    }
                });
                this.getView().setModel(odataModel);
            }
        });
    });
