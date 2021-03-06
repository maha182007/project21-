var bullet, wall, speed, weight, thickness; 
var deformation = 0;
var showColor = "green";

function setup() {
  createCanvas(1600, 400);

	speed=random(223,321)
	weight=random(30,52)
    thickness = random(22,83)

	bullet=createSprite(50, 200, 50,50);   

	bullet.velocityX = speed;

	bullet.shapeColor=color(255);
  
  	wall=createSprite(1200,200, thickness, height/2)
  	wall.shapeColor=rgb(80,80,80)
}


function draw() {
  background(0);

  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
  	bullet.velocityX=0;
      deformation=0.5 * weight * speed* speed/22500;
      
	if(deformation>180)
	{
        bullet.shapeColor=rgb(255,0,0);
        showColor = "red";
	}

	if(deformation<180 && deformation>100)
	{
        bullet.shapeColor = rgb(230,230,0);
        showColor = "yellow";
	}

	if(deformation<100)
	{
        bullet.shapeColor=rgb(0,255,0);
        showColor = "green";
	}
  }  

  drawSprites();
    fill(showColor);
    textSize(20);
    text("Deformation = " + deformation, 100,40);
}

function hasCollided(Lbullet,Lwall)
{
	bulletRightEdge=lbullet.x+lbullet.width;
	wallLeftEdge=lwall.x;
	if(bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
		return false;
	
}

if(hasCollided(bullet, wall))
{bullet. velocityx-0;
var damage=0.5 * weight * speed* speed/ (thickness *thickness *thickness);

(damage>10)
{wall. shapeColor=color (255, 0,0) ;}

if (damage<10)
{
wall . shapeColor=color (0, 255,0) ;
}

}