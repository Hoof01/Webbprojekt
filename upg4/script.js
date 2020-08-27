let input1Element, input2Element, resultatElement;
function init(){
    input1Element=document.getElementById("input1");
    input2Element=document.getElementById("input2");
    resultElement=document.getElementById("result");
    document.getElementById("runBtn").onclick=doCalculations;
} //End init
window.onload = init;

function doCalculations(){
    let length; //Längd i meter
    let witdh; //Bredd i meter
    let area; //Yta i kvadratmeter
    let distance; //Längd koventerad till annan enhet
    let unit = ["steg", "fot", "tum"];
    let conv = [90,30.48,2,54];

    length = Number(input1Element.value);
    witdh = Number(input2Element.value);

    area = length * witdh;

    resultElement.innerHTML = "<p>Rektangelns area blir: " + area + " m<sup>2</sup>.</p>";

    area = 3.14159 * length * witdh / 4;

    resultElement.innerHTML += "<p>Ellipsens area blir: " + Math.round(area) + " m<sup>2</sup>.</p>";
    resultElement.innerHTML += "<p>Längden " + length + " meter blir:</p>";
    distance = length / conv[0] * 100;
    resultElement.innerHTML += "<p>" + Math.round(distance) + " " + unit[0] + "</p>";
    distance = length / conv[1] * 100;
    resultElement.innerHTML += "<p>" + Math.round(distance) + " " + unit[1] + "</p>";
    distance = length / conv[2] * 100;
    resultElement.innerHTML += "<p>" + distance + " " + unit[2] + "</p>";

    area = (length*1.5) * (witdh+3);
    
    resultElement.innerHTML += "<p>Rektangels area med 50% längre längd och 3 meter längre bredd blir: " + area + " m<sup>2</sup>.</p>";

    area = (length / conv[1]*100) * (witdh / conv[1]*100) / 2;

    resultElement.innerHTML += "<p>Trinagels area i fot blir: " + Math.round(area) + "  " + unit[1] + " <sup>2</sup>.</p>"
}