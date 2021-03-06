var angular = angular || {};
var OpenLayers = OpenLayers || {};
var console = console || {};
var $ = $ || {};
/**
 *  An object that represents a longitude and latitude position on the map in within the map instance projection.
 *  @typedef {Object} LonLat
 *  @property {Number} lat - Latitude value as a decimal
 *  @property {Number} lon - Longitude value as a decimal
 *
 *  Point geometry
 *  @typedef {Object} Point
 *  @property {Number} x - Value representing an X component of a point
 *  @property {Number} y - Value representing a Y component of a point
 *
 *  Layer
 *  @typedef {Object} Layer
 *  @property {string} id - A unique identifier
 *  @property {string} name - A display friendly name for the layer
 *  @property {string} type - A string indicating the type of layer, eg WMS
 *  @property {Boolean} visibility - A bool indicating if a layer is currently visible for not.
 *
 *  Distance
 *  @typedef {Object} Distance
 *  @property {Number} meansure - The number of units of distance
 *  @property {string} units - The unit type of the distance number, eg 'km'
 * */
var app = angular.module('geowebtoolkit.mapservices',
	[
		'geowebtoolkit.mapservices.layer.openlayersv2',
        'geowebtoolkit.mapservices.map.openlayersv2',
        'geowebtoolkit.mapservices.layer.openlayersv3',
        'geowebtoolkit.mapservices.map.openlayersv3',
        'geowebtoolkit.mapservices.data.openlayersv2',
        'geowebtoolkit.mapservices.data.openlayersv3'
	]);
//id: olv2Layer.id,
//	name: olv2Layer.name,
//	type: this.getLayerType(olv2Layer),
//	visibility: olv2Layer.visibility,
//	opacity: olv2Layer.opacity

app.factory('GeoLayer', ['GeoUtils', function (GeoUtils) {
    "use strict";
    var GeoLayer = function (id, name, type, visibility, opacity, url) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.visibility = visibility;
        this.opacity = opacity;
        this.url = url;
    };

    GeoLayer.fromOpenLayersV2Layer = function (layer) {
        // OpenLayers v2 does not store layer type for ArcGISCache layers
        var useLayerType = layer.id.indexOf("_ArcGISCache_") === -1;
        var layerType;

        if (useLayerType) {
            layerType = layer.geoLayerType;
        } else {
            layerType = "ArcGISCache";
        }

        var opacity;
        if (typeof layer.opacity === 'string') {
            opacity = Number(layer.opacity);
        } else {
            opacity = layer.opacity;
        }

        var url = layer.url || null;

        return new GeoLayer(layer.id, layer.name, layerType, layer.visibility, opacity,url);
    };

    GeoLayer.fromOpenLayersV3Layer = function (layer) {
        var layerType = layer.geoLayerType || layer.get('geoLayerType');
        var opacity;
        if (typeof layer.get('opacity') === 'string') {
            opacity = Number(layer.get('opacity'));
        } else {
            opacity = layer.get('opacity');
        }

        if (!layer.get('id')) {
            layer.set('id', GeoUtils.generateUuid());
        }


        return new GeoLayer(layer.get('id'), layer.get('name'), layerType, layer.get('visible'), opacity);
    };
    //define prototypical methods
    //GeoLayer.prototype.myFunction = function () //available on every instance.

    return GeoLayer;
}]);