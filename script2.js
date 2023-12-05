function changeImage() {
    var sportSelect = document.getElementById("sport-select");
    var personImage = document.getElementById("person-image");
    var rectangles = document.querySelectorAll(".rectangle");

    // Obtén el valor seleccionado del deporte
    var selectedSport = sportSelect.value;

    // Asigna la imagen correspondiente según el deporte seleccionado
    if (selectedSport === "futbol") {
        personImage.src = "ruta/de/la/imagen_futbol.jpg";
    } else if (selectedSport === "baloncesto") {
        personImage.src = "ruta/de/la/imagen_baloncesto.jpg";
    }
    // Agrega más casos según sea necesario

    // Ajusta la posición y tamaño de los rectángulos
    rectangles.forEach(rectangle => {
        rectangle.style.left = "10px"; // Ajusta la posición x del rectángulo
        rectangle.style.top = "10px";  // Ajusta la posición y del rectángulo
        rectangle.style.width = "50px"; // Ajusta el ancho del rectángulo
        rectangle.style.height = "50px"; // Ajusta la altura del rectángulo
        rectangle.onclick = function () {
            this.style.display = "none"; // Oculta el rectángulo al hacer clic
        };
    });
}

function checkName() {
    var personNameInput = document.getElementById("person-name");
    var resultParagraph = document.getElementById("result");
    var personImage = document.getElementById("person-image");

    // Obtén el nombre ingresado y compáralo con el nombre asociado a la imagen
    var enteredName = personNameInput.value;
    var expectedName = getExpectedName(personImage.src); // Debes implementar esta función

    if (enteredName === expectedName) {
        resultParagraph.innerText = "¡Coincide!";
        resultParagraph.style.color = "green";
    } else {
        resultParagraph.innerText = "No coincide. Intenta de nuevo.";
        resultParagraph.style.color = "red";
    }
}

function getExpectedName(imageSrc) {
    // Implementa lógica para obtener el nombre asociado a la imagen
    // Puedes utilizar un objeto, base de datos, o alguna otra estructura de datos
    // que asocie cada imagen con su respectivo nombre.
    // Por ejemplo:
    var namesMap = {
        "ruta/de/la/imagen_futbol.jpg": "NombreFutbolista",
        "ruta/de/la/imagen_baloncesto.jpg": "NombreJugadorBaloncesto"
    };

    return namesMap[imageSrc] || "NombreDesconocido";
}

// Carga la imagen inicial al cargar la página
window.onload = function () {
    changeImage();
};
