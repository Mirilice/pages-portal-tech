const listaDeClinicas = [
    { nome: "Clínica Minuto Saúde", nota: 10, estrelas: 5, link: "https://www.clinicaminutosaude.com.br/", logo: "../img/jpeg/logo_C.jpg" },
    { nome: "Clínica Popular Saúde", nota: 9, estrelas: 4, link: "https://popularsaudeparatodos.com.br/", logo: "../img/jpeg/popularsaudeparatodos-logo.jpg" },
    { nome: "Clínica GlobalMED", nota: 7.8, estrelas: 3, link: "https://www.globalmedclinica.com.br/clinica-popular-em-sp/", logo:"../img/png/globalmed.png" },
    { nome: "Clínica Vale Saúde", nota: 5, estrelas: 1, link: "perfil_empresa.htmhttps://www.valesaude.com.br/l", logo: "../img/png/logo-vale-saude.png" }
];

let startIndex = 0;

function criarClinicaHTML(clinica) {
    let logoHTML = '';
    if (clinica.logo) {
        logoHTML = `<img src="${clinica.logo}" alt="Logo ${clinica.nome}">`;
    }

    return `
    <section class="clinica">
        <div class="info">
            ${logoHTML}
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
