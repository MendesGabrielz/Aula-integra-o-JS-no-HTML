function alterarMsg(nome) {

    const elemento = document.getElementById("msg")
    elemento.innerHTML = `Boa Tarde ${nome}`
}

let elementoBotao = document.getElementById("btnConfirma")

elementoBotao.("click", function() {

    const elemento = document.getElementById("msg")
    const nome = document.getElementById("nome").value
    elemento.innerHTML = `Boa Tarde ${nome}`
    console.log("asdasdasfaddsg")
})