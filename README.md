# El_Quimbo - Machine learning
Metodología para estimar la biomasa de la zona de restauración no asistida en el proyecto hidroeléctrico El Quimbo mediante machine learning.

1. Se descargan las imágenes sentinel 2 corregidas. (Script GEE_Sentinel_2)
2. Se hcae un procesamiento de las parcelas para calcular la biomasa y crear una capa shapefile para espacializarlas.
3. Se calculan los índices de vegetación y se definen las variables predictoras del modelo junto con las parcelas.
4. Se crea diferentes modelos (Random Forest, XGboost, Neural Networks) y se hacen las predicciones.
