const listaDeClinicas = [
    { nome: "Clínica 1", nota: "-", estrelas: "-", link: "perfil_empresa.html" },
    { nome: "Clínica 2", nota: "-", estrelas: "-", link: "perfil_empresa.html" },
    { nome: "Clínica 3", nota: "-", estrelas: "-", link: "perfil_empresa.html" },
    { nome: "Clínica 4", nota: "-", estrelas: "-", link: "perfil_empresa.html" }
];

let startIndex = 0;

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

function adicionarClinicasAoContainer() {
    const clinicasContainer = document.getElementById('clinicas-container');
    clinicasContainer.innerHTML = '';
    const clinicasExibidas = listaDeClinicas.slice(startIndex, startIndex + 4);
    clinicasExibidas.forEach(clinica => {
        const clinicaHTML = criarClinicaHTML(clinica);
        clinicasContainer.innerHTML += clinicaHTML;
    });
}

window.onload = function() {
    adicionarClinicasAoContainer();
};

function nextClinics() {
    console.log('Next button clicked');
    startIndex += 4;
    if (startIndex >= listaDeClinicas.length) {
        startIndex = 0;
    }
    adicionarClinicasAoContainer();
}

function previousClinics() {
    console.log('Previous button clicked');
    startIndex -= 4;
    if (startIndex < 0) {
        startIndex = Math.floor((listaDeClinicas.length - 1) / 4) * 4;
    }
    adicionarClinicasAoContainer();
}
