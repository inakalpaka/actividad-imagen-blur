document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("slider");
    const overlay = document.getElementById("overlay");

    slider.addEventListener("input", function () {
        const numRectangles = parseInt(slider.value);

        // Remove existing blue rectangles
        overlay.innerHTML = "";

        // Create new blue rectangles
        for (let i = 0; i < numRectangles; i++) {
            const blueRectangle = document.createElement("div");
            blueRectangle.classList.add("blueRectangle");
            // Calculate width and height dynamically based on the number of rectangles
            const width = 100 / numRectangles;
            blueRectangle.style.width = width + "%";
            blueRectangle.style.height = "100%";
            blueRectangle.style.left = (i * width) + "%";
            overlay.appendChild(blueRectangle);
        }
    });
});
