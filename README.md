# El_Quimbo - Machine learning
Metodología para estimar la biomasa de la zona de restauración no asistida en el proyecto hidroeléctrico El Quimbo mediante machine learning.

1. Se descargan las imágenes sentinel 2 corregidas. (Script " GEE_Sentinel_2.js ", corre en Google Earth Engine).

   
2. Se hace un procesamiento de las parcelas para calcular la biomasa (Carpeta "Parcelas Preprocesamiento").
    - Al final del script se crea un archivo llamado "Parcela_AGB" este archivo contiene la biomasa y coordenadas para espacializarlas en QGIS
     
3. Se calculan los índices de vegetación, se crean puntos aleatorios dentro del buffer que garantice pixeles diferentes para aprovechar la resolución de  10m, se definen las variables predictoras y se sube el archivo "Parcela_AGB" para espacializar y crear el Training_dataset. (Carpeta "Quimbo_Pack")+
      - El "Training_dataset" no está en Quimbo_Pack ya que fué movido a la carpeta "Model_Data", pero de aquí sale el training dataset, también la imagen "PREDICT".

   
5. Se crea diferentes modelos (Random Forest, XGboost, Neural Networks) y se hacen las predicciones (Carpeta "Model_Data").
   - Subir el archivo Training_dataset y predict al archivo de google colab - "Quimbo_1".
