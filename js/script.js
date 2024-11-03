window.onload = function() {
    // Affiche le loader pendant 4 secondes
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('content').classList.remove('hidden');
    }, 4000); // 4000 ms = 4 seconds
};
