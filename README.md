<h1>SGB-screen-short-form</h1>

<h3>Propósito</h3>

Esta pantalla es un formulario que sirve para emitir servicios, como por ejemplo, algún reclamo o solicitud a un departamento de alguna empresa. Al emitir el servicio, un popup mostrará un mensaje para notificar sobre el envió del formulario. Si se desea cambiar el nombre del algún campo o del botón, se deben cambiar los valores correspondientes a input_text, field_1, field_2, send y popup_msg en los archivos de idiomas en la carpeta i18n

<h3>Datos obligatorios</h3>

- **combobox_2**: Una lista de todos los tipos de servicios.  Esta lista corresponde a los tipos de servicios disponibles.  

<h3>Datos opcionales</h3>

- **form_msg**: Mensaje (header) en el formulario
- **combobox_1**: Una lista de todos los servicios. Esta lista corresponde a los servicios disponibles

<h3>Ejemplo JSON</h3>


    {

    "combobox_1": ["<item_1.1>", "<item.1.2>],

    "combobox_2": ["<item_2.1>", "<item.2.2>],

    "form_msg"  : "<mensaje>" 
    
    } 


<h3>Diseño</h3>

![Alt Text](https://s3.amazonaws.com/megazord-framework/balsamiq+mockups/sgb-screen-short-form.png)