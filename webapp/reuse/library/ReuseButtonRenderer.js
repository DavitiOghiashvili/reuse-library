sap.ui.define(["sap/ui/core/Core"], function (Core) {
	"use strict";

	/**
	 * ReuseButton renderer.
	 * @namespace
	 */
	const ReuseButtonRenderer = {
		apiVersion: 2 // usage of DOM Patcher
	};

	/**
	 * Renders the HTML for the given control, using the provided
	 * {@link sap.ui.core.RenderManager}.
	 *
	 * @param {sap.ui.core.RenderManager} rm The reference to the <code>sap.ui.core.RenderManager</code>
	 * @param {sap.ui.core.Control} control The control instance to be rendered
	 */
	ReuseButtonRenderer.render = function (rm, control) {
		const i18n = Core.getLibraryResourceBundle("reuse.library");

		rm.openStart("button", control);
		rm.class("reuse-button__color")
		rm.openEnd();
		rm.text(i18n.getText("reuseBtn"));
		rm.close("div");
	};

	return ReuseButtonRenderer;
});
