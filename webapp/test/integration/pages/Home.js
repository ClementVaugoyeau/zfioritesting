sap.ui.define([
	"sap/ui/test/Opa5"
  ], function (Opa5) {
	"use strict";
	var sViewName = "Home";
	
	Opa5.createPageObjects({
	  	onTheViewPage: {
			actions: {
				iWaitUntilProductListIsLoaded: function () {
					return this.waitFor({
						id: "HomeViewProductList",
						viewName: sViewName,
						success: function (oProductList) {
							Opa5.assert.ok(oProductList, "The product list is loaded");
							Opa5.assert.strictEqual(oProductList.getBusy(), false, "The product list is not busy");
							Opa5.assert.ok(oProductList.getItems().length > 0, "The product list has items");
						},
						errorMessage: "The product list is not loaded"
					});
				}
			},

			assertions: {
		  		iShouldSeeThePageView: function () {
					return this.waitFor({
			  			id: "page",
			  			viewName: sViewName,
			  			success: function () {
							Opa5.assert.ok(true, "The " + sViewName + " view is displayed");
			  			},
			  			errorMessage: "Did not find the " + sViewName + " view"
					});
		  		},
		
		  		iShouldSeeProductList: function () {
					return this.waitFor({
			  			id: "HomeViewProductList",
			  			viewName: sViewName,
			  			success: function (oProductList) {
							Opa5.assert.ok(oProductList, "The product list exists");
							Opa5.assert.strictEqual(oProductList.getVisible(), true, "The product list is visible");
							Opa5.assert.ok(oProductList.getItems().length > 0, "The product list has items");
			  			},
			  			errorMessage: "The product list is not visible"
					});
		  		}
			}
	  	}
	});
});