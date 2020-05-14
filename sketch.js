var pillar1, pillar2, pillar3, pillar4, pillar5, pillar6, pillar7;
var triangle1, triangle2, triangle3;

/*function preload(){
  triangle = loadImage("");
}*/

function setup() {
  createCanvas(1200,1200);
  pillar1 = createSprite(200,300,10,400);
  pillar2 = createSprite(240,375,50,250);

  triangle1 = createSprite(240,220,50,50);

  pillar3 = createSprite(295,410,47,180);
  pillar4 = createSprite(380,401,110,200);

  pillar5 = createSprite(465,410,47,180);
  triangle2 = createSprite(380,255,100,80);

  triangle3 = createSprite(520,220,50,50);
  pillar6 = createSprite(520,375,50,250);
  pillar7 = createSprite(560,300,10,400);

}

function draw() {
  background(0,0,0);  
  drawSprites();
}