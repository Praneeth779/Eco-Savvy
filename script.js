const hero = document.querySelector('.hero');
const images = [
        'Photo/hero1.jpg',
        'Photo/hero2.jpg',
        'Photo/hero3.jpg'
    ]; // Replace with your image paths
    let currentIndex = 0;

    function changeBackground() {
        currentIndex = (currentIndex + 1) % images.length; // Cycle through images
        hero.style.backgroundImage = `url('${images[currentIndex]}')`; // Change background image
    }

    setInterval(changeBackground, 5000);

    document.addEventListener("DOMContentLoaded", function () {
        const preloader = document.getElementById("preloader");
    
        // Set a timeout to simulate loading completion (optional for GIF)
        setTimeout(() => {
            preloader.style.display = "none"; // Hide the preloader
        }, 3000); // Adjust the time (in milliseconds) if needed
    });
     // Toggle account dropdown on photo click
     accountPhoto.addEventListener("click", () => {
        const isVisible = accountDropdown.style.display === "block";
        accountDropdown.style.display = isVisible ? "none" : "block";
    });

    // Hide dropdown when clicking outside
    document.addEventListener("click", (event) => {
        if (!event.target.closest(".account")) {
            accountDropdown.style.display = "none";
        }
    });