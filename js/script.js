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
            // Create a new line of text and add it to the loader
            const line = document.createElement('p');
            line.textContent = messages[messageIndex];
            loader.appendChild(line);
            messageIndex++;
        } else {
            // Stop interval and finish loading sequence
            clearInterval(interval);
            setTimeout(() => {
                loader.style.display = 'none';
                content.classList.remove('hidden');
            }, 1000); // Slight pause before displaying content
        }
    }, 400); // Display a new message every 400 ms
};

function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.toggle('hidden');
}
