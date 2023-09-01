/* 
  Eddy Santiago Barreto
  
  El Quimbo - Restauración no asistida.

*/

//ROI
var rectangle = ee.FeatureCollection("projects/ed-santiagobp/assets/ROI_Quimbo");

// Resampling 10 m
function resampling_images(band){
  band = band.resample('bicubic')
                    .reproject({
                      crs: band.projection(),
                      scale:10
                    });
  return band;
}

// Times 
var startDate = ee.Date('2015-06-23');
var endDate = ee.Date('2015-11-01');

//Sentinel_2 Level 1C - Collection
var Sentinel_2 = ee.ImageCollection("COPERNICUS/S2_HARMONIZED")
                  .filterDate(startDate, endDate)
                  .map(function(image){return image.clip(rectangle)});

//Image Sentinel_2 - Single Image . Inspector tool.
var image = ee.Image("COPERNICUS/S2_HARMONIZED/20151022T152922_20160412T135825_T18NVH");
var image_L1C = image.clip(rectangle);  

// - Import the SIAC atmospheric correction module
var siac = require('users/marcyinfeng/utils:SIAC');
var image_L2A = siac.get_sur(image); 
image_L2A = image_L2A.clip(rectangle);

//Elevation
var DEM = ee.Image('NASA/NASADEM_HGT/001').clip(rectangle);
var elevation = DEM.select('elevation');
var slope = ee.Terrain.slope(elevation);

// Create NDWI mask
var ndwi = image_L2A.normalizedDifference(['B3', 'B8']).rename('NDWI');
var ndwiThreshold = ndwi.gte(0.0);

//
Map.centerObject(rectangle);
Map.addLayer(image_L2A, {bands: ['B4', 'B3', 'B2'], min: 0, max: 0.2}, 'Imagen Sentinel-2_2A');
Map.addLayer(image_L1C, {bands: ['B4', 'B3', 'B2'], min: 0, max: 3000}, 'Imagen Sentinel-2_1C');
Map.addLayer(ndwi,{palette: ['red', 'yellow', 'green', 'cyan', 'blue']},'NDWI');
Map.addLayer(ndwiThreshold, {palette:['black', 'white']}, 'NDWI Binary Mask');

// EXPORT // // EXPORT // // EXPORT // // EXPORT // // EXPORT // // EXPORT // // EXPORT // // EXPORT // // EXPORT // 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Export water mask.
Export.image.toDrive({
  image: ndwiThreshold.visualize({min:0, max:1}),
  description: 'NDWI_binary_mask',
  folder: "Quimbo_Preprocesamiento_L2A",
  scale: 10,
  region: rectangle,
  maxPixels: 1e13,
  crs: 'EPSG:4326',
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Export drive - Slope.

slope = resampling_images(slope)

Export.image.toDrive({
  image: slope,
  description: "slope",
  folder: "Quimbo_Preprocesamiento_L2A",
  scale: 10,
  region: rectangle,
  maxPixels: 1e13,
  crs: "EPSG:4326"
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
// Export drive - B2.

Export.image.toDrive({
  image: image.select("B2"),
  description: "S2_B2",
  folder: "Quimbo_Preprocesamiento_L2A",
  scale: 10,
  region: rectangle,
  maxPixels: 1e13,
  crs: "EPSG:4326"
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
// Export drive - B3.

Export.image.toDrive({
  image: image.select("B3"),
  description: "S2_B3",
  folder: "Quimbo_Preprocesamiento_L2A",
  scale: 10,
  region: rectangle,
  maxPixels: 1e13,
  crs: "EPSG:4326"
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
// Export drive - B4.

Export.image.toDrive({
  image: image.select("B4"),
  description: "S2_B4",
  folder: "Quimbo_Preprocesamiento_L2A",
  scale: 10,
  region: rectangle,
  maxPixels: 1e13,
  crs: "EPSG:4326"
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
// Export drive - B5.

var B5_resampled = resampling_images(image.select("B5")) //

Export.image.toDrive({
  image: B5_resampled,
  description: "S2_B5",
  folder: "Quimbo_Preprocesamiento_L2A",
  scale: 10,
  region: rectangle,
  maxPixels: 1e13,
  crs: "EPSG:4326"
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
// Export drive - B6.

var B6_resampled = resampling_images(image.select("B6"))

Export.image.toDrive({
  image: B6_resampled,
  description: "S2_B6",
  folder: "Quimbo_Preprocesamiento_L2A",
  scale: 10,
  region: rectangle,
  maxPixels: 1e13,
  crs: "EPSG:4326"
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
// Export drive - B7.

var B7_resampled = resampling_images(image.select("B7"))

Export.image.toDrive({
  image: B7_resampled,
  description: "S2_B7",
  folder: "Quimbo_Preprocesamiento_L2A",
  scale: 10,
  region: rectangle,
  maxPixels: 1e13,
  crs: "EPSG:4326"
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
// Export drive - B8.

Export.image.toDrive({
  image: image.select("B8"),
  description: "S2_B8",
  folder: "Quimbo_Preprocesamiento_L2A",
  scale: 10,
  region: rectangle,
  maxPixels: 1e13,
  crs: "EPSG:4326"
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
// Export drive - B8A.

var B8A_resampled = resampling_images(image.select("B8A"))

Export.image.toDrive({
  image: B8A_resampled,
  description: "S2_B8A",
  folder: "Quimbo_Preprocesamiento_L2A",
  scale: 10,
  region: rectangle,
  maxPixels: 1e13,
  crs: "EPSG:4326"
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
// Export drive - B11.

var B11_resampled = resampling_images(image.select("B11"))

Export.image.toDrive({
  image: B11_resampled,
  description: "S2_B11",
  folder: "Quimbo_Preprocesamiento_L2A",
  scale: 10,
  region: rectangle,
  maxPixels: 1e13,
  crs: "EPSG:4326"
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
// Export drive - B12.

var B12_resampled = resampling_images(image.select("B12"))

Export.image.toDrive({
  image: B12_resampled,
  description: "S2_B12",
  folder: "Quimbo_Preprocesamiento_L2A",
  scale: 10,
  region: rectangle,
  maxPixels: 1e13,
  crs: "EPSG:4326"
});
