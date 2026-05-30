// Select Images
const images = document.querySelectorAll(".image-card img");

// Lightbox Elements
const lightbox = document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightbox-img");

const closeBtn =
document.querySelector(".close");

// Open Lightbox
images.forEach((image) => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImg.src = image.src;

    });

});

// Close Button
closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});

// Close Outside Click
lightbox.addEventListener("click", (e) => {

    if(e.target !== lightboxImg){

        lightbox.style.display = "none";

    }

});

// 3D Hover Tilt Effect
const cards =
document.querySelectorAll(".image-card");

cards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect =
        card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;

        const centerY = rect.height / 2;

        const rotateX =
        ((y - centerY) / 25);

        const rotateY =
        ((centerX - x) / 25);

        card.style.transform =
        `rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         scale(1.03)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "rotateX(0) rotateY(0) scale(1)";

    });

});