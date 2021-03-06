/*!
 * ${copyright}
 */

// reflects changes from code editor the card in the example page
(function() {
	"use strict";

	/**
	 * Listen for message with the src of the live-edited sample to be applied
	 */
	window.addEventListener("message", function(oEvent) {
		// We must verify that the origin of the message's sender matches our
		// expectations. In this case, we're only planning on accepting messages
		// from our own origin, so we can simply compare the message event's
		// origin to the location of this document. If we get a message from an
		// unexpected host, ignore the message entirely.

		if (oEvent.origin !== (window.location.protocol + "//" + window.location.host)) {
			return;
		}

		var oData = oEvent.data;

		if (!oData || !oData.manifest) {
			return;
		}

		// find card and set manifest
		var oCard = self.document.getElementById("cardCustomElement");
		oCard._getControl().setManifest(JSON.parse(oData.manifest));
	});
})();