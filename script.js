document.addEventListener("DOMContentLoaded", function () {

    // Lightbox
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

    closeButton.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });


    // Artwork Details Modal
    const detailsModal = document.getElementById("details-modal");
    const detailsImage = document.getElementById("details-image");
    const detailsTitle = document.getElementById("details-title");
    const detailsDescription = document.getElementById("details-description");
    const detailsPrice = document.getElementById("details-price");
    const detailsWhatsApp = document.getElementById("details-whatsapp");
    const detailsClose = document.querySelector(".details-close");

    document.querySelectorAll(".details-button").forEach(function (button) {

        button.addEventListener("click", function (event) {
            event.preventDefault();

            const card = button.closest(".art-card");

            const title = card.querySelector("h3").textContent;
            const description = card.querySelector("p:not(.price)").textContent;
            const price = card.querySelector(".price").textContent;
            const image = card.querySelector("img").src;

            detailsImage.src = image;
            detailsImage.alt = title + " artwork";
            detailsTitle.textContent = title;
            detailsDescription.textContent = description;
            detailsPrice.textContent = price;

            const message =
                "Hello The Natives Art, I'm interested in the " +
                title + " artwork.";

            detailsWhatsApp.href =
                "https://wa.me/256787551195?text=" +
                encodeURIComponent(message);

            detailsModal.style.display = "flex";
        });

    });

    detailsClose.addEventListener("click", function () {
        detailsModal.style.display = "none";
    });

    detailsModal.addEventListener("click", function (event) {
        if (event.target === detailsModal) {
            detailsModal.style.display = "none";
        }
    });

});
