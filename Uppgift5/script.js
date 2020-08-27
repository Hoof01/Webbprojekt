// JavaScript

// Globala variabler
let inputElem; msgElem;

// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd.
// Initiering av globala variabler samt koppling avfunktioner till knapparna.
function init() {
    inputElem=[];
    inputElem[1]=document.getElementById("input1");
    inputElem[2]=document.getElementById("input2");
    inputElem[3]=document.getElementById("input3");
    msgElem=document.getElementById("message");
    document.getElementById("btn1").onclick=showFruit;
} // End init
window.onload = init; // Se till att init aktiveras då sidan är inladdad
function showFruit(){
    let nr;
    let fruitURL;

    nr = Number(inputElem[1].value);
    fruitURL ="./pics/fruit" + nr + ".jpg";
    document.getElementById("fruitImg").src="/pics" = fruitURL;
}
