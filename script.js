document.addEventListener("DOMContentLoaded", function () {
    actualizarImagen();
});

function actualizarImagen() {
    var disciplinaSeleccionada = document.getElementById("disciplina").value;
    var imagen = document.getElementById("imagen");

    // Lógica para obtener la imagen según la disciplina seleccionada
    // Puedes agregar más lógica y disciplinas según tus necesidades

    switch (disciplinaSeleccionada) {
        case "artista musical":
            imagen.src = "https://www.colormusic.cl/wp-content/uploads/2023/01/Jonathan-Davis-Korn.jpeg";
            break;
        case "artista marcial":
            imagen.src = "url_de_la_imagen_musica.jpg";
            break;
        case "jugador de futbol":
            imagen.src = "";
        case "juego":
            imagen.src = "";
        // Agrega más casos según sea necesario
        default:
            break;
    }
}

function verificarAdivinanza() {
    var respuestaUsuario = document.getElementById("adivinanza").value;

    // Lógica para verificar la respuesta del usuario
    // Puedes comparar la respuesta con la correcta y mostrar un mensaje

    // Ejemplo de mensaje simple
    if (respuestaUsuario.toLowerCase() === "nombre_correcto") {
        alert("¡Respuesta correcta!");
        // Puedes agregar más acciones aquí
    } else {
        alert("Respuesta incorrecta. Intenta de nuevo.");
    }

    // Actualizar la imagen para la siguiente adivinanza
    actualizarImagen();
}
