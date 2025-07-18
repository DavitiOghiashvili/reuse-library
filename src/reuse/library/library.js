/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library reuse.library.
 */
sap.ui.define([
	"sap/base/util/ObjectPath",
	"sap/ui/core/library"
], function (ObjectPath) {
	"use strict";

	// delegate further initialization of this library to the Core
	// Hint: sap.ui.getCore() must still be used to support preload with sync bootstrap!
	sap.ui.getCore().initLibrary({
		name: "reuse.library",
		version: "${version}",
		dependencies: [ // keep in sync with the ui5.yaml and .library files
			"sap.ui.core"
		],
		types: [
			"reuse.library.ExampleColor"
		],
		interfaces: [],
		controls: [
			"reuse.library.Example"
		],
		elements: [],
		noLibraryCSS: false // if no CSS is provided, you can disable the library.css load here
	});

	/**
	 * Some description about <code>reuse.library</code>
	 *
	 * @namespace
	 * @alias reuse.library
	 * @author 
	 * @version ${version}
	 * @public
	 */
	const thisLib = ObjectPath.get("reuse.library");

	/**
	 * Semantic Colors of the <code>reuse.library.Example</code>.
	 *
	 * @enum {string}
	 * @public
	 */
	thisLib.ExampleColor = {

		/**
		 * Default color (brand color)
		 * @public
		 */
		Default : "Default",

		/**
		 * Highlight color
		 * @public
		 */
		Highlight : "Highlight"

	};

	return thisLib;

});
