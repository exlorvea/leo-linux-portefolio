document.addEventListener("DOMContentLoaded", function() {
    const outputDiv = document.getElementById("terminal-output");
    const text = "Bienvenue sur mon portfolio !\n\nChargement des projets...\n\n- Projet 1: Description\n- Projet 2: Description\n\nMerci de patienter...";
    const speed = 50; // Vitesse de la saisie

    let index = 0;

    function type() {
        if (index < text.length) {
            outputDiv.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else {
            // Une fois le texte affiché, rendre visible l'output
            outputDiv.style.opacity = 1;
        }
    }

    type();
});
