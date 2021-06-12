// API
https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json

var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json"
var buttonTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");

outputDiv.innerText = "Your banana translation will come here!";

function getTranslationURL(text) {
    return serverURL + "?text=" + text;
}


function clickHandler(){
    // outputDiv.innerText = textInput.value;
    
    var inputText = textInput.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText})
    .catch(errorHandler => console.log("error occurred" + error));

    outputDiv.style.color = "black";
}

buttonTranslate.addEventListener("click", clickHandler);