document.addEventListener("DOMContentLoaded", () => {
    // 1. Interaction avec le bouton "Postuler pour l'adopter"
    const adoptBtn = document.getElementById("adopt-btn");

    adoptBtn.addEventListener("click", () => {
        alert("Candidature envoyée ! L'équipe d'Adopte un Bastos étudiera votre dossier 🤩");
    });

    // 2. Animation d'apparition des témoignages
    const testimonials = document.querySelectorAll(".testimonial");
    let delay = 500; // Délai initial en millisecondes

    testimonials.forEach((testimonial, index) => {
        setTimeout(() => {
            testimonial.style.opacity = "1";
            testimonial.style.transform = "translateY(0)";
        }, delay + index * 500); // Chaque témoignage apparaît après le précédent
    });

    // 3. Animation des photos (zoom/dézoom)
    const photos = document.querySelectorAll(".photos img");

    photos.forEach((photo) => {
        setInterval(() => {
            photo.classList.toggle("zoom");
        }, 2000); // Change d'état toutes les 2 secondes
    });
});
