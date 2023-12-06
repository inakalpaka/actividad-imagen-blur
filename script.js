const container = document.getElementById('imagen-container');
const rectanglesContainer = document.getElementById('rectangles-container');
const widthSlider = document.getElementById('width-slider');
const heightSlider = document.getElementById('height-slider');
const puntosContainer = document.getElementById('puntos-container');
const puntosSpan = document.getElementById('puntos');

let puntos = 0; // Nuevo contador de puntos

widthSlider.addEventListener('input', updateRectangles);
heightSlider.addEventListener('input', updateRectangles);

document.addEventListener("DOMContentLoaded", function () {
    var imagen = document.getElementById("imagen");
    imagen.onload = function () {
        updateRectangles();
    };

    // Agrega un evento al cambio de la disciplina
    var disciplinaSelect = document.getElementById("disciplina");
    disciplinaSelect.addEventListener('change', function () {
        actualizarImagen();
        updateRectangles(); // Actualiza también los rectángulos al cambiar la disciplina
    });

    actualizarImagen();
});

function updateRectangles() {
    const numRectanglesWidth = widthSlider.value;
    const numRectanglesHeight = heightSlider.value;

    removeAllRectangles();

    const rectangleWidth = container.clientWidth / numRectanglesWidth;
    const rectangleHeight = container.clientHeight / numRectanglesHeight;

    const imagenContainerRect = container.getBoundingClientRect();

    for (let i = 0; i < numRectanglesWidth; i++) {
        for (let j = 0; j < numRectanglesHeight; j++) {
            const rectangle = document.createElement('div');
            rectangle.classList.add('rectangle');
            rectangle.style.width = rectangleWidth + 'px';
            rectangle.style.height = rectangleHeight + 'px';
            rectangle.style.left = (imagenContainerRect.left + i * rectangleWidth) + 'px';
            rectangle.style.top = (imagenContainerRect.top + j * rectangleHeight) + 'px';

            rectangle.addEventListener('click', () => {
                rectangle.style.display = 'none';

            });

            // Utiliza rectanglesContainer en lugar de container para la operación appendChild
            rectanglesContainer.appendChild(rectangle);
        }
    }
}


function removeAllRectangles() {
    const rectangles = document.querySelectorAll('.rectangle');
    rectangles.forEach(rectangle => rectangle.remove());
}

function sumarPuntos(cantidad) {
    puntos += cantidad;
    puntosSpan.textContent = puntos;
}

function actualizarImagen() {
    var disciplinaSeleccionada = document.getElementById("disciplina").value;
    var imagen = document.getElementById("imagen");

    // Limpia los rectángulos antes de cambiar la imagen
    removeAllRectangles();

    switch (disciplinaSeleccionada) {
        case "artista musical":
            imagen.src = "https://www.colormusic.cl/wp-content/uploads/2023/01/Jonathan-Davis-Korn.jpeg";
            break;
        case "artista marcial":
            imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStv5kwXFsaZzAtkaUSYWhoLuFovz3J1lNptw&usqp=CAU";
            break;
        case "jugador de futbol":
            imagen.src = "https://yt3.googleusercontent.com/q3dPUX_Y7jR1nvE9eHlGxkk9lMh9e4kGX0UBUkJ0vNXV_tz0AAFND0re2ln41hm6C1PUl-iolQ=s900-c-k-c0x00ffffff-no-rj";
            break;
        case "jugador de basquet":
            imagen.src = "https://phantom-marca-mx.unidadeditorial.es/abe60a5632e02e1f2de14b53c357e063/resize/828/f/jpg/mx/assets/multimedia/imagenes/2023/09/02/16936330376725.jpg";
            break;
        default:
            break;
    }
}

function verificarAdivinanza() {
    var respuestaUsuario = document.getElementById("adivinanza").value;
    var disciplinaSeleccionada = document.getElementById("disciplina").value;

    var respuestaCorrecta;

    switch (disciplinaSeleccionada) {
        case "artista musical":
            respuestaCorrecta = "Davis";
            break;
        case "artista marcial":
            respuestaCorrecta = "Khabib";
            break;
        case "jugador de futbol":
            respuestaCorrecta = "Messi";
            break;
        case "jugador de basquet":
            respuestaCorrecta = "Shaq";
            break;
        default:
            break;
    }

    if (respuestaUsuario.toLowerCase() === respuestaCorrecta.toLowerCase()) {
        Swal.fire({
            title: "Bien hecho!",
            text: "tu respuesta es correcta!",
            icon: "success"
        });
        sumarPuntos(100);
    } else {
        Swal.fire({
            icon: "error",
            title: "te equibocaste",
            text: "intentalo otra vez",
        });
    }

    actualizarImagen();
}
