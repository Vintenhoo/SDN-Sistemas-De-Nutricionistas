function validateForm(event) {
    var inputs = document.querySelectorAll('input');
    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            alert("Por favor, preencha todos os campos.");
            event.preventDefault(); // Evita o envio do formulário se algum campo estiver vazio
            return false;
        }
    }
    alert("Cadastro enviado, em breve retornaremos via e-mail cadastrado.");
    return true;
}

document.querySelector('form').addEventListener('submit', validateForm);

const checkboxes = document.querySelectorAll('.sexo-checkbox');
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function() {
        // Se esta checkbox estiver marcada, desmarque as outras
        if (this.checked) {
            checkboxes.forEach((otherCheckbox) => {
                if (otherCheckbox !== this) {
                    otherCheckbox.checked = false;
                }
            });
        }
    });
});