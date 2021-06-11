var buttonTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");

outputDiv.innerText = "Your banana translation will come here!";


function clickHandler(){
    outputDiv.innerText = textInput.value;
}

buttonTranslate.addEventListener("click", clickHandler);