var nav = document.querySelector('nav');
window.addEventListener('scroll', function () {
    if(window.pageYOffset > 200){
        nav.classList.add('bg-secondary', 'shadow');
        nav.classList.replace('navbar-light','navbar-dark');
    }
    else {
        nav.classList.remove('bg-secondary','shadow');
        nav.classList.replace('navbar-dark','navbar-light');
    }
});
async function loadTranslations(lang) {
    try {
        const response = await fetch("translations.json");
        if (!response.ok) {
            throw new Error(`Erreur HTTP ${response.status}: ${response.statusText}`);
        }
        const data = await response.json(); // Assure-toi d'appeler .json() !
        applyTranslations(data[lang]);
    } catch (error) {
        console.error("Erreur lors du chargement des traductions :", error.message);
    }
}


function applyTranslations(translations) {
    // Appliquer les traductions à tous les éléments ayant un attribut data-lang
    document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.getAttribute("data-lang");
        if (translations[key]) {
            el.textContent = translations[key]; // Remplacer le texte avec la traduction
        }
    });
}

// Fonction pour changer la langue à partir du bouton
function changeLanguage(lang) {
    loadTranslations(lang);
    localStorage.setItem("lang", lang); // Sauvegarder la langue dans le localStorage
}

// Charger la langue par défaut ou la langue sauvegardée
const userLang = localStorage.getItem("lang") || navigator.language.slice(0, 2) || "fr"; // Par défaut, c'est le français
loadTranslations(userLang);

