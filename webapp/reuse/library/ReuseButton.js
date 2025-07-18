// Provides control reuse.library.ReuseButton.
sap.ui.define(["sap/ui/core/Control", "./ReuseButtonRenderer", 'sap/m/MessageToast',], function (Control, ReuseButtonRenderer, MessageToast) {
	"use strict";

	/**
	 * Constructor for a new <code>reuse.library.ReuseButton</code> control.
	 *
	 * @param {string} [sId] id for the new control, generated automatically if no id is given
	 * @param {object} [mSettings] initial settings for the new control
	 *
	 * @class
	 * Some class description goes here.
	 * @extends sap.ui.core.Control
	 *
	 * @author David Oghiashvili
	 * @version ${version}
	 *
	 * @constructor
	 * @public
	 * @alias reuse.library.ReuseButton
	 */
	const ReuseButton = Control.extend(
		"reuse.library.ReuseButton",
		/** @lends reuse.library.ReuseButton.prototype */ {
			metadata: {
				library: "reuse.library",
				properties: {
					text: {
						type: "string",
						group: "Data"
					},
				}
			},
			renderer: ReuseButtonRenderer,
			onclick: function () {
				MessageToast.show("Reuse button clicked from reuse library")
			}
		}
	);
	return ReuseButton;
});
