song1="";
song2="";
function preload(){
    song1=loadSound("Maroon 5 - Memories (Official Video).mp3");
    song2=loadSound("Ed Sheeran - Shape of You (Official Music Video).mp3");
}
function setup(){
    canvas=createCanvas(350,350);
    video=createCapture(VIDEO);
    video.hide();
    canvas.center();
    canvas.position(450,200)
}
function draw(){
    image(video,0,0,600,500);
}