const listaDeClinicas = [
    { nome: "Clínica Minuto Saúde", nota: 10, estrelas: 5, link: "https://www.clinicaminutosaude.com.br/" },
    { nome: "Clínica 2", nota: "-", estrelas: "-", link: "perfil_empresa.html" },
    { nome: "Clínica 3", nota: "-", estrelas: "-", link: "perfil_empresa.html" },
    { nome: "Clínica 4", nota: "-", estrelas: "-", link: "perfil_empresa.html" }
];

let startIndex = 0;

function criarClinicaHTML(clinica) {
    let logoHTML = '';
    if (clinica.logo) {
        logoHTML = `<img src="${../img/jpeg/logo_c}" alt="Logo ${clinica_logo}">`;
    }
    return `
    <section class="clinica">
        <div class="info">
            <h2>${clinica.nome}</h2>
            <p>Nota: ${clinica.nota} (estrelas: ${clinica.estrelas})</p>
            <a href="${clinica.link}" target="_blank">Ver Perfil</a>
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
    startIndex += 4;
    if (startIndex >= listaDeClinicas.length) {
        startIndex = 0;
    }
    adicionarClinicasAoContainer();
}

function previousClinics() {
    startIndex -= 4;
    if (startIndex < 0) {
        startIndex = Math.floor((listaDeClinicas.length - 1) / 4) * 4;
    }
    adicionarClinicasAoContainer();
}
