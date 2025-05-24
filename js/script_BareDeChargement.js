// Quand tout le DOM est chargé, on lance le script


// Fonction pour écrire ligne par ligne le texte dans la section terminal
function typeEffect(element, lines, speed) {
  let i = 0;

  function type() {
      if (i < lines.length) {
          // On crée un élément pour chaque ligne HTML (permet de garder les balises intactes comme <a>)
          const wrapper = document.createElement("div");
          wrapper.innerHTML = lines[i];
          element.appendChild(wrapper);
          i++;
          setTimeout(type, speed);
      }
  }

  type();
}

// Fonction pour afficher / masquer les sections (CV, Portfolio, etc.)
function toggleSection(id) {
  const section = document.getElementById(id);
  if (section) {
      section.classList.toggle("hidden");
  }
}

// Sécurité : si tout bug ou prend trop de temps, on affiche quand même le contenu après 5 sec
setTimeout(() => {
  const mainContent = document.getElementById("mainContent");
  const loader = document.getElementById("loader");

  if (mainContent.classList.contains("hidden")) {
      mainContent.classList.remove("hidden");
  const terminalSection = document.querySelector(".terminal-section");
  if (terminalSection) {
      const terminalText = terminalSection.innerHTML.trim();
      const terminalLines = terminalText
          .replace(/<br\s*\/?>/gi, '\n')
          .split('\n')
          .map(line => line.trim())
          .filter(line => line !== "");
      terminalSection.innerHTML = "";
      typeEffect(terminalSection, terminalLines, 50);
  }
  
      if (loader) loader.style.display = "none";
  }
}, 5000);

function launchSimpleBarLoader() {
const loader = document.getElementById("loader");
const loaderMessages = document.getElementById("loader-messages");
const mainContent = document.getElementById("mainContent");

loaderMessages.innerHTML = `
  <div class="bar-loader-wrapper">
    <img src="images/LLG.png" alt="LLG Logo" class="bar-loader-logo">
    <div class="bar-loader-bar">
      <div class="bar-loader-fill"></div>
    </div>
  </div>
`;



let progress = 0;
const interval = setInterval(() => {
  progress += 1;
  document.querySelector(".bar-loader-fill").style.width = progress + "%";


  if (progress >= 100) {
    clearInterval(interval);
    loader.style.display = "none";
    mainContent.classList.remove("hidden");
  const terminalSection = document.querySelector(".terminal-section");
  if (terminalSection) {
      const terminalText = terminalSection.innerHTML.trim();
      const terminalLines = terminalText
          .replace(/<br\s*\/?>/gi, '\n')
          .split('\n')
          .map(line => line.trim())
          .filter(line => line !== "");
      terminalSection.innerHTML = "";
      typeEffect(terminalSection, terminalLines, 50);
  }
  
  }
}, 30);
}

document.addEventListener("DOMContentLoaded", function () {
const path = window.location.pathname;

if (path.includes("veille")) {
  launchSimpleBarLoader();
} else if (path.includes("cv")) {
  launchSimpleBarLoader();
} else {
  launchSimpleBarLoader();
}
});


