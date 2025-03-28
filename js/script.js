function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.classList.toggle("hidden");
    }
}


window.onload = function () {
    const loader = document.getElementById('loader');
    const loaderMessages = document.getElementById('loader-messages');
    const mainContent = document.getElementById('mainContent');
    const messages = [
        "[BOOT] Initializing system components...",
        "[OK] Loading kernel modules...",
        "[INFO] Checking file system integrity...",
        "[SUCCESS] System startup complete. Welcome!"
    ];

    let messageIndex = 0;

    setTimeout(() => {
        const interval = setInterval(() => {
            if (messageIndex < messages.length) {
                const line = document.createElement('p');
                line.textContent = messages[messageIndex];
                line.classList.add('code-line');
                loaderMessages.appendChild(line);
                messageIndex++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    loader.style.display = 'none';
                    mainContent.classList.remove('hidden');
                }, 1000);
            }
        }, 30);
    }, 2000);
};
//new stuff//
document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("loader");
    const mainContent = document.getElementById("mainContent");
    const terminalSection = document.querySelector(".terminal-section");
    
    if (!terminalSection) {
        console.error("Erreur : .terminal-section introuvable");
        return;
    }

    const terminalText = terminalSection.innerHTML.trim();
    const terminalLines = terminalText.split(/(<[^>]+>|\n)/g).filter(line => line.trim() !== "");
    terminalSection.innerHTML = ""; // Vider le contenu avant d'écrire
    
    // Désactiver le scroll pendant le chargement
    document.body.style.overflow = "hidden";

    setTimeout(() => {
        loader.style.display = "none";
        mainContent.classList.remove("hidden");
        document.body.style.overflow = "auto";
        
        // Lancer l'effet d'écriture progressive
        typeEffect(terminalSection, terminalLines, 50);
    }, 4000);
});

function typeEffect(element, lines, speed) {
    let i = 0;
    function type() {
        if (i < lines.length) {
            element.innerHTML += lines[i];
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}
