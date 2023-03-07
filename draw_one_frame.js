// var x=300;
// var y=300;
// var a=100;
// var b=100;
// let topRectSize=width/10;
// let spaceingSize=width/9;



function draw_one_frame(cur_frac) {
	angleMode(DEGREES);
	
	noStroke();
	let backgroundColor = color("#dbbea1");
	fill(backgroundColor);
	rect(0,0, width, height);
	////////////////////////////////////////////
	let mainColor = color("#3F292B"); // brown
	let backupColor = color("#D34F73"); // blush
	let DetailColor = color("#DB7F67");
	
	
	let noiseColor;
	let noiseyColor; 
	let moveXMap;
	
	
	let orbSize = width / 20;
	let spacingSize = width / 12;
	let quadPosSize = sqrt(sq(orbSize)/2);

	let t=1;
	
	//////////////////////////////////////////////
	fill(mainColor);
	
	for(let accross = 0.5; accross < width /spacingSize; accross++ ){
		for(let down = 0.2; down  < height /spacingSize; down++){		
			
		noiseColor = getNoiseValue(spacingSize*accross,spacingSize*down, 0.8, "noiseColor",0,1, 200 );
		noiseyLerp = lerpColor(mainColor,backupColor,noiseColor);  // https://p5js.org/reference/#/p5/lerpColor
		fill(noiseyLerp);
		push();
		rectMode(CENTER);
		translate(spacingSize*accross,spacingSize*down*1);
		// ellipse(spacingSize*accross,spacingSize*down ,orbSize)
		// if(frameCount%3=0){
			rotate(cos(frameCount)*30 );
		// }
	
		// rect(0,0,orbSize,orbSize);

		quad(-quadPosSize,0,
			0,-quadPosSize/2,
			quadPosSize,0,
			0,quadPosSize/2);

		pop();

		push();
		translate(spacingSize*accross,spacingSize*down*1);
		quad(-quadPosSize,orbSize*0.08,
			-orbSize*0.04,orbSize*0.08+quadPosSize*0.5,
			-orbSize*0.04,orbSize*0.08+quadPosSize*1.5,
			-quadPosSize,orbSize*0.08+quadPosSize);
		pop();

		push();
		translate(spacingSize*accross,spacingSize*down*1);
		quad(quadPosSize,orbSize*0.08,
			orbSize*0.04,orbSize*0.08+quadPosSize*0.5,
			orbSize*0.04,orbSize*0.08+quadPosSize*1.5,
			quadPosSize,orbSize*0.08+quadPosSize);
		pop();


			// if(cur_frac > 0.3 && noiseColor < 0.3){
			// 	fill(225)
			// 	moveXMap = map(cur_frac,0.3, 1, spacingSize*accross, spacingSize*(accross+1))
			// 	ellipse(moveXMap,spacingSize*down,orbSize/2) 
			// }
		}
		
	}
	
	}




//   //background(255);
//   x+=2;
//   y+=2;
// 	a-=2;
// 	b-=2;
// 	strokeWeight(1);
//   translate(width/2, height/2);
//   for(var i=0;i<15;i++){
// 	  for(var k=0;k<20;k++){
// 		stroke(255,255,255);
//     rotate(PI / 12.0);
// 	  fill(255,255-i*10,255-k*10);
//   	line(a%100,b%100,x%300,y%300);
// 	  ellipse((x+i*20)%width,(y+k*20)%height,i+4,i+4);
// 		drawtriangle((a-i*20)%width,(b-k*20)%height,k/8);
// 		rect(x%width, y%height, k+10, k+10);
// 		fill(0,i*10,255-k*10);
// 		ellipse((x-i*20)%width,(y-k*20)%height,i+3,i+3);
// 		rotate(PI / 24.0);
// 		fill(255-(i+k)*5,(i+k)*7,i*20);
// 		drawtriangle((a+i*20)%width,(b+k*20)%height,k/8);
// 		rect(a%width, b%height, k+5, k+5);
// 		drawflower(k,x);
// 	  }
//   }

// }

// function drawtriangle(x,y,r){
// 	triangle(x, y, x+7*r, y-13.75*r, x+14*r, y);
// }

// function drawflower(i,k){
// 		if(i%2==1){
// 			fill(255,(k*0.4)%255,30);
// 			stroke(k%255,255,0);
// 			arc(0,0,150+i+150*sin(k*PI/24),150,0,PI / 40);
// 		}
// 		else{
// 			fill(k%255,0,255);
// 			stroke(0,(k*0.4)%255,255);
// 			arc(0,0,(100+100*cos(k*PI/24))%255,50,0,PI / 20);
// 		}
// }
