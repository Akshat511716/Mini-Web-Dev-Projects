const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const speech_recognition = window.SpeechRecognition | window.webkitSpeechRecognition;
const recognition = new speech_recognition();

// Start Voice Recognition
recognition.onstart = function(){
    console.log("voice is activated");
}

recognition.onresult = function(event){
    console.log(event);
}

btn.addEventListener('click', function(){
    recognition.start();
})

