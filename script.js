alert ("WELKOM TO MY CALTOR")

function clearOutput() {
    document.getElementById("output").innerHTML="0";
}

function slice() {
    let value = document.getElementById("output").innerHTML;
    if (value = document.getElementById("output").innerHTML) {
    value = value.slice(0, -1);
    document.getElementById("output").innerHTML=value;
    } if (value == "") {
    document.getElementById("output").innerHTML="0";
    } else {
    document.getElementById("output").innerHTML=value;
    }
}   

function removeZero() {
    let value = document.getElementById("output").innerHTML;
    if (value == "0"){
    value = " " 
    document.getElementById("output").innerHTML=value;  
    }
}

function perc() {
    removeZero()

    let value = document.getElementById("output").innerHTML;
    value = value/100
    document.getElementById("output").innerHTML=value;
}

function fordisplay(myvalue){
    removeZero()
    
    document.getElementById("output").innerHTML+=myvalue;
}

function solve() {
    removeZero()

    const equation = document.getElementById("output").innerHTML;
    let solved = eval (equation);
    document.getElementById("output").innerHTML=solved;
}