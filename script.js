document.addEventListener("DOMContentLoaded", function () {
    // Artwork lightbox
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxClose = document.querySelector(".lightbox .close");

    if (lightbox && lightboxImg) {
        document.querySelectorAll(".art-card img").forEach(function (image) {
            image.addEventListener("click", function () {
                lightboxImg.src = image.src;
                lightboxImg.alt = image.alt;
                lightbox.style.display = "flex";
            });
        });

        if (lightboxClose) {
            lightboxClose.addEventListener("click", function () {
                lightbox.style.display = "none";
            });
        }

        lightbox.addEventListener("click", function (event) {
            if (event.target === lightbox) {
                lightbox.style.display = "none";
            }
        });
    }

    // Artwork details modal
    const detailsModal = document.getElementById("details-modal");
    const detailsImage = document.getElementById("details-image");
    const detailsTitle = document.getElementById("details-title");
    const detailsDescription = document.getElementById("details-description");
    const detailsPrice = document.getElementById("details-price");
    const detailsWhatsApp = document.getElementById("details-whatsapp");
    const detailsClose = document.querySelector(".details-close");

    if (detailsModal && detailsImage && detailsTitle && detailsDescription && detailsPrice && detailsWhatsApp) {
        document.querySelectorAll(".details-button").forEach(function (button) {
            button.addEventListener("click", function (event) {
                event.preventDefault();

                const card = button.closest(".art-card");
                if (!card) return;

                const title = card.querySelector("h3")?.textContent.trim() || "Artwork";
                const description = card.querySelector(".art-info > p:not(.art-category):not(.price)")?.textContent.trim() || "An artwork from The Natives Art collection.";
                const price = card.querySelector(".price")?.textContent.trim() || "Price available on inquiry";
                const image = card.querySelector("img")?.src || "";

                detailsImage.src = image;
                detailsImage.alt = title + " artwork";
                detailsTitle.textContent = title;
                detailsDescription.textContent = description;
                detailsPrice.textContent = price;

                const message = "Hello The Natives Art, I'm interested in the " + title + " artwork.";
                detailsWhatsApp.href = "https://wa.me/256787551195?text=" + encodeURIComponent(message);
                detailsModal.style.display = "flex";
            });
        });

        if (detailsClose) {
            detailsClose.addEventListener("click", function () {
                detailsModal.style.display = "none";
            });
        }

        detailsModal.addEventListener("click", function (event) {
            if (event.target === detailsModal) {
                detailsModal.style.display = "none";
            }
        });
    }

    // Mobile navigation
    const menuToggle = document.querySelector(".menu-toggle");
    const menuOverlay = document.querySelector(".menu-overlay");
    const navLinks = document.querySelector(".nav-links");
    const menuClose = document.querySelector(".menu-close");

    function closeMenu() {
        if (navLinks) navLinks.classList.remove("active");
        if (menuOverlay) menuOverlay.classList.remove("active");
    }

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
            if (menuOverlay) menuOverlay.classList.toggle("active");
        });

        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", closeMenu);
        });
    }

    if (menuClose) menuClose.addEventListener("click", closeMenu);
    if (menuOverlay) menuOverlay.addEventListener("click", closeMenu);
});

/* =========================================
   TNA — GALLERY FILTERS
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const filterButtons = document.querySelectorAll(".filter-btn");
    const artworkCards = document.querySelectorAll(".gallery .art-card");

    if (!filterButtons.length || !artworkCards.length) return;

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            const filter = button.dataset.filter;

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            artworkCards.forEach(card => {

                const category = card.dataset.category;

                if (filter === "all" || category === filter) {
                    card.style.display = "";
                    requestAnimationFrame(() => {
                        card.classList.remove("filter-hidden");
                    });
                } else {
                    card.classList.add("filter-hidden");

                    setTimeout(() => {
                        if (card.classList.contains("filter-hidden")) {
                            card.style.display = "none";
                        }
                    }, 250);
                }

            });

        });

    });

});
