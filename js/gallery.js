document.addEventListener("DOMContentLoaded", function () {

    const images = document.querySelectorAll('.gallery-grid img');
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    const closeBtn = document.getElementById("closeBtn");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    const zoomInBtn = document.getElementById("zoomInBtn");
    const zoomOutBtn = document.getElementById("zoomOutBtn");

    let currentIndex = 0;
    let scale = 1;

    images.forEach(img => {
        img.addEventListener("click", function () {
            currentIndex = parseInt(this.getAttribute("data-index"));
            openLightbox();
        });
    });

    function openLightbox() {
        lightbox.style.display = "flex";
        lightboxImg.src = images[currentIndex].src;
        scale = 1;
        lightboxImg.style.transform = `scale(${scale})`;
    }

    function closeLightbox() {
        lightbox.style.display = "none";
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        openLightbox();
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        openLightbox();
    }

    closeBtn.addEventListener("click", closeLightbox);
    nextBtn.addEventListener("click", nextImage);
    prevBtn.addEventListener("click", prevImage);
    // close when clicking outside the image
lightbox.addEventListener("click", function(e) {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

});
