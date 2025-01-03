window.onload = function () {
    const loader = document.getElementById('loader');
    const loaderMessages = document.getElementById('loader-messages');
    const mainContent = document.getElementById('mainContent');
    const messages = [
        "[BOOT] Initializing system components...",
        "[OK] Loading kernel modules...",
        "[INFO] Checking file system integrity...",
        "[OK] Mounting root partition...",
        "[OK] Activating swap space...",
        "[OK] Initializing hardware abstraction layer...",
        "[INFO] Detecting devices: Keyboard [OK]",
        "[INFO] Detecting devices: Mouse [OK]",
        "[INFO] Detecting devices: Display [OK]",
        "[OK] Starting network services...",
        "[OK] Configuring IP address...",
        "[INFO] Connecting to DNS server...",
        "[OK] Starting SSH daemon...",
        "[OK] Starting Apache web server...",
        "[OK] Starting MySQL database server...",
        "[INFO] Verifying user authentication...",
        "[SUCCESS] System startup complete. Welcome!"
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
                    mainContent.classList.remove('hidden');
                }, 1000);
            }
        }, 300); // Intervalle entre les messages
    }, 2000); // Attente de 2 secondes avant de démarrer les messages
};
