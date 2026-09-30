cd /data/data/com.termux/files/home/Ojay/the-natives-art
nano script.js



// Artwork lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeButton = document.querySelector(".lightbox .close");

document.querySelectorAll(".art-card img").forEach(function (image) {
    image.addEventListener("click", function () {
        lightboxImg.src = image.src;
        lightbox.style.display = "flex";
    });
});

closeButton.addEventListener("click", function () {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }
});
