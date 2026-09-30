document.addEventListener("DOMContentLoaded", function () {

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeButton = document.querySelector(".lightbox .close");

    document.querySelectorAll(".art-card img").forEach(function (image) {
        image.addEventListener("click", function (event) {
            event.preventDefault();
            lightboxImg.src = image.src;
            lightboxImg.alt = image.alt;
            lightbox.style.display = "flex";
        });
    });

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

            alert(title + "\n\n" + description + "\n\nPrice: " + price);
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

});
