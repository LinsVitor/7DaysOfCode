const nome = prompt("Qual é seu nome?");
const idade = prompt("Quantos anos você tem?")
const linguagemProgramacao = prompt("Qual linguagem de programação você está estudando?")


alert(`Olá ${nome}, você tem ${idade} e já está aprendendo ${linguagemProgramacao}`)

const escolha = prompt(`Você gosta de estudar ${linguagemProgramacao}? Responda com o número 1 para SIM e 2 para NÃO`)
if (escolha == 1) {
    alert("Muito bom! Continue estudando e você terá muito sucesso.")
} else if (escolha == 2) {
    alert("Ahh que pena... Já tentou aprender outras linguagens?")
}
