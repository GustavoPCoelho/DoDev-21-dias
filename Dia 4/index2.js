let nome = prompt("Qual o seu nome?")
let idade = Number(prompt("Qual a sua idade?"))
let carta = prompt("Você tem carteira de motorista? sim ou não?")
let carro = prompt("Você tem carro? sim ou não?")

if(idade <18 || carta === "não"){
    console.log(nome + ", você não pode dirigir.")

}else if(idade >= 18 && carta === "sim" && carro === "não"){
    console.log(nome + ", você pode dirigir, mas não tem um carro.")
}
else {
    console.log(nome + ", você será o motorista!")}