noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

function setup(){
video=createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(550,550);
canvas.position(560,150);
poseNet=ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotPoses);
}
function draw(){
background("blue");
document.getElementById("square_side").innerHTML="width and height will be= " +difference+"px";
stroke("black");
square(noseX,noseY,difference);
}
function modelloaded(){
console.log("poseNet is initialized");
}
function gotPoses(results){
if(results.length>0)
{console.log(results)};
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log("noseX= "+noseX+" noseY= "+noseY);

leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;
difference=floor(leftWristX-rightWristX);

console.log("leftWristX= "+leftWristX+"rightWristX= "+rightWristX+"difference= "+difference);
}
