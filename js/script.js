document.addEventListener("DOMContentLoaded", () => {
    const loadingElement = document.querySelector('.loading');
    const terminalWindow = document.querySelector('.terminal-window');

    // Simule le chargement
    setTimeout(() => {
        loadingElement.classList.add('hidden'); // Masque le message de chargement
        terminalWindow.classList.remove('hidden'); // Affiche la fenêtre terminale
    }, 3000); // Modifiez la durée selon vos besoins (3000 ms = 3 secondes)

    // Fonction pour simuler le texte qui apparaît dans le terminal
    const simulateTerminalText = (text) => {
        const contentElement = document.querySelector('.window-content');
        let index = 0;

        const typingInterval = setInterval(() => {
            if (index < text.length) {
                contentElement.innerHTML += text.charAt(index);
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100); // Ajustez la vitesse d'affichage ici (100 ms entre chaque caractère)
    };

    // Texte à afficher dans le terminal
    const terminalText = `
    Welcome to the Portfolio Terminal
    ---------------------------------
    Loading your projects...
    [Project 1] - Completed
    [Project 2] - In Progress
    [Project 3] - Pending Review
    ---------------------------------
    Type 'help' for a list of commands.
    `;

    // Démarrer l'affichage du texte après que la fenêtre terminale soit affichée
    setTimeout(() => {
        simulateTerminalText(terminalText);
    }, 1000); // Démarre après un délai de 1 seconde
});
