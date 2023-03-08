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
	let topSqRot = map(cur_frac, 0, 1, 0, 45);

	let topQuad_posX = [
		-quadPosSize,
		-quadPosSize,
		-quadPosSize,
		 0,
		 quadPosSize,
		 quadPosSize,
		 quadPosSize,
		 0
	   ]
	
	let topQuad_posY = [
		0,
		quadPosSize/2,
		quadPosSize,
		quadPosSize,
		quadPosSize,
		quadPosSize/2,
		0,
		0
	   ]

	//////////////////////////////////////////////
	fill(mainColor);
	
	for(let accross = 0.5; accross < width /spacingSize; accross++ ){
		for(let down = 0.2; down  < height /spacingSize; down++){		
			
		noiseColor = getNoiseValue(spacingSize*accross,spacingSize*down, 0.8, "noiseColor",0,1, 200 );
		noiseyLerp = lerpColor(mainColor,backupColor,noiseColor);  // https://p5js.org/reference/#/p5/lerpColor
		fill(noiseyLerp);

		push();
		rectMode(CENTER);
		let top_rotQuad = map(cur_frac*2, 0,1, -22.5, 0); 
		let top_rotSquare = map(cur_frac*2, 1,2, 0,-22.5);
		let top_deformQuad = map(cur_frac*2,0,1,45,0);
		let top_deformSquare = map(cur_frac*2,1,2,0,45);
		let top_scaleQuad = map(cur_frac*2,0,1,0.5,1);
		let top_scaleSquare = map(cur_frac*2,1,2,1,0.5);
		let top_posQuad = map(cur_frac*2,0,1,0,orbSize/6);
		let top_posQSquare = map(cur_frac*2,1,2,orbSize/6,0);

		
		// ellipse(spacingSize*accross,spacingSize*down ,orbSize)
		if(cur_frac<=0.5){
			translate(spacingSize*accross,spacingSize*down-top_posQuad);
			rotate(top_rotQuad);
			shearX(top_deformQuad);
			scale(1,sqrt(top_scaleQuad));
		} else{
			translate(spacingSize*accross,spacingSize*down-top_posQSquare);
			rotate(top_rotSquare);
			shearX(top_deformSquare);
			scale(1,sqrt(top_scaleSquare));
		}
			
		square(0,0,quadPosSize);

		// for(let i=0; i<topQuad_posX.length-1; i++) {
		// 	let top_rotQuad = map(cur_frac, 0, 1, topQuad_posX[i], topQuad_posX[i+1]);
		// 	let top_rotSquare = map(cur_frac, 0, 1, topQuad_posY[i], topQuad_posY[i+1]);
		// 	quad();
		//   }

		// quad(-quadPosSize,0,
		// 	0,-quadPosSize/2,
		// 	quadPosSize,0,
		// 	0,quadPosSize/2);

		pop();

		push();
		rectMode(CENTER);
		let left_deformQuad = map(cur_frac*2,0,1,22.5,0);
		let left_deformSquare = map(cur_frac*2,1,2,0,22.5);
		let left_scaleQuad = map(cur_frac*2,0,1,0.9,1);
		let left_scaleSquare = map(cur_frac*2,1,2,1,0.9);
		

		if(cur_frac<=0.5){
			translate(spacingSize*accross-quadPosSize*0.47-top_posQuad/2,spacingSize*down+orbSize*0.52+top_posQuad);
			// rotate(-22.5);
			shearY(left_deformQuad);
			scale(left_scaleQuad,1);
		} else{
			translate(spacingSize*accross-quadPosSize*0.47-top_posQSquare/2,spacingSize*down+orbSize*0.52+top_posQSquare);
			shearY(left_deformSquare);
			scale(left_scaleSquare,1);
		}
	
		square(0,0,quadPosSize);


		// quad(-quadPosSize,orbSize*0.08,
		// 	-orbSize*0.04,orbSize*0.08+quadPosSize*0.5,
		// 	-orbSize*0.04,orbSize*0.08+quadPosSize*1.5,
		// 	-quadPosSize,orbSize*0.08+quadPosSize);
		pop();

		push();
		rectMode(CENTER);
		let right_deformQuad = map(cur_frac*2,0,1,-22.5,0);
		let right_deformSquare = map(cur_frac*2,1,2,0,-22.5);
		let right_scaleQuad = map(cur_frac*2,0,1,0.9,1);
		let right_scaleSquare = map(cur_frac*2,1,2,1,0.9);
		

		if(cur_frac<=0.5){
			translate(spacingSize*accross+quadPosSize*0.47+top_posQuad/2,spacingSize*down+orbSize*0.52+top_posQuad);
			// rotate(-22.5);
			shearY(right_deformQuad);
			scale(right_scaleQuad,1);
		} else{
			translate(spacingSize*accross+quadPosSize*0.47+top_posQSquare/2,spacingSize*down+orbSize*0.52+top_posQSquare);
			shearY(right_deformSquare);
			scale(right_scaleSquare,1);
		}
	
		square(0,0,quadPosSize);

		// quad(quadPosSize,orbSize*0.08,
		// 	orbSize*0.04,orbSize*0.08+quadPosSize*0.5,
		// 	orbSize*0.04,orbSize*0.08+quadPosSize*1.5,
		// 	quadPosSize,orbSize*0.08+quadPosSize);
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
