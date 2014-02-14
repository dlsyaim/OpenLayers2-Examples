/**
 * OpenLayers DeleteFeature Controls
 */
OpenLayers.Control.DeleteFeature = OpenLayers.Class(OpenLayers.Control, {
	
	layer: null,
	
	initialize: function( layer, options ) {
		OpenLayers.Control.prototype.initialize.apply(this, [options]);
		this.layer = layer;
		this.handler = new OpenLayers.Handler.Feature(
			this, this.layer, { click: this.clickFeature }
		);
	},
	
	clickFeature: function(feature) {
		if (feature.fid == undefined) {
			this.layer.destroyFeatures([feature]);
		} else {
			feature.state = OpenLayers.State.DELETE;
			this.layer.events.triggerEvent("afterfeaturemodified", {feature: feature});
			feature.renderIntent = "select";
			this.layer.drawFeature(feature);
		}
	},
	
	CLASS_NAME: "OpenLayers.Control.DeleteFeature"
});
