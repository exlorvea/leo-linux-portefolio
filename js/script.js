function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
    } else {
        section.classList.add('hidden');
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
