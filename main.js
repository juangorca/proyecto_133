x = 0;
y = 0;

screen_width = 0;
screen_heigth = 0;



draw_apple = "";

apple = "";

speak_data = "";

to_number = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "El sistema está escuchando, por favor habla";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "El comando ha sido reconocido: " + content; 
    to_number = Number(content);
    
}

function preload(){
      apple = loadImage("apple.png")
  
}


function setup() {
  if(Number.isInteger(to_number))
  {
    document.getElementById("status").innerHTML = "Started drawing apple "; 
    draw_apple = "set";
  }
  else
  {
    document.getElementById("status").innerHTML = "The speech has not recognized a number "; 
  }
}

function draw() {
  if(draw_apple == "set")
  {
    for(var i = 1 ; i <= to_number; i++){
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);
      image(apple, x, y, 50, 50);
    }
    document.getElementById("status").innerHTML = to_number + " manzanas dibujadas";
    speak_data = to_number + "manzanas dibujadas";
    speak();
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
