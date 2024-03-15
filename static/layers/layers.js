var wms_layers = [];

var lyr_Ortofoto2023_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geodata.sbk.goteborg.se/services/ortofoto-ar-v2/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "orto_2023",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortofoto 2023",
                            opacity: 0.9900000,
                            
                            
                          });
              wms_layers.push([lyr_Ortofoto2023_0, 0]);
var format_River_Branch_1 = new ol.format.GeoJSON();
var features_River_Branch_1 = format_River_Branch_1.readFeatures(json_River_Branch_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_River_Branch_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_River_Branch_1.addFeatures(features_River_Branch_1);
var lyr_River_Branch_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_River_Branch_1, 
                style: style_River_Branch_1,
                popuplayertitle: "River_Branch",
                interactive: true,
    title: 'River_Branch<br />\
    <img src="styles/legend/River_Branch_1_0.png" /> Askeby_main<br />\
    <img src="styles/legend/River_Branch_1_1.png" /> Askeby_side1<br />\
    <img src="styles/legend/River_Branch_1_2.png" /> Askeby_side2<br />\
    <img src="styles/legend/River_Branch_1_3.png" /> Holmbacken<br />\
    <img src="styles/legend/River_Branch_1_4.png" /> Holmbacken_branch1<br />\
    <img src="styles/legend/River_Branch_1_5.png" /> Holmbacken_branch2<br />\
    <img src="styles/legend/River_Branch_1_6.png" /> Holmbacken_branch3<br />\
    <img src="styles/legend/River_Branch_1_7.png" /> Holmbacken_side<br />\
    <img src="styles/legend/River_Branch_1_8.png" /> Holmbacken_syd<br />\
    <img src="styles/legend/River_Branch_1_9.png" /> Kallheds<br />\
    <img src="styles/legend/River_Branch_1_10.png" /> Nolvik_main<br />\
    <img src="styles/legend/River_Branch_1_11.png" /> Nolvik_side<br />\
    <img src="styles/legend/River_Branch_1_12.png" /> Osbacken_HM<br />\
    <img src="styles/legend/River_Branch_1_13.png" /> Osbacken_side<br />\
    <img src="styles/legend/River_Branch_1_14.png" /> <br />'
        });
var format_Kulvertcopy_2 = new ol.format.GeoJSON();
var features_Kulvertcopy_2 = format_Kulvertcopy_2.readFeatures(json_Kulvertcopy_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kulvertcopy_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kulvertcopy_2.addFeatures(features_Kulvertcopy_2);
var lyr_Kulvertcopy_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kulvertcopy_2, 
                style: style_Kulvertcopy_2,
                popuplayertitle: "Kulvert copy",
                interactive: true,
                title: '<img src="styles/legend/Kulvertcopy_2.png" /> Kulvert copy'
            });
var format_Crosssections_3 = new ol.format.GeoJSON();
var features_Crosssections_3 = format_Crosssections_3.readFeatures(json_Crosssections_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Crosssections_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Crosssections_3.addFeatures(features_Crosssections_3);
var lyr_Crosssections_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Crosssections_3, 
                style: style_Crosssections_3,
                popuplayertitle: "Cross sections",
                interactive: false,
                title: '<img src="styles/legend/Crosssections_3.png" /> Cross sections'
            });

lyr_Ortofoto2023_0.setVisible(true);lyr_River_Branch_1.setVisible(true);lyr_Kulvertcopy_2.setVisible(true);lyr_Crosssections_3.setVisible(false);
var layersList = [lyr_Ortofoto2023_0,lyr_River_Branch_1,lyr_Kulvertcopy_2,lyr_Crosssections_3];
lyr_River_Branch_1.set('fieldAliases', {'rowid': 'rowid', 'muid': 'muid', 'altid': 'altid', 'active': 'active', 'typeno': 'typeno', 'maxdx': 'maxdx', 'topography': 'topography', 'flowdirect': 'flowdirect', 'startchain': 'startchain', 'endchainag': 'endchainag', 'datasource': 'datasource', 'assetname': 'assetname', 'element_s': 'element_s', 'nettypeno': 'nettypeno', 'descriptio': 'descriptio', 'enabled': 'enabled', 'speclocalw': 'speclocalw', 'waveapprox': 'waveapprox', });
lyr_Kulvertcopy_2.set('fieldAliases', {'rowid': 'rowid', 'muid': 'muid', 'altid': 'altid', 'active': 'active', 'linkid': 'linkid', 'chainage': 'chainage', 'geomtype': 'geomtype', 'geomwidth': 'geomwidth', 'geomheight': 'geomheight', 'geomdiamet': 'geomdiamet', 'manningn': 'manningn', 'Probem_1': 'Probem_1', });
lyr_Crosssections_3.set('fieldAliases', {'CS_ID': 'CS_ID', 'CS_BrName': 'CS_BrName', 'CS_TopoID': 'CS_TopoID', 'CS_Ch': 'CS_Ch', 'CS_Type': 'CS_Type', 'CS_Radius': 'CS_Radius', 'CS_Datum': 'CS_Datum', 'CS_ResDis': 'CS_ResDis', 'CS_Uniform': 'CS_Uniform', 'CS_LeftHi': 'CS_LeftHi', 'CS_Low': 'CS_Low', 'CS_RightHi': 'CS_RightHi', 'CS_ResType': 'CS_ResType', });
lyr_River_Branch_1.set('fieldImages', {'rowid': 'TextEdit', 'muid': 'TextEdit', 'altid': 'Range', 'active': 'Range', 'typeno': 'Range', 'maxdx': 'TextEdit', 'topography': 'TextEdit', 'flowdirect': 'TextEdit', 'startchain': 'TextEdit', 'endchainag': 'TextEdit', 'datasource': 'TextEdit', 'assetname': 'TextEdit', 'element_s': 'Range', 'nettypeno': 'Range', 'descriptio': 'TextEdit', 'enabled': 'TextEdit', 'speclocalw': 'TextEdit', 'waveapprox': 'TextEdit', });
lyr_Kulvertcopy_2.set('fieldImages', {'rowid': 'TextEdit', 'muid': 'TextEdit', 'altid': 'TextEdit', 'active': 'TextEdit', 'linkid': 'TextEdit', 'chainage': 'TextEdit', 'geomtype': 'TextEdit', 'geomwidth': 'TextEdit', 'geomheight': 'TextEdit', 'geomdiamet': 'TextEdit', 'manningn': 'TextEdit', 'Probem_1': 'TextEdit', });
lyr_Crosssections_3.set('fieldImages', {'CS_ID': 'TextEdit', 'CS_BrName': 'TextEdit', 'CS_TopoID': 'TextEdit', 'CS_Ch': 'TextEdit', 'CS_Type': 'TextEdit', 'CS_Radius': 'TextEdit', 'CS_Datum': 'TextEdit', 'CS_ResDis': 'TextEdit', 'CS_Uniform': 'TextEdit', 'CS_LeftHi': 'TextEdit', 'CS_Low': 'TextEdit', 'CS_RightHi': 'TextEdit', 'CS_ResType': 'TextEdit', });
lyr_River_Branch_1.set('fieldLabels', {'rowid': 'hidden field', 'muid': 'inline label - always visible', 'altid': 'hidden field', 'active': 'hidden field', 'typeno': 'hidden field', 'maxdx': 'hidden field', 'topography': 'hidden field', 'flowdirect': 'hidden field', 'startchain': 'hidden field', 'endchainag': 'hidden field', 'datasource': 'hidden field', 'assetname': 'hidden field', 'element_s': 'hidden field', 'nettypeno': 'hidden field', 'descriptio': 'hidden field', 'enabled': 'hidden field', 'speclocalw': 'hidden field', 'waveapprox': 'hidden field', });
lyr_Kulvertcopy_2.set('fieldLabels', {'rowid': 'hidden field', 'muid': 'inline label - always visible', 'altid': 'hidden field', 'active': 'hidden field', 'linkid': 'hidden field', 'chainage': 'inline label - always visible', 'geomtype': 'hidden field', 'geomwidth': 'hidden field', 'geomheight': 'hidden field', 'geomdiamet': 'inline label - always visible', 'manningn': 'hidden field', 'Probem_1': 'hidden field', });
lyr_Crosssections_3.set('fieldLabels', {'CS_ID': 'inline label - always visible', 'CS_BrName': 'inline label - always visible', 'CS_TopoID': 'hidden field', 'CS_Ch': 'inline label - always visible', 'CS_Type': 'hidden field', 'CS_Radius': 'hidden field', 'CS_Datum': 'hidden field', 'CS_ResDis': 'hidden field', 'CS_Uniform': 'hidden field', 'CS_LeftHi': 'hidden field', 'CS_Low': 'hidden field', 'CS_RightHi': 'hidden field', 'CS_ResType': 'hidden field', });
lyr_Crosssections_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});