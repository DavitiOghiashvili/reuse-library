/*!
 * ${copyright}
 */

// Provides control reuse.library.Example.
sap.ui.define(["./library", "sap/ui/core/Control", "./ExampleRenderer"], function (library, Control, ExampleRenderer) {
	"use strict";

	// refer to library types
	const ExampleColor = library.ExampleColor;

	/**
	 * Constructor for a new <code>reuse.library.Example</code> control.
	 *
	 * @param {string} [sId] id for the new control, generated automatically if no id is given
	 * @param {object} [mSettings] initial settings for the new control
	 *
	 * @class
	 * Some class description goes here.
	 * @extends sap.ui.core.Control
	 *
	 * @author 
	 * @version ${version}
	 *
	 * @constructor
	 * @public
	 * @alias reuse.library.Example
	 */
	const Example = Control.extend(
		"reuse.library.Example",
		/** @lends reuse.library.Example.prototype */ {
			metadata: {
				library: "reuse.library",
				properties: {
					/**
					 * The text to display.
					 */
					text: {
						type: "string",
						group: "Data",
						defaultValue: null
					},
					/**
					 * The color to use (default to "Default" color).
					 */
					color: {
						type: "reuse.library.ExampleColor",
						group: "Appearance",
						defaultValue: ExampleColor.Default
					}
				},
				events: {
					/**
					 * Event is fired when the user clicks the control.
					 */
					press: {}
				}
			},
			renderer: ExampleRenderer,
			onclick: function () {
				this.firePress();
			}
		}
	);
	return Example;
});
