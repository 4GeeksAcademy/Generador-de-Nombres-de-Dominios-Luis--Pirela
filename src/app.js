/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
/* Se cambio el nombre de la variable combi a dominios para que sea un nombre más representativo 
y se colocó dentro de la funcion para evitar conflictos en caso de volver a ejecutar la funcion 
tambien se cambio su valor de [] a '' para que sea una String vacio */
function generadorDeDominios() {
 let dominios = '';
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        dominios += pronoun[i] + adj[j] + noun[k] + ".com<br>";
        console.log(dominios);
      }
    }
  }

  // Se modifico el nombre de las variables en los bucles para evitar el uso de numeros
  return dominios;
}
//Se modificó el nombre de la funcion a generadorDeDominios


window.onload = function() {
  //write your code here
  const list1 = document.getElementById("list");
  list1.innerHTML = generadorDeDominios();
};
