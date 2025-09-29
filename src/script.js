const botonConfirmar = document.getElementById('confirmarBtn');

  botonConfirmar.addEventListener('click', () => {
    // Personaliza tu mensaje aquí
    const nombreEvento = "Cumpleaños de Elina";
    const fechaEvento = "12/10/2025";
    const numeroTelefono = "59898972151"; // Reemplaza con el número de teléfono al que deseas enviar el mensaje
    const mensaje = `¡Hola! Confirmo mi asistencia al ${nombreEvento} el ${fechaEvento}.`;

    // Codifica el mensaje para la URL
    const mensajeCodificado = encodeURIComponent(mensaje);

    // Crea la URL para WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${mensajeCodificado}`;

    // Abre WhatsApp con la URL
    window.location.href = urlWhatsApp;
  });