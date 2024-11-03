document.addEventListener("DOMContentLoaded", function() {
    const output = document.getElementById("output");
    const text = [
        "Démarrage du système...\n",
        "Chargement des modules...\n",
        "Initialisation des services...\n",
        "Bienvenue sur mon portfolio.\n",
        "Visitez mes projets !\n"
    ];

    let currentLine = 0;
    let currentChar = 0;

    function typeLine() {
        if (currentLine < text.length) {
            const line = text[currentLine];

            if (currentChar < line.length) {
                output.textContent += line[currentChar];
                currentChar++;
                setTimeout(typeLine, 100); // Ajuste la vitesse ici
            } else {
                output.textContent += '\n'; // Ajoute une nouvelle ligne
                currentLine++;
                currentChar = 0;
                setTimeout(typeLine, 500); // Pause entre les lignes
            }
        }
    }

    typeLine(); // Démarre le processus d'écriture
});
