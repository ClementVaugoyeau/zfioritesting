sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/GroupHeaderListItem",
    "sap/ui/model/odata/v2/ODataModel"
], function (Controller, MessageToast, GroupHeaderListItem, ODataModel) {
    "use strict";

    return Controller.extend("zfioritesting.controller.Home", {
        onInit: function () {
            var oBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            var odataModel = new ODataModel("/V2/(S(5kpg2vlml1ktv5k4f35f4pac))/OData/OData.svc/", {
                useBatch: false
            });
        
            odataModel.attachMetadataLoaded(function () {
                odataModel.read("/Products", {
                    success: function (oData, oResponse) {
                        MessageToast.show(oBundle.getText("ODataLoadingSuccess"));
                    },
                    error: function (oError) {
                        MessageToast.show(oBundle.getText("ODataLoadingFailed"));
                    }
                });
            });
        
            this.getView().setModel(odataModel);
        },

        getGroupHeader: function (oGroup) {
            return new GroupHeaderListItem({
                title: oGroup.key,
                upperCase: false
            });
        },

        onPressCreate: function () {
            console.log("Pressed!");
        },

        onPressEdit: function (sItemId, oUpdatedData) {
            console.log("Modified !");
        }
    });
});
