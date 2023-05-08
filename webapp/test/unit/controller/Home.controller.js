/*global QUnit*/

sap.ui.define([
    "zfioritesting/controller/Home.controller",
    "sap/m/MessageToast",
    "sap/m/GroupHeaderListItem",
    "sap/ui/thirdparty/sinon",
], function (Controller, MessageToast, GroupHeaderListItem, sinon) {
    "use strict";

    QUnit.module("Home Controller", {
        beforeEach: function (assert) {
            var done = assert.async();
            var oComponent = {
                getModel: function (modelName) {
                    if (modelName === "i18n") {
                        return {
                            getResourceBundle: function () {
                                return {
                                    getText: function (key) {
                                        if (key === "ODataLoadingSuccess") {
                                            return "OData loading success message";
                                        } else if (key === "ODataLoadingFailed") {
                                            return "OData loading failed message";
                                        }
                                    },
                                };
                            },
                        };
                    }
                },
            };

            this.oController = new Controller();
            this.oController.getOwnerComponent = function () {
                return oComponent;
            };
            this.oController.getView = function () {
                return {
                    setModel: function () {},
                };
            };

            setTimeout(function () {
                done();
            }, 1000); // add some delay before calling done()
        },

        afterEach: function () {
            this.oController.destroy();
        },
    });

    QUnit.test("Initialization", function (assert) {
        var done = assert.async();

        // Arrange
        var messageToastStub = sinon.stub(MessageToast, "show").returns();

        // Act
        this.oController.onInit();

        // Wait for the asynchronous operations to complete
        setTimeout(function () {
            // Assert
            assert.strictEqual(messageToastStub.callCount, 1, "MessageToast.show method was called once");
			assert.ok(messageToastStub.calledOnce, "MessageToast.show method was called once");
			assert.strictEqual(messageToastStub.getCall(0).args[0], "OData loading success message", "Correct success message displayed");
		  // Cleanup
            messageToastStub.restore();
            done();
        }, 2000); // add some delay before calling done()
    });

	QUnit.test("Group Header Generation", function(assert) {
		// Arrange
		var oGroup = {
			key: "Group 1"
		};

		// Act
		var oGroupHeader = this.oController.getGroupHeader(oGroup);

		// Assert
		assert.ok(oGroupHeader instanceof GroupHeaderListItem, "GroupHeaderListItem instance created");
		assert.strictEqual(oGroupHeader.getTitle(), "Group 1", "Group header title set correctly");
		assert.strictEqual(oGroupHeader.getUpperCase(), false, "Group header upperCase property set correctly");
	});

	QUnit.test("Button Press", function(assert) {
		// Arrange
		var consoleLogStub = sinon.stub(console, "log");

		// Act
		this.oController.onPressCreate();

		// Assert
		assert.ok(consoleLogStub.calledOnce, "console.log method was called once");
		assert.strictEqual(consoleLogStub.getCall(0).args[0], "Pressed!", "Correct log message displayed");
	});
});
