 img = "";
status = "";
objects = [];

function setup(){

    canvas = createCanvas(500, 430);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded );
    document.getElementById("status").innerHTML = "Status = Detecting Objects";
}

function preload(){
    img = loadImage("dog_cat.jpg");
}

function draw(){
    image(img ,0,0,490,450);

if(status != ""){

    for(i = 0; i < objects.length; i++){

        document.getElementById("status").innerHTML = "Status = Object Detected!";
        fill("#E81313");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + percent + "%" ,objects[i].x,objects[i].y);     
        noFill();
        stroke("#E81313");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
}
}

function modelLoaded(){
    console.log("Model loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);

    }else{console.log(results);}
    objects = results;
    
}