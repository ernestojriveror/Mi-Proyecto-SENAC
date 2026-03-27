let peso = 70
let altura = 1.70
let IMC = peso / (altura * altura)
if (IMC < 18.5) { 
    console.log("Abaixo do peso")
}
else if (IMC < 25) {
    console.log("peso Normal")
}
else if (IMC < 30) {
    console.log("Sobrepeso") 
}
else if (IMC < 35) {
    console.log("Obesidade Grau I")
}
else if (IMC < 40) {
    console.log("Obesidade Grau II")
}
