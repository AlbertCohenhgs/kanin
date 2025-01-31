// script.js

// Função para alternar a exibição da descrição da habilidade
function toggleAbility(ability) {
    const description = ability.querySelector('.ability-description');
    if (description.style.display === 'block') {
        description.style.display = 'none';
    } else {
        description.style.display = 'block';
    }
}

// Função para atualizar a estatística (vida, sanidade, etc.)
function updateStat(statId, change) {
    const statElement = document.getElementById(statId);
    let statValue = parseInt(statElement.textContent, 10);
    statValue += change;

    // Garante que o valor não seja negativo
    if (statValue < 0) {
        statValue = 0;
    }

    statElement.textContent = statValue;

    // Atualiza a largura da barra de acordo com o novo valor
    const statMax = parseInt(document.getElementById(statId + '-max').textContent, 10);
    const percentage = (statValue / statMax) * 100;
    const bar = document.getElementById(statId + '-bar');
    bar.style.width = percentage + '%'; // Altera a largura da barra

    // Salva os novos valores no LocalStorage
    saveStats();
}

// Função para salvar os valores das barras de vida e sanidade no LocalStorage
function saveStats() {
    const vida = document.getElementById('hp-current').textContent; // Atualizado para pegar 'hp-current'
    const sanidade = document.getElementById('sanity-current').textContent; // Atualizado para pegar 'sanity-current'

    localStorage.setItem('vida', vida);
    localStorage.setItem('sanidade', sanidade);
}

// Função para recuperar os valores das barras de vida e sanidade do LocalStorage
function loadStats() {
    const savedVida = localStorage.getItem('vida');
    const savedSanidade = localStorage.getItem('sanidade');

    if (savedVida) {
        document.getElementById('hp-current').textContent = savedVida; // Atualizado para 'hp-current'
        const maxVida = parseInt(document.getElementById('hp-max').textContent, 10);
        document.getElementById('hp-bar').style.width = (savedVida / maxVida) * 100 + '%'; // Ajusta a barra de vida
    }

    if (savedSanidade) {
        document.getElementById('sanity-current').textContent = savedSanidade; // Atualizado para 'sanity-current'
        const maxSanidade = parseInt(document.getElementById('sanity-max').textContent, 10);
        document.getElementById('sanity-bar').style.width = (savedSanidade / maxSanidade) * 100 + '%'; // Ajusta a barra de sanidade
    }
}

// Chama a função para carregar os valores ao iniciar a página
window.onload = loadStats;