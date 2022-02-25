var content;

speechrec = window.webkitSpeechRecognition
speech1 = new speechrec

function startup(){
    speech1.start()

}

speech1.onresult = function(sp1){
    console.log(sp1)
    content = sp1.results[0][0].transcript;
    if(content == "selfie"){
        speaking()
    }
}

function speaking(){
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);


    setTimeout(function()
    {
        img_id = "selfie1";
        take_snapshot();
        speak_data = "Taking your next Selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);

      }, 5000);

    setTimeout(function()
    {
        img_id = "selfie2";
        take_snapshot();
        speak_data = "Taking your next Selfie in 15 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
       
    }, 10000);

    setTimeout(function()
    {
        img_id = "selfie3";
        take_snapshot();

    }, 15000);

}

 
camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});

function take_snapshot(){
    Webcam.snap(function(pic){
        if(img_id == "selfie1" ){
            document.getElementById("result1").innerHTML = "<img src='" +pic+"'>"
        }
        if(img_id == "selfie2" ){
            document.getElementById("result2").innerHTML = "<img src='" +pic+"'>"
        }
        if(img_id == "selfie3" ){
            document.getElementById("result3").innerHTML = "<img src='" +pic+"'>"
        }
    })
}