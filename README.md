# El_Quimbo - Machine learning
Metodología para estimar la biomasa de la zona de restauración no asistida en el proyecto hidroeléctrico El Quimbo mediante machine learning.

1. Se descargan las imágenes sentinel 2 corregidas. (Script " GEE_Sentinel_2.js ", corre en Google Earth Engine)
2. Se hace un procesamiento de las parcelas para calcular la biomasa (Carpeta "Parcelas Preprocesamiento").
    - Al final del script se crea un archivo llamado "Parcela_AGB" este archivo contiene la biomasa y coordenadas para espacializarlas en QGIS
4. Se calculan los índices de vegetación y se definen las variables predictoras del modelo junto con las parcelas.
5. Se crea diferentes modelos (Random Forest, XGboost, Neural Networks) y se hacen las predicciones.
