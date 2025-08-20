// Espera a que todo el contenido de la página se cargue antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('contact-form');
    const statusMessage = document.getElementById('status');

    // Escucha el evento 'submit' del formulario
    form.addEventListener('submit', async (event) => {
        // Previene el comportamiento por defecto del formulario (que es recargar la página)
        event.preventDefault();

        // Muestra un mensaje de "Enviando..."
        statusMessage.textContent = 'Enviando...';
        statusMessage.className = '';

        const Usuario = document.getElementById('name').value;
        const Email = document.getElementById('email').value;
        // 1. Obtén los datos del formulario
        const formData = {
            destinatario: 'el_berty@hotmail.com',
            asunto: 'Consulta Fryzar: ${Email} de ${Usuario}',
            mensaje: document.getElementById('message').value
        };
        
        // 2. Define la URL de tu API Gateway
        // ¡¡IMPORTANTE!! Reemplaza esto con tu URL real
        const apiUrl = 'https://2fl1bfse59.execute-api.us-east-2.amazonaws.com/DEV/enviar-email';

        // 3. Usa 'fetch' para enviar los datos
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    // Le decimos a la API que estamos enviando datos en formato JSON
                    'Content-Type': 'application/json'
                },
                // Convertimos el objeto de JavaScript a una cadena de texto JSON
                body: JSON.stringify(formData)
            });
            
            // Si la respuesta del servidor no es exitosa (ej. error 500, 400)
            if (!response.ok) {
                const errorData = await response.json();
                // Lanza un error para que sea capturado por el bloque 'catch'
                throw new Error(errorData.message || 'Ocurrió un error en el servidor.');
            }

            // Si todo fue bien, muestra el mensaje de éxito
            const result = await response.json();
            console.log('Éxito:', result);
            statusMessage.textContent = '¡Correo enviado exitosamente!';
            statusMessage.className = 'success';
            form.reset(); // Limpia el formulario

        } catch (error) {
            // Si hubo un error en la solicitud 'fetch' o en la respuesta
            console.error('Error:', error);
            statusMessage.textContent = `Error al enviar el correo: ${error.message}`;
            statusMessage.className = 'error';
        }
    });
});
// // Espera a que el contenido de la página esté cargado
// document.addEventListener('DOMContentLoaded', function() {

//     // 1. Seleccionar el formulario y el div de estado
//     const contactForm = document.getElementById('contact-form');
//     const statusDiv = document.getElementById('status');

//     // 2. Escuchar el evento 'submit' del formulario
//     contactForm.addEventListener('submit', function(event) {
        
//         // Prevenir el comportamiento por defecto del formulario (que es recargar la página)
//         event.preventDefault();

//         statusDiv.innerHTML = 'Enviando...';

//         // 3. Recolectar los datos del formulario
//         const formData = new FormData(contactForm);
//         const data = Object.fromEntries(formData.entries());

//         // 4. La URL de tu API Gateway (¡reemplázala por la tuya!)
//         const apiUrl = 'https://2fl1bfse59.execute-api.us-east-2.amazonaws.com/DEV/enviar-email';

//         // 5. Enviar los datos usando fetch
//         fetch(apiUrl, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json' // Importante para que API Gateway entienda los datos
//             },
//             body: JSON.stringify(data) // Convertir el objeto de datos a un string JSON
//         })
//         .then(response => {
//             // Chequear si la respuesta fue exitosa (código 2xx)
//             if (response.ok) {
//                 return response.json(); // O response.text() si tu API no devuelve JSON
//             }
//             // Si hay un error en la respuesta del servidor
//             throw new Error('Error en la respuesta del servidor.');
//         })
//         .then(result => {
//             // La petición fue exitosa
//             statusDiv.innerHTML = '¡Mensaje enviado con éxito!';
//             contactForm.reset(); // Limpiar el formulario
//             console.log('Éxito:', result);
//         })
//         .catch(error => {
//             // Hubo un error en la petición (de red o del servidor)
//             statusDiv.innerHTML = 'Hubo un error al enviar el mensaje. Inténtalo de nuevo.';
//             console.error('Error:', error);
//         });
//     });
// });
