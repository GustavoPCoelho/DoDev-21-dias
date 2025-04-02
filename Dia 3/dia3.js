let nome = ""
let idade = 0
let altura = 0
let peso = 0


nome = prompt("Digite seu nome")
idade = parseInt(prompt("Digite sua idade"))
altura = parseFloat(prompt("Digite sua altura"))
peso = parseInt(prompt("Digite seu peso"))

anoNasc = 2025 - idade

let IMC = 0
IMC = peso / (altura * altura)


console.log("OLá " + nome + ", você tem " + idade + " anos, nasceu em " + anoNasc + ", tem " + altura + " de altura, pesa " + peso + "kg, e seu IMC é " + IMC + "kg/m²")
