sap.ui.define([
    "zfioritesting/controller/Home.controller",
    "sap/m/MessageToast",
    "sap/m/GroupHeaderListItem",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/ui/core/mvc/Controller",
    "sap/ui/thirdparty/sinon", // Added sinon import
    "sap/ui/thirdparty/sinon-qunit" // Added sinon-qunit import
], function (HomeController, MessageToast, GroupHeaderListItem, ODataModel, Controller) {
    "use strict";

    QUnit.module("Home.controller", {
        beforeEach: function () {
            this.oController = new HomeController();
            this.oViewStub = {
                setModel: sinon.stub()
            };
            sinon.stub(this.oController, "getView").returns(this.oViewStub);
            this.oMessageToastStub = sinon.stub(MessageToast, "show");
        },
        afterEach: function () {
            this.oController.destroy();
            this.oController = null;
            this.oMessageToastStub.restore();
        }
    });

    // QUnit.test("onInit - sets OData model and handles success/error", function (assert) {
    //     // Arrange
    //     var oBundleStub = {
    //         getText: sinon.stub().returns("Mocked Text")
    //     };
    //     var oComponentStub = {
    //         getModel: sinon.stub().returns({
    //             getResourceBundle: sinon.stub().returns(oBundleStub)
    //         })
    //     };
    //     sinon.stub(this.oController, "getOwnerComponent").returns(oComponentStub);

    //     var oDataModelStub = sinon.createStubInstance(ODataModel);
    //     sinon.stub(this.oController, "_createODataModel").returns(oDataModelStub);

    //     // Act
    //     this.oController.onInit();

    //     // Assert
    //     assert.ok(this.oViewStub.setModel.calledWith(oDataModelStub), "OData model is set on the view");
    //     assert.ok(oDataModelStub.attachMetadataLoaded.calledOnce, "MetadataLoaded event is attached");

    //     // Simulate success callback
    //     var successCallback = oDataModelStub.read.getCall(0).args[1].success;
    //     successCallback();
    //     assert.ok(this.oMessageToastStub.calledWith("Mocked Text"), "MessageToast is shown on success");

    //     // Simulate error callback
    //     var errorCallback = oDataModelStub.read.getCall(0).args[1].error;
    //     errorCallback();
    //     assert.ok(this.oMessageToastStub.calledWith("Mocked Text"), "MessageToast is shown on error");
    // });

    QUnit.test("getGroupHeader - returns a GroupHeaderListItem with correct title", function (assert) {
        // Arrange
        var oGroup = { key: "Test Group" };

        // Act
        var oGroupHeader = this.oController.getGroupHeader(oGroup);

        // Assert
        assert.ok(oGroupHeader instanceof GroupHeaderListItem, "Returned object is a GroupHeaderListItem");
        assert.strictEqual(oGroupHeader.getTitle(), "Test Group", "Title is set correctly");
        assert.strictEqual(oGroupHeader.getUpperCase(), false, "UpperCase is set to false");
    });

    QUnit.test("onPressCreate - logs 'Pressed!'", function (assert) {
        // Arrange
        var consoleStub = sinon.stub(console, "log");

        // Act
        this.oController.onPressCreate();

        // Assert
        assert.ok(consoleStub.calledWith("Pressed!"), "Correct log message is output");
        consoleStub.restore();
    });

    QUnit.test("onPressEdit - logs 'Modified !'", function (assert) {
        // Arrange
        var consoleStub = sinon.stub(console, "log");

        // Act
        this.oController.onPressEdit("123", {});

        // Assert
        assert.ok(consoleStub.calledWith("Modified !"), "Correct log message is output");
        consoleStub.restore();
    });
});