// Menu y sub menu


let bebida= 3
let cafe = 3
let jugo = 3
let trago = 3

switch (bebida) {
    case 1:
        if (cafe === 1) {
            console.log("Cafe Negro");
        }
        else if (cafe === 2) {
            console.log("Cafe Marron"); 
        }
        else if (cafe === 3) {
            console.log("Cafe Con Leche"); 
        }
        else {
            console.log("Opcion Invalida"); 
        }
        break;
    case 2:
        if (jugo === 1) {
            console.log("Jugo de Naranja");
        }
        else if (jugo === 2) {
            console.log("Jugo de Fresa"); 
        }
        else if (jugo === 3) {
            console.log("Jugo de Mango"); 
        }
        else {
            console.log("Opcion Invalida"); 
        }
        break;
    case 3:
        if (trago === 1) {
            console.log("Cerveza");
        }
        else if (trago === 2) {
            console.log("Whisky"); 
        }
        else if (trago === 3) {
            console.log("Ron"); 
        }
        else {
            console.log("Opcion Invalida"); 
        }
        break;
    default:
            console.log("Opcion Invalida");
}
