document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for nav links
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Toggle images
    document.querySelectorAll('.toggle-images').forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const imagesContainer = document.getElementById(this.dataset.images);
            showModal(imagesContainer.innerHTML);
        });
    });

    // Modal functionality
    var modal = document.getElementById("modal");
    var modalContent = document.querySelector(".modal-content");
    var closeModal = document.querySelector(".close");

    function showModal(content) {
        modal.style.display = "block";
        modalContent.innerHTML = content;
    }

    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
    // Move unavailable items to the bottom
    const unavailableItems = document.querySelectorAll('.unavailable');
    unavailableItems.forEach(item => {
        item.parentNode.appendChild(item);
    });
