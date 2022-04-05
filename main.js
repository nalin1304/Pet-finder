prediction= "";
Webcam.set({
width: 350,
height:300,
image_format:'png',
png_quality: 100
});
Webcam.attach("#camera");
function capture(){
  Webcam.snap(function (selfie){
document.getElementById("result").innerHTML="<img id= 'img'src="+selfie+">";


  });
  

}
console.log("ml5 version",ml5.version);
tm_model= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/NWOnEt52l/model.json",modelLoaded);//Model link needs to be pasted here//
function modelLoaded(){
    console.log("Model is loaded");

}
function predict(){
img= document.getElementById("img");
tm_model.classify(img,gotResult);

}
function gotResult(error,result){
if(error){
    console.error(error);
}
else{
console.log(result);


speak();
if(result[0].label=="Class 1"){
    document.getElementById("emoji").innerHTML="Beth";
    
}
if(result[0].label=="Class 2"){
    document.getElementById("emoji").innerHTML="carlson";
    
}

}
}
