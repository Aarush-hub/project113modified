function setup(){
canvas= createCanvas(640,450);
canvas.position(100,260);
video= createCapture(VIDEO);
video.hide();
}

function draw(){
image(video,150,70,350,300);
fill(255,0,0);
stroke(255,0,0);
circle(30,30,80,);
circle(600,30,80);
circle(30,400,80);
circle(600,400,80);
fill(0,128,0);
stroke(0,128,0);
rect(65,10,500,50);
rect(65,370,500,50);
rect(10,65,50,300);
rect(570,65,50,300);
}