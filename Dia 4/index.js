let fome = prompt("Você está com fome? Sim ou não?")
let dinheiro = prompt("Você tem dinheiro? Sim ou não?")
let aberto = prompt("O restaurante está aberto? Sim ou não?")

if(fome === "não" || dinheiro === "não"){
    console.log("Hoje a janta será em casa.")
}else if(dinheiro === "Sim" && aberto === "Sim" ){
    console.log("Hoje o jantar será fora de casa!.")

} else {
    console.log("Peça um delivery.")
}
