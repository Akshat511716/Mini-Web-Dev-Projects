const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

//Tags
const greetings = [
    'I am good!',
    'I am fine, How are you sir?',
    'I am not in the condition to tell you this!'
];


// Start Voice Recognition
recognition.onstart = function(){
    console.log("Voice is activated");
}

recognition.onresult = function(event){
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
}

btn.addEventListener('click', function(){
    recognition.start();
})

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 0.1;

    speech.text = "Sorry! I don't understand what you are saying";
    
    if(message.includes('how are you')){
        const textToSpeak = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = textToSpeak;
    }

    window.speechSynthesis.speak(speech);
}

function getRandomNumber(tagsUsed){
    return Math.floor(Math.random() * tagsUsed.length());
}