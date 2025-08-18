// Espera a que el contenido de la página esté cargado
document.addEventListener('DOMContentLoaded', function() {

    // 1. Seleccionar el formulario y el div de estado
    const contactForm = document.getElementById('contact-form');
    const statusDiv = document.getElementById('status');

    // 2. Escuchar el evento 'submit' del formulario
    contactForm.addEventListener('submit', function(event) {
        
        // Prevenir el comportamiento por defecto del formulario (que es recargar la página)
        event.preventDefault();

        statusDiv.innerHTML = 'Enviando...';

        // 3. Recolectar los datos del formulario
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());

        // 4. La URL de tu API Gateway (¡reemplázala por la tuya!)
        const apiUrl = 'https://abcdef123.execute-api.us-east-1.amazonaws.com/prod/contact';

        // 5. Enviar los datos usando fetch
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Importante para que API Gateway entienda los datos
            },
            body: JSON.stringify(data) // Convertir el objeto de datos a un string JSON
        })
        .then(response => {
            // Chequear si la respuesta fue exitosa (código 2xx)
            if (response.ok) {
                return response.json(); // O response.text() si tu API no devuelve JSON
            }
            // Si hay un error en la respuesta del servidor
            throw new Error('Error en la respuesta del servidor.');
        })
        .then(result => {
            // La petición fue exitosa
            statusDiv.innerHTML = '¡Mensaje enviado con éxito!';
            contactForm.reset(); // Limpiar el formulario
            console.log('Éxito:', result);
        })
        .catch(error => {
            // Hubo un error en la petición (de red o del servidor)
            statusDiv.innerHTML = 'Hubo un error al enviar el mensaje. Inténtalo de nuevo.';
            console.error('Error:', error);
        });
    });
});
