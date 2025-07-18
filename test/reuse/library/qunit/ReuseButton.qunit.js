/*global QUnit, jQuery */
sap.ui.define(["reuse/library/library", "reuse/library/ReuseButton"], function (library, ReuseButton) {
	"use strict";

	// refer to library types
	const ReuseButtonColor = library.ReuseButtonColor;

	// prepare DOM
	const oDiv = document.createElement("div");
	oDiv.id = "uiArea1";
	document.body.appendChild(oDiv);

	// module for basic checks
	QUnit.module("ReuseButton Tests");

	// ReuseButton sync test
	QUnit.test("Sync", function (assert) {
		assert.expect(1);
		assert.ok(true, "ok");
	});

	// ReuseButton async test
	QUnit.test("Async", function (assert) {
		assert.expect(1);
		return new Promise(function (resolve /*, reject*/) {
			assert.ok(true, "ok");
			resolve();
		});
	});

	// module for basic checks
	QUnit.module("Basic Control Checks");

	// some basic control checks
	QUnit.test("Test get properties", function (assert) {
		assert.expect(2);
		const oReuseButton = new ReuseButton({
			text: "ReuseButton"
		});
		assert.equal(oReuseButton.getText(), "ReuseButton", "Check text equals 'ReuseButton'");
		assert.equal(oReuseButton.getColor(), ReuseButtonColor.Default, "Check color equals 'Default'");
	});

	// some basic eventing check
	QUnit.test("Test click event", function (assert) {
		assert.expect(1);
		const oReuseButton = new ReuseButton("ReuseButton", {
			text: "ReuseButton",
			press: function () {
				assert.ok(true, "Event has been fired!");
			}
		}).placeAt("uiArea1");
		return new Promise(function (resolve /*, reject*/) {
			setTimeout(function () {
				// eslint-disable-next-line new-cap
				oReuseButton.$().trigger(jQuery.Event("click"));
				resolve();
			}, 100);
		});
	});
});
