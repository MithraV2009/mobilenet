function setup() {
  canvas = createCanvas(200, 200);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier('MobileNet',mobileloded);
}
function mobileloded() {
  console.log("model loded");
}  
function draw(){
  image(video,0,0,200,200);
  classifier.classify(video,gotresult);
}
var previus_result="";
function gotresult(error,results){
  if (error){
    console.error(error);
  }
  else{
if ((results[0].confidence>0.5)&&(previus_result != results[0].label)){
  console.log(results);
  previus_result=result[0].label;
  var synth=window.speechSynthesis;
  speak_data="object detected is-"+results[0].label;
  var utterthis=new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterthis);
  document.getElementById("result_object_name").innerHTML=results[0].label;
  document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(2);
}
  }
}