const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const speech_recognition = window.SpeechRecognition | window.webkitSpeechRecognition;
const recognition = new speech_recognition();

// Start Voice Recognition
recognition.onstart = function(){
    console.log()
}

