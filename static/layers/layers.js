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
                            opacity: 0.559000,
                            
                            
                          });
              wms_layers.push([lyr_Ortofoto2023_0, 0]);
var lyr_2022_Lindholmencopy_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "2022_Lindholmen copy",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/2022_Lindholmencopy_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1328242.607301, 7905565.197368, 1329892.483031, 7906707.942477]
                            })
                        });
var lyr_2022_Lindholmen_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "2022_Lindholmen",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/2022_Lindholmen_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1328242.607301, 7905565.197368, 1329892.483031, 7906707.942477]
                            })
                        });
var lyr_2024_forslag_00copy_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "2024_forslag_00 copy",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/2024_forslag_00copy_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1328890.198059, 7905870.634636, 1329269.155243, 7906333.614131]
                            })
                        });
var lyr_2024_forslag_00_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "2024_forslag_00",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/2024_forslag_00_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1328890.198059, 7905870.634636, 1329269.155243, 7906333.614131]
                            })
                        });
var lyr_240208_Presentation_Lindholmsplatsen_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "240208_Presentation_Lindholmsplatsen",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/240208_Presentation_Lindholmsplatsen_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1328652.836591, 7905845.301466, 1329438.898028, 7906402.597704]
                            })
                        });
var format_Punkter_00_6 = new ol.format.GeoJSON();
var features_Punkter_00_6 = format_Punkter_00_6.readFeatures(json_Punkter_00_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punkter_00_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punkter_00_6.addFeatures(features_Punkter_00_6);
var lyr_Punkter_00_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Punkter_00_6, 
                style: style_Punkter_00_6,
                popuplayertitle: "Punkter_00",
                interactive: true,
                title: '<img src="styles/legend/Punkter_00_6.png" /> Punkter_00'
            });
var format_Byggnaderbyggnader_bef_01_7 = new ol.format.GeoJSON();
var features_Byggnaderbyggnader_bef_01_7 = format_Byggnaderbyggnader_bef_01_7.readFeatures(json_Byggnaderbyggnader_bef_01_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Byggnaderbyggnader_bef_01_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Byggnaderbyggnader_bef_01_7.addFeatures(features_Byggnaderbyggnader_bef_01_7);
var lyr_Byggnaderbyggnader_bef_01_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Byggnaderbyggnader_bef_01_7, 
                style: style_Byggnaderbyggnader_bef_01_7,
                popuplayertitle: "Byggnader — byggnader_bef_01",
                interactive: true,
                title: '<img src="styles/legend/Byggnaderbyggnader_bef_01_7.png" /> Byggnader — byggnader_bef_01'
            });
var group_Lindholmsplatsenfrslag00 = new ol.layer.Group({
                                layers: [lyr_2024_forslag_00copy_3,lyr_2024_forslag_00_4,],
                                title: "Lindholmsplatsen förslag 00"});
var group_2022hjdmodell = new ol.layer.Group({
                                layers: [lyr_2022_Lindholmencopy_1,lyr_2022_Lindholmen_2,],
                                title: "2022 höjdmodell"});
var group_Ortofoto2023 = new ol.layer.Group({
                                layers: [lyr_Ortofoto2023_0,],
                                title: "Ortofoto 2023"});

lyr_Ortofoto2023_0.setVisible(true);lyr_2022_Lindholmencopy_1.setVisible(true);lyr_2022_Lindholmen_2.setVisible(true);lyr_2024_forslag_00copy_3.setVisible(true);lyr_2024_forslag_00_4.setVisible(true);lyr_240208_Presentation_Lindholmsplatsen_5.setVisible(true);lyr_Punkter_00_6.setVisible(false);lyr_Byggnaderbyggnader_bef_01_7.setVisible(true);
var layersList = [group_Ortofoto2023,group_2022hjdmodell,group_Lindholmsplatsenfrslag00,lyr_240208_Presentation_Lindholmsplatsen_5,lyr_Punkter_00_6,lyr_Byggnaderbyggnader_bef_01_7];
lyr_Punkter_00_6.set('fieldAliases', {'Bed Elevat': 'Bed Elevat', });
lyr_Byggnaderbyggnader_bef_01_7.set('fieldAliases', {'fid': 'fid', 'idnr': 'idnr', 'typ': 'typ', 'typ_text': 'typ_text', 'verksamhet': 'verksamhet', 'byggnadsna': 'byggnadsna', 'area_m2': 'area_m2', });
lyr_Punkter_00_6.set('fieldImages', {'Bed Elevat': 'TextEdit', });
lyr_Byggnaderbyggnader_bef_01_7.set('fieldImages', {'fid': 'TextEdit', 'idnr': 'TextEdit', 'typ': 'TextEdit', 'typ_text': 'TextEdit', 'verksamhet': 'TextEdit', 'byggnadsna': 'TextEdit', 'area_m2': 'TextEdit', });
lyr_Punkter_00_6.set('fieldLabels', {'Bed Elevat': 'no label', });
lyr_Byggnaderbyggnader_bef_01_7.set('fieldLabels', {'fid': 'no label', 'idnr': 'no label', 'typ': 'no label', 'typ_text': 'no label', 'verksamhet': 'no label', 'byggnadsna': 'no label', 'area_m2': 'no label', });
lyr_Byggnaderbyggnader_bef_01_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});