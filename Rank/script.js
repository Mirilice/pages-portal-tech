// Lista de clínicas (pode ser substituída por dados dinâmicos do servidor)
const listaDeClinicas = [
    { nome: "Clínica 1", nota: "-", estrelas: "-", link: "perfil_empresa.html" },
    { nome: "Clínica 2", nota: "-", estrelas: "-", link: "perfil_empresa.html" },
    { nome: "Clínica 3", nota: "-", estrelas: "-", link: "perfil_empresa.html" },
    { nome: "Clínica 4", nota: "-", estrelas: "-", link: "perfil_empresa.html" }
    // Adicione mais clínicas conforme necessário
];

// Índice inicial das clínicas a serem exibidas
let startIndex = 0;

// Função para criar o HTML de uma clínica
function criarClinicaHTML(clinica) {
    return `
    <section class="clinica">
        <div class="info">
            <h2>${clinica.nome}</h2>
            <p>Nota: ${clinica.nota} (estrelas: ${clinica.estrelas})</p>
            <a href="${clinica.link}">Ver Perfil</a>
        </div>
    </section>
    `;
}

// Função para adicionar as clínicas ao container
function adicionarClinicasAoContainer() {
    const clinicasContainer = document.getElementById('clinicas-container');
    clinicasContainer.innerHTML = ''; // Limpa o conteúdo atual
    listaDeClinicas.forEach(clinica => {
        const clinicaHTML = criarClinicaHTML(clinica);
        clinicasContainer.innerHTML += clinicaHTML;
    });
}

// Exibe as primeiras 4 clínicas ao carregar a página
window.onload = function() {
    adicionarClinicasAoContainer();
};

// Função para exibir as próximas 4 clínicas
function nextClinics() {
    startIndex += 4;
    adicionarClinicasAoContainer();
}

// Função para exibir as clínicas anteriores
function previousClinics() {
    startIndex -= 4;
    if (startIndex < 0) {
        startIndex = 0;
    }
    adicionarClinicasAoContainer();
}
