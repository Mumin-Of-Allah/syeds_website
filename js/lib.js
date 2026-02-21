document.addEventListener("DOMContentLoaded", function () {

    // Load Header & Footer
    function loadComponent(id, file) {
        fetch(file)
            .then(response => response.text())
            .then(data => {
                document.getElementById(id).innerHTML = data;
            })
            .catch(error => console.error("Error loading:", error));
    }

    loadComponent("header", "header.html");
    loadComponent("footer", "footer.html");

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Header scroll effect (SAFE VERSION)
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        if (!header) return; // prevent error

        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });

});
setTimeout(() => {
    const menuBtn = document.querySelector(".menu-toggle");
    if (menuBtn) {
      menuBtn.addEventListener("click", () => {
        document.querySelector(".nav-links").classList.toggle("active");
      });
    }
  }, 500);