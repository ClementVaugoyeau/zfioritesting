/*global QUnit*/

sap.ui.define([
    "zfioritesting/controller/Home.controller",
    "sap/m/MessageToast",
    "sap/m/GroupHeaderListItem",
    "sap/ui/thirdparty/sinon",
    "sap/ui/thirdparty/sinon-qunit"
], function (Controller, MessageToast, GroupHeaderListItem, sinon) {
    "use strict";

    QUnit.module("Contrôleur Home", {
        beforeEach: function () {
            this.oController = new Controller();
            this.oController.getOwnerComponent = function () {
                return {
                    getModel: function (modelName) {
                        if (modelName === "i18n") {
                            return {
                                getResourceBundle: function () {
                                    return {
                                        getText: function (key) {
                                            if (key === "ODataLoadingSuccess") {
                                                return "Message de succès de chargement OData";
                                            } else if (key === "ODataLoadingFailed") {
                                                return "Message d'échec de chargement OData";
                                            }
                                        }
                                    };
                                }
                            };
                        }
                    }
                };
            };
            this.oController.getView = function () {
                return {
                    setModel: function () {}
                };
            };
        },

        afterEach: function () {
            this.oController.destroy();
        }
    });

    QUnit.test("Initialisation", function (assert) {
        var done = assert.async();

        // Arrange
        var messageToastStub = sinon.stub(MessageToast, "show").returns();

        // Act
        this.oController.onInit();

        // Attendre que les opérations asynchrones se terminent
        setTimeout(function () {
            // Assert
            assert.strictEqual(messageToastStub.callCount, 1, "La méthode MessageToast.show a été appelée une fois");
            assert.ok(messageToastStub.calledOnce, "La méthode MessageToast.show a été appelée une fois");
            assert.strictEqual(messageToastStub.getCall(0).args[0], "Message de succès de chargement OData", "Message de succès affiché correctement");
            // Nettoyage
            messageToastStub.restore();
            done();
        }, 2000); // ajouter un délai avant d'appeler done()
    });

    QUnit.test("Génération d'en-tête de groupe", function (assert) {
        // Arrange
        var oGroup = {
            key: "Groupe 1"
        };

        // Act
        var oGroupHeader = this.oController.getGroupHeader(oGroup);

        // Assert
        assert.ok(oGroupHeader instanceof GroupHeaderListItem, "Instance de GroupHeaderListItem créée");
        assert.strictEqual(oGroupHeader.getTitle(), "Groupe 1", "Titre de l'en-tête de groupe défini correctement");
        assert.strictEqual(oGroupHeader.getUpperCase(), false, "Propriété upperCase de l'en-tête de groupe définie correctement");
    });

    QUnit.test("Appui sur le bouton", function (assert) {
        // Arrange
        var consoleLogStub = sinon.stub(console, "log");

        // Act
        this.oController.onPressCreate();

        // Assert
        assert.ok(consoleLogStub.calledOnce, "La méthode console.log a été appelée une fois");
        assert.strictEqual(consoleLogStub.getCall(0).args[0], "Pressed!", "Message de log affiché correctement");
    });
});