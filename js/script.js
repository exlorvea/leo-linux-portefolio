window.onload = function() {
    const loader = document.getElementById('loader');
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
    
    const interval = setInterval(() => {
        if (messageIndex < messages.length) {
            const line = document.createElement('p');
            line.textContent = messages[messageIndex];
            line.classList.add('code-line');
            loader.appendChild(line);
            messageIndex++;
        } else {
            clearInterval(interval);
            setTimeout(() => {
                loader.style.display = 'none';
                content.classList.remove('hidden');
            }, 1000);
        }
    }, 400);
};

// Toggle visibility for sections in the content
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.toggle('hidden');
}
