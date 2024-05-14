// Lista de todas as clínicas
const clinicas = document.querySelectorAll('.clinica');

// Índice inicial das clínicas a serem exibidas
let startIndex = 0;

// Função para exibir as clínicas de acordo com o índice
function showClinics(startIndex) {
    // Oculta todas as clínicas
    clinicas.forEach(clinica => clinica.style.display = 'none');
    // Exibe as próximas 4 clínicas a partir do índice
    for (let i = startIndex; i < startIndex + 4; i++) {
        if (clinicas[i]) {
            clinicas[i].style.display = 'inline-block';
        }
    }
}

// Função para exibir as próximas 4 clínicas
function nextClinics() {
    if (startIndex < clinicas.length - 4) {
        startIndex += 4;
        showClinics(startIndex);
    } else {
        // Caso estejamos no final, voltamos ao início
        startIndex = 0;
        showClinics(startIndex);
    }
}

// Função para exibir as clínicas anteriores
function previousClinics() {
    if (startIndex >= 4) {
        startIndex -= 4;
        showClinics(startIndex);
    } else {
        // Caso estejamos no início, vamos para o final
        startIndex = clinicas.length - 4;
        showClinics(startIndex);
    }
}

// Exibe as primeiras 4 clínicas ao carregar a página
window.onload = function() {
    showClinics(startIndex);
};
