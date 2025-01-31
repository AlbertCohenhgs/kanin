// script.js
function toggleAbility(ability) {
    const description = ability.querySelector('.ability-description');
    if (description.style.display === 'block') {
        description.style.display = 'none';
    } else {
        description.style.display = 'block';
    }
}

function updateStat(statId, change) {
    const statElement = document.getElementById(statId);
    let statValue = parseInt(statElement.textContent, 10);
    statValue += change;

    // Garante que o valor não seja negativo
    if (statValue < 0) {
        statValue = 0;
    }

    statElement.textContent = statValue;
}

// Função para atualizar a estatística
function updateStat(statId, change) {
    const statElement = document.getElementById(statId);
    let statValue = parseInt(statElement.textContent, 10);
    statValue += change;

    // Garante que o valor não seja negativo
    if (statValue < 0) {
        statValue = 0;
    }

    statElement.textContent = statValue;

    // Salva os novos valores no LocalStorage
    saveStats();
}

// Salva os valores das barras de vida e sanidade no LocalStorage
function saveStats() {
    const vida = document.getElementById('hp-current').textContent; // Atualizado para pegar 'hp-current'
    const sanidade = document.getElementById('sanity-current').textContent; // Atualizado para pegar 'sanity-current'

    localStorage.setItem('vida', vida);
    localStorage.setItem('sanidade', sanidade);
}

// Recupera os valores das barras de vida e sanidade do LocalStorage
function loadStats() {
    const savedVida = localStorage.getItem('vida');
    const savedSanidade = localStorage.getItem('sanidade');

    if (savedVida) {
        document.getElementById('hp-current').textContent = savedVida; // Atualizado para 'hp-current'
    }
    if (savedSanidade) {
        document.getElementById('sanity-current').textContent = savedSanidade; // Atualizado para 'sanity-current'
    }
}

// Chama a função para carregar os valores ao iniciar a página
window.onload = loadStats;