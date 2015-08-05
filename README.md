SGB-screen-short-form


Propósito

Esta pantalla es un formulario que sirve para emitir servicios, como por ejemplo, algún reclamo o solicitud a un departamento de alguna empresa. Al emitir el servicio, un popup mostrará un mensaje para notificar sobre el envió del formulario. Si se desea cambiar el nombre del algún campo o del botón, se deben cambiar los valores correspondientes a input_text, field_1, field_2, send y popup_msg en los archivos de idiomas en la carpeta i18n

Datos obligatorios

item combobox_2: Una lista de todos los tipos de servicios.  Esta lista corresponde a los tipos de servicios disponibles.  
Si no se reciben datos se utilizaŕa una plantilla por defecto con un solo combobox.


Datos opcionales

form_msg: Mensaje (header) en el formulario
combobox_1: Una lista de todos los servicios. Esta lista corresponde a los servicios disponibles

Ejemplo JSON

{ 
    "combobox_1": ["<item_1.1>", "<item.1.2>], 
    "combobox_2": ["<item_2.1>", "<item.2.2>], 
    "form_msg"  : "<mensaje>" 
} 


Diseño

.. image:: https://s3.amazonaws.com/megazord-framework/balsamiq+mockups/sgb-screen-short-form.png
   :height: 100px
   :width: 200 px
   :scale: 50 %