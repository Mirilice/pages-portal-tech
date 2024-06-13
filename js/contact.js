function validateContactForm(event) {
    event.preventDefault();
    var name = document.getElementById('contactName').value;
    var email = document.getElementById('contactEmail').value;
    var message = document.getElementById('contactMessage').value;
    if (!name || !email || !message) {
        alert("Todos os campos são obrigatórios no formulário de contato.");
        return false;
    }
    // Se todos os campos são válidos, enviar o formulário
    document.getElementById('contactForm').submit();
}

function validateRegistrationForm(event) {
    event.preventDefault();
    var tipo = document.querySelector('input[name="tipo"]:checked');
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var cpfCnpj = document.getElementById('cpfCnpj').value;
    var endereco = document.getElementById('endereco').value;
    if (!tipo || !name || !email || !password || !cpfCnpj || !endereco) {
        alert("Todos os campos são obrigatórios no cadastro.");
        return false;
    }
    // Se todos os campos são válidos, enviar o formulário
    document.getElementById('registrationForm').submit();
}
