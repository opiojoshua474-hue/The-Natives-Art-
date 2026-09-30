document.addEventListener("DOMContentLoaded", function () {

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeButton = document.querySelector(".lightbox .close");

    // Artwork images
    document.querySelectorAll(".art-card img").forEach(function (image) {
        image.addEventListener("click", function (event) {
            event.preventDefault();
            lightboxImg.src = image.src;
            lightbox.style.display = "flex";
        });
    });

    // View Details
    document.querySelectorAll(".details-button").forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();

            const card = button.parentElement;
            const title = card.querySelector("h3").innerText;
            const description = card.querySelector("p").innerText;
            const price = card.querySelector(".price").innerText;

            alert(
                "ARTWORK DETAILS\n\n" +
                title + "\n\n" +
                description + "\n\n" +
                price
            );
        });
    });

    // Close lightbox
    closeButton.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

});
