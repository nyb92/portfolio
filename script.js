document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Retirer la classe active de tous les boutons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const category = this.dataset.category;
            
            projectCards.forEach(card => {
                if (category === "all" || card.dataset.category === category) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Mode sombre
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
