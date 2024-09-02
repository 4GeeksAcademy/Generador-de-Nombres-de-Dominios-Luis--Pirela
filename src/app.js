/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let combi = [];

function generador() {
  for (let i = 0; i < pronoun.length; i++) {
    for (let i2 = 0; i2 < adj.length; i2++) {
      for (let i3 = 0; i3 < noun.length; i3++) {
        combi += pronoun[i] + adj[i2] + noun[i3] + ".com<br>";
        console.log(combi);
      }
    }
  }
  return combi;
}
window.onload = function() {
  //write your code here
  const list1 = document.getElementById("list");
  list1.innerHTML = generador();
};
