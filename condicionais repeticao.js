//Programa de controle de temperatura de uma estufa//
//control aumento de temperatura//
//control reducir temperatura//
//mostrar temperatura actual//
//sair (mostrar temp atual + msg saido)//
//temp inicial = 26 °C//
//temperatura < 15 °C aviso de risco do user // 
//temperatura > 30 °C aviso de risco do usuario //


// Solicita a opção do usuário
let temp = 2;
 

// Avalia a opção
switch (temp) {
  case 1:
    console.log("Aumento de temperatura  ")
    for(temp = 26; temp < 35; temp++ ) {
      console.log("Aumento de temperatura > : " + temp);
        }
    break;
  case 2:
    console.log("Decremento de temperatura  ")
    for(temp = 26; temp >+ 14; temp-- ) {
      console.log("decremento de temperatura > : " + temp);
        }
    break;
  case 3:
    console.log("Temperatura actual :" + temp);
    break;
  default:
    console.log("temp final " + temp);
}
