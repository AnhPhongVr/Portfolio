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
        // Charger le fichier JSON de traduction
        const response = await fetch("translations.json");
        const translations = await response.json();

        // Appliquer les traductions
        applyTranslations(translations[lang]);
    } catch (error) {
        console.error("Erreur lors du chargement des traductions :", error);
    }
}

function applyTranslations(translations) {
    // Appliquer les traductions � tous les �l�ments ayant un attribut data-lang
    document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.getAttribute("data-lang");
        if (translations[key]) {
            el.textContent = translations[key]; // Remplacer le texte avec la traduction
        }
    });
}

// Fonction pour changer la langue � partir du bouton
function changeLanguage(lang) {
    loadTranslations(lang);
    localStorage.setItem("lang", lang); // Sauvegarder la langue dans le localStorage
}

// Charger la langue par d�faut ou la langue sauvegard�e
const userLang = localStorage.getItem("lang") || navigator.language.slice(0, 2) || "fr"; // Par d�faut, c'est le fran�ais
loadTranslations(userLang);

