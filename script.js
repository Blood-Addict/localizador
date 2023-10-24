document.addEventListener("DOMContentLoaded", function () {
    // Obtener el elemento de la fecha
    const dateElement = document.getElementById("date");

    // Obtener el elemento de la ubicación
    const locationElement = document.getElementById("location");

    // Obtener la fecha actual
    const currentDate = new Date();
    dateElement.textContent = "Fecha: " + currentDate.toLocaleString();

    // Verificar si el navegador soporta geolocalización
    if ("geolocation" in navigator) {
        // Obtener la ubicación del usuario
        navigator.geolocation.getCurrentPosition(function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            locationElement.textContent = `Ubicación: Latitud ${latitude}, Longitud ${longitude}`;
        }, function (error) {
            locationElement.textContent = "Ubicación: No se pudo obtener la ubicación del usuario.";
        });
    } else {
        locationElement.textContent = "Ubicación: Geolocalización no está disponible en este navegador.";
    }
});