// Fonction principale pour calculer et afficher les résultats
function mettreAJourResultatsStatiques() {
    
    // 1. Récupérer les éléments candidats
    const candidatAElement = document.getElementById('candidatA');
    const candidatBElement = document.getElementById('candidatB');

    // 2. Récupérer les votes initiaux depuis les attributs de données (ce que vous avez mis à jour manuellement)
    let votesA = parseInt(candidatAElement.getAttribute('data-initial-votes')) || 0;
    let votesB = parseInt(candidatBElement.getAttribute('data-initial-votes')) || 0;

    let totalVotes = votesA + votesB;

    // 3. Calculer les pourcentages
    let pourcentageA = 0;
    let pourcentageB = 0;

    if (totalVotes > 0) {
        pourcentageA = (votesA / totalVotes) * 100;
        pourcentageB = (votesB / totalVotes) * 100;
    }

    // 4. Mettre à jour l'affichage
    
    // Candidat A
    candidatAElement.querySelector('.votes-count').textContent = votesA.toLocaleString();
    candidatAElement.querySelector('.pourcentage-text').textContent = `${pourcentageA.toFixed(2)}%`;
    candidatAElement.querySelector('.progress-bar').style.width = `${pourcentageA}%`;

    // Candidat B
    candidatBElement.querySelector('.votes-count').textContent = votesB.toLocaleString();
    candidatBElement.querySelector('.pourcentage-text').textContent = `${pourcentageB.toFixed(2)}%`;
    candidatBElement.querySelector('.progress-bar').style.width = `${pourcentageB}%`;

    // 5. Mettre à jour la date/heure de dernière modification
    const now = new Date();
    document.getElementById('last-updated').textContent = now.toLocaleString('fr-FR', {
        dateStyle: 'full',
        timeStyle: 'short'
    });
}

// Exécuter la fonction au chargement de la page
document.addEventListener('DOMContentLoaded', mettreAJourResultatsStatiques);
