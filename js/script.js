window.onload = function () {
    const loader = document.getElementById('loader');
    const logo = document.getElementById('logo');
    const loaderMessages = document.getElementById('loader-messages');
    const content = document.getElementById('content');
    const messages = [
        "[BOOT] Initializing system components...",
        "[OK] Loading essential modules...",
        "[INFO] Checking file integrity...",
        "[WARN] Monitoring network activity...",
        "[OK] Verifying user permissions...",
        "[LOADING] Accessing secret server files...",
        "[OK] Retrieving encrypted data...",
        "[BOOT] Starting user interface...",
        "[SUCCESS] Connection to secure database established",
        "[INFO] Running system diagnostic...",
        "[OK] Ready for user interaction."
    ];

    let messageIndex = 0;

    // Délai pour afficher les messages après le logo
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
                    content.classList.remove('hidden');
                }, 1000);
            }
        }, 400);
    }, 2000); // Attente de 2 secondes pour afficher les lignes après le logo
};
