
function mostrarNomeCompleto() {
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;

    var nomeCompleto = nome + " " + sobrenome;

    document.getElementById("resultado").innerText = "Nome completo: " + nomeCompleto;
}
