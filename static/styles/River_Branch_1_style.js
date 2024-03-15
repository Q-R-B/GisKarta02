var size = 0;
var placement = 'point';
function categories_River_Branch_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Askeby_main':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(72,195,229,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Askeby_side1':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(1101,233,1102,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Askeby_side2':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(37,232,118,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Holmbacken':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(73,70,219,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Holmbacken_branch1':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(196,118,2110,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Holmbacken_branch2':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(117,33,2310,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Holmbacken_branch3':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(101,217,33,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Holmbacken_side':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(215,197,110,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Holmbacken_syd':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(2010,80,76,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kallheds':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(93,1108,236,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Nolvik_main':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(232,132,56,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Nolvik_side':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(180,207,89,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Osbacken_HM':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(222,122,159,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Osbacken_side':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(72,2310,2010,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(230,39,185,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_River_Branch_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("muid");
    var labelText = "";
    size = 0;
    var labelFont = "9.1px \'Arial\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("muid") !== null) {
        labelText = String(feature.get("muid"));
    }
    
var style = categories_River_Branch_1(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
