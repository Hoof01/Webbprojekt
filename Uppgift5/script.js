// JavaScript

// Globala variabler
let inputElem, msgElem, fruitNames, fruitNr, selFruitsElem; //Variabel för text fälten och meddalnde fältet

// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd.
// Initiering av globala variabler samt koppling avfunktioner till knapparna.
function init() {
    inputElem=[];
    inputElem[1]=document.getElementById("input1");
    inputElem[2]=document.getElementById("input2");
    inputElem[3]=document.getElementById("input3");
    msgElem=document.getElementById("message");
    document.getElementById("btn1").onclick=showFruit;
    fruitNames=["ingen frukt","äpple","banan","apelsin","clementin","päron"];
    fruitNr = 0;
    document.getElementById("btn2").onclick=checkName;
    selFruitsElem=document.getElementById("selectedFruits");
    document.getElementById("btn3").onclick=addFruits
} // End init
window.onload = init; // Se till att init aktiveras då sidan är inladdad
// Funktionen kollar vilket nummer mellan 1-5 som skrivs in i den översta textfältet och tar sedan fram rätt frukt bild till siffran 
function showFruit(){
    let nr; //Variabel för numret i textfältet
    let fruitURL; //Variabel för adress till frukt bilderna

    nr = Number(inputElem[1].value);

    if (isNaN(nr)) {
        msgElem.innerHTML = "Inga bokstäver bara siffror"
        return;
    }
    if (nr<1 || nr>5) {
        msgElem.innerHTML = "Bara siffror mellan 1-5"
        return;
    }
    nr = parseInt(nr);
    inputElem[1].value = nr;

    fruitURL ="./pics/fruit" + nr + ".jpg";
    document.getElementById("fruitImg").src = fruitURL;

    fruitNr = nr;
}
function checkName(){
    let name;
    if(fruitNr === 0){
        msgElem.innerHTML = "Välj ett nummer först"
        return;
    }

    name = inputElem[2].value;
    if(name == fruitNames[fruitNr]){
        msgElem.innerHTML = "Rätt namn"
        return;
    }else{
        msgElem.innerHTML = "Fel namn"
        return;
    }
}
function getNr(){
    let nr;
    
    nr = Number(inputElem[3].value);

    if (isNaN(nr)) {
        msgElem.innerHTML = "Inga bokstäver bara siffror"
        return;
    }
    if (nr<1 || nr>9) {
        msgElem.innerHTML = "Bara siffror mellan 1-9"
        return;
    }
    nr = parseInt(nr);
    inputElem[3].value = nr;
}
function addFruits(){
    let amount; //Talet som läses in från de undre textfältet
    let imgList; //En textsträng med en HTML-kod som ska läggas in i elementet "selectedFruits"
    let i;
    
    if(fruitNr === 0){
        msgElem.innerHTML = "Välj ett nummer först"
        return;
    }

    imgList="";
    for(i=0; i<amount; i++){
        imgList+="<img src='./pics/fruit" + fruitNr + ".jpg' alt='frukt'>";
    }
    

}
