/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let simbolo = ["A", "J", "Q", "K", 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let random = Math.floor(Math.random() * 13);

  document.querySelector("#numero").append(simbolo[random]);
};
