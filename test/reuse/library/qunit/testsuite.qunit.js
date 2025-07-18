sap.ui.define(function () {
	"use strict";

	return {
		name: "QUnit TestSuite for reuse.library",
		defaults: {
			ui5: {
				libs: ["sap.ui.core", "reuse.library"],
				theme: "sap_horizon"
			},
			qunit: {
				version: 2,
				reorder: false
			},
			sinon: {
				version: 4,
				qunitBridge: true,
				useFakeTimers: false
			},
			coverage: {
				only: ["reuse/library/"],
				never: ["test-resources/"]
			}
		},
		tests: {
			// test file for the Example control
			Example: {
				title: "QUnit Test for Example",
				_alternativeTitle: "QUnit tests: reuse.library.Example"
			}
		}
	};
});
