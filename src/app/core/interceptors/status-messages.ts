export const status:any = {
    "0": {
        "title": "Error!", "description": "Error desconocido", "icon": "", "status": "danger"
    },
    "200": {
        "title": "Éxito", "description": "La operación ha tenido éxito", "icon": "checkmark-outline", "status": "success"
    },
    "201": {
        "title": "Creado", "description": "La operación se ha cumplido y resultó en la creación de un nuevo recurso", "icon": "checkmark-outline", "status": "success"
    },
    "202": {
        "title": "Existe un problema", "description": "La operación se ha aceptado para su procesamiento, pero el procesamiento no se ha completado.", "icon": "", "status": "warning"
    },
    "203": {
        "title": "Información no autoritativa", "description": "El servidor procesó con éxito la operación, pero está devolviendo información que puede ser de otra fuente.", "icon": "", "status": ""
    },
    "204": {
        "title": "Éxito", "description": "El servidor procesó correctamente la operación, pero no devuelve ningún contenido.", "icon": "", "status": ""
    },
    "205": {
        "title": "Reset Content", "description": "El request se ha procesado correctamente, pero no devuelve ningún contenido y se requiere que el requester recargue el contenido", "icon": "", "status": ""
    },
    "206": {
        "description": "El servidor entrega solo una parte del recurso debido a un encabezado de rango enviado por el cliente.", "icon": "", "status": "warning"
    },
    "400": {
        "title": "Operación incorrecta", "description": "La operación no se puede cumplir debido a una mala sintaxis.", "icon": "", "status": "danger"
    },
    "401": {
        "title": "No autorizado", "description": "La operación requiere autenticación de usuario.", "icon": "shield-off-outline", "status": "danger"
    },
    "403": {
        "title": "Prohibido", "description": "La operación solicitada no está permitida para el usuario.", "icon": "", "status": "danger"
    },
    "404": {
        "title": "Extraviado", "description": "No pudo encontrar la ruta.", "icon": "", "status": "basic"
    },
    "405": {
        "title": "Método no permitido", "description": "Se realizó una solicitud de un recurso utilizando un método de solicitud no admitido por ese recurso.", "icon": "", "status": "basic"
    },
    "406": {
        "title": "Inaceptable", "description": "Inaceptable", "icon": "", "status": ""
    },
    "409": {
      "title": "Error", "description": "La operación no pudo completarse debido a un conflicto con el estado actual del recurso.", "icon": "", "status": "warning"
    },
    "410": {
        "description": "El recurso solicitado ya no está disponible y no estará disponible nuevamente.", "icon": "", "status": ""
    },
    "411": {
        "meesage": "Longitud requerida", "icon": "", "status": ""
    },
    "412": {
        "title": "Condición previa Falló", "meesage": "Condición previa Falló", "icon": "", "status": ""
    },
    "413": {
        "meesage": "La solicitud es más grande de lo que el servidor está dispuesto o puede procesar.", "icon": "", "status": ""
    },
    "414": {
        "meesage": "El servidor se niega a atender la solicitud porque el URI de solicitud es más largo de lo que el servidor está dispuesto a interpretar", "icon": "", "status": ""
    },
    "415": {
        "title": "Tipo de medio no admitido", "meesage": "Tipo de medio no admitido", "icon": "", "status": ""
    },
    "422": {
        "meesage": "Entidad no procesable", "icon": "", "status": ""
    },
    "429": {
        "meesage": "Demasiadas solicitudes", "icon": "", "status": ""
    },
    "500": {
        "title": "Error en el servidor interno", "description": "Error de servidor interno", "icon": "", "status": "danger"
    },
    "501": {
        "title": "No se ha implementado", "description": "No se ha implementado", "icon": "", "status": "danger"
    },
    "502": {
        "description": "Mala puerta de enlace", "icon": "", "status": "danger"
    },
    "503": {
        "description": "Servicio no disponible", "icon": "", "status": "danger"
    },
    "504": {
        "description": "Timeout de Gateway"
    }
};
