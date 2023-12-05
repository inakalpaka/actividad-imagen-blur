function changeImage() {
    var sportSelect = document.getElementById("sport-select");
    var personImage = document.getElementById("person-image");

    // Obtén el valor seleccionado del deporte
    var selectedSport = sportSelect.value;

    // Asigna la imagen correspondiente según el deporte seleccionado
    if (selectedSport === "futbol") {
        personImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKhvcBcETxVmlUUHbpdWsTWbvM2pqHj54Rlw&usqp=CAU";
    } else if (selectedSport === "baloncesto") {
        personImage.src = "https://cdn.charitystars.com/cache/resizedcrop-196fe23c8916c44c1c9061b27a6f6104-840x630.jpg";
    }
    // Agrega más casos según sea necesario
}

function checkName() {
    var personNameInput = document.getElementById("person-name");
    var personImage = document.getElementById("person-image");

    // Obtén el nombre ingresado y compáralo con el nombre asociado a la imagen
    var enteredName = personNameInput.value;
    var expectedName = getExpectedName(personImage.src); // Debes implementar esta función

    if (enteredName === expectedName) {
        Swal.fire({
            title: "bien hecho",
            text: "tu puntage es de:",
            icon: "success"
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "te equibocaste",
            text: "el jugador que elegiste es incorrecto",
        });
    }
}

function getExpectedName(imageSrc) {
    // Implementa lógica para obtener el nombre asociado a la imagen
    // Puedes utilizar un objeto, base de datos, o alguna otra estructura de datos
    // que asocie cada imagen con su respectivo nombre.
    // Por ejemplo:
    var namesMap = {
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKhvcBcETxVmlUUHbpdWsTWbvM2pqHj54Rlw&usqp=CAU": "messi",
        "https://cdn.charitystars.com/cache/resizedcrop-196fe23c8916c44c1c9061b27a6f6104-840x630.jpg": "shaq"
    };

    return namesMap[imageSrc] || "NombreDesconocido";
}

// Carga la imagen inicial al cargar la página
window.onload = function () {
    changeImage();
};
