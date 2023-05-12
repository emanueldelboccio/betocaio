var backgroundimg,caio,beto
var caioimg,betoimg
function preload(){
caioimg = loadImage("caio.png")
betoimg = loadImage("beto.png")
backgroundimg = loadImage ("cel.jpg")
}
function setup(){
createCanvas(1900,1333)
beto =createSprite(100,1222,50,50)
beto.addImage(betoimg);
beto.scale = 0.5
caio =createSprite(300,1222,50,50)
caio.addImage(caioimg);
caio.scale = 0.5
}
function draw(){
background(backgroundimg)
drawSprites()
}
