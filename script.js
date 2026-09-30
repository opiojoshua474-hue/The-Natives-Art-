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


// Artwork details buttons
document.querySelectorAll(".details-button").forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.preventDefault();

        const card = button.closest(".art-card");
        const title = card.querySelector("h3").textContent;
        const description = card.querySelector("p:not(.price)").textContent;
        const price = card.querySelector(".price").textContent;
        const image = card.querySelector("img").src;

        lightboxImg.src = image;
        lightboxImg.alt = title + " artwork";
        lightbox.style.display = "flex";

        alert(
            title + "\n\n" +
            description + "\n\n" +
            "Price: " + price
        );
    });
});
