// var x=300;
// var y=300;
// var a=100;
// var b=100;
// let topRectSize=width/10;
// let spaceingSize=width/9;

const ease = new p5.Ease();

function draw_one_frame(cur_frac) {
	angleMode(DEGREES);
	
	noStroke();
	let backgroundColor = color("#DFF2EF");
	fill(backgroundColor);
	rect(0,0, width, height);
	////////////////////////////////////////////
	let mainColor = color("#1BBFA1"); // brown
	let backupColor = color("#F2B441"); // blush
	let DetailColor = color("#DB7F67");

	const easeMove = ease.circularInOut(cur_frac);
	const easeMoveLeft = ease.circularInOut(cur_frac);

	let orbSize = width / 30;
	let sqRadius = width / 400;
	let spacingSize = width / 14;
	let spacingSizeY = height / 5;
	let quadPosSize = sqrt(sq(orbSize)/2);
	
	let noiseColor;
	let noiseyColor; 
	let moveXMap;
	
	push();
	// translate(20,20);
	scale(1);
	drawSquare();
	pop();

	push();
	translate(-sin(60)*orbSize*1.2,orbSize*1.7);
	// rotate(180);
	drawSquare();
	pop();


	//Draw square to cube function
	function drawSquare(){
	


	//////////////////////////////////////////////
	fill(mainColor);
	
	for(let accross = 0.5; accross < width /spacingSize; accross++ ){
		for(let down = 0.1; down  < height /spacingSizeY; down++){		
			
		noiseColor = getNoiseValue(spacingSize*accross,spacingSize*down, 0.8, "noiseColor",0,1, 100 );
		noiseyLerp = lerpColor(mainColor,backupColor,noiseColor);  // https://p5js.org/reference/#/p5/lerpColor
		fill(noiseyLerp);

		let top_radius;
		let top_radiusMapRd = map(cur_frac,0.2,0.5,sqRadius*10,sqRadius);
		let top_radiusMapSq = map(cur_frac,0.7,1,sqRadius,sqRadius*10);

		///////////////////////////////////
		//Draw shade quad
		push();
		rectMode(CENTER);
		let top_rotSquare = map(cur_frac, 0.2,0.5, 0, -22.5); 
		let top_rotQuad = map(cur_frac,0.7,1, -22.5, 0);
		let top_deformSquare = map(cur_frac,0.2,0.5,0, 45);
		let top_deformQuad = map(cur_frac,0.7,1,45,0);
		let top_scaleSquare = map(cur_frac,0.2,0.5,1,0.5);
		let top_scaleQuad = map(cur_frac,0.7,1,0.5,1);
		let top_posSquare = map(cur_frac,0.2,0.5,orbSize/6,0);
		let top_posQuad = map(cur_frac,0.7,1,0,orbSize/6);
		

		if(cur_frac<0.2){
			translate(spacingSize*accross,spacingSizeY*down);
			rotate(0);
			shearX(0);
			scale(1,sqrt(1));
			top_radius = sqRadius*10;
		} else if(cur_frac>=0.2 && cur_frac<0.5){
			translate(spacingSize*accross,spacingSizeY*down);
			rotate(top_rotSquare);
			shearX(top_deformSquare);
			scale(1,sqrt(top_scaleSquare));
			top_radius = top_radiusMapRd;
		} else if(cur_frac>=0.5 && cur_frac<0.7){
			translate(spacingSize*accross,spacingSizeY*down);
			rotate(-22.5);
			shearX(45);
			scale(1,sqrt(0.5));
			top_radius = sqRadius;
		} else if(cur_frac>=0.7){
			translate(spacingSize*accross,spacingSizeY*down);
			rotate(top_rotQuad);
			shearX(top_deformQuad);
			scale(1,sqrt(top_scaleQuad));
			top_radius = top_radiusMapSq;
		}
	
		square(0,0,orbSize,top_radius);
		
		pop();

		//Draw left quad
		push();
		rectMode(CENTER);
		let left_deformSquare = map(cur_frac,0.2,0.5,0,22.5);
		let left_deformQuad = map(cur_frac,0.7,1,22.5,0);
		let left_scaleSquare = map(cur_frac,0.2,0.5,1,0.9);
		let left_scaleQuad = map(cur_frac,0.7,1,0.9,1);
		let left_moveXLeft = map(cur_frac,0.2,0.5,0,quadPosSize*0.47+top_posSquare/2);
		let left_moveXRight = map(cur_frac,0.7,1,quadPosSize*0.47+top_posSquare/2,0);
		
		if(cur_frac<0.2){
			// translate(spacingSize*accross-quadPosSize*0.47-orbSize/12,spacingSize*down+orbSize*0.52+orbSize/6);
			translate(spacingSize*accross,spacingSizeY*down+orbSize*1.2);
			shearY(0);
			scale(1,1);
			top_radius = sqRadius*10;
		} else if(cur_frac>=0.2 && cur_frac<0.5){
			translate(spacingSize*accross,spacingSizeY*down+orbSize*1.2);
			shearY(left_deformSquare);
			scale(left_scaleSquare,1);
			top_radius = top_radiusMapRd;
		} else if(cur_frac>=0.5 && cur_frac<0.7){
			translate(spacingSize*accross,spacingSizeY*down+orbSize*1.2);
			shearY(22.5);
			scale(0.9,1);
			top_radius = sqRadius;
		} else if(cur_frac>=0.7){
			translate(spacingSize*accross,spacingSizeY*down+orbSize*1.2);
			shearY(left_deformQuad);
			scale(left_scaleQuad,1);
			top_radius = top_radiusMapSq;
		}

		square(0,0,orbSize,top_radius);

		pop();
/////////////////////////////////////
		// Draw right quad
		push();
		rectMode(CENTER);
		let right_deformSquare = map(cur_frac,0.2,0.5,0,-22.5);
		let right_deformQuad = map(cur_frac,0.7,1,-22.5,0);
		let right_scaleSquare = map(cur_frac,0.2,0.5,1,0.9);
		let right_scaleQuad = map(cur_frac,0.7,1,0.9,1);
		let right_moveXLeft = map(cur_frac,0.2,0.5,0,quadPosSize*0.5+top_posSquare/2);
		let right_moveXRight = map(cur_frac,0.7,1,quadPosSize*0.5+top_posSquare/2,0);
		
		if(cur_frac<0.2){
			translate(spacingSize*accross+sin(60)*orbSize*1.2,spacingSizeY*down+orbSize*0.6);
			shearY(0);
			scale(1,1);
			top_radius = sqRadius*10;
		} else if(cur_frac>=0.2 && cur_frac<0.5){
			translate(spacingSize*accross+sin(60)*orbSize*1.2,spacingSizeY*down+orbSize*0.6);
			shearY(right_deformSquare);
			scale(right_scaleSquare,1);
			top_radius = top_radiusMapRd;
		} else if(cur_frac>=0.5 && cur_frac<0.7){
			translate(spacingSize*accross+sin(60)*orbSize*1.2,spacingSizeY*down+orbSize*0.6);
			shearY(-22.5);
			scale(0.9,1);
			top_radius = sqRadius;
		} else if(cur_frac>=0.7){
			translate(spacingSize*accross+sin(60)*orbSize*1.2,spacingSizeY*down+orbSize*0.6);
			shearY(right_deformQuad);
			scale(right_scaleQuad,1);
			top_radius = top_radiusMapSq;
		}

		square(0,0,orbSize,top_radius);

		pop();
///////////////////////////////////////


		

		//Draw top quad
		// push();
		// rectMode(CENTER);
		// let top_rotSquare = map(cur_frac, 0.2,0.5, 0, -22.5); 
		// let top_rotQuad = map(cur_frac,0.7,1, -22.5, 0);
		// let top_deformSquare = map(cur_frac,0.2,0.5,0, 45);
		// let top_deformQuad = map(cur_frac,0.7,1,45,0);
		// let top_scaleSquare = map(cur_frac,0.2,0.5,1,0.5);
		// let top_scaleQuad = map(cur_frac,0.7,1,0.5,1);
		// let top_posSquare = map(cur_frac,0.2,0.5,orbSize/6,0);
		// let top_posQuad = map(cur_frac,0.7,1,0,orbSize/6);
		

		// if(cur_frac<0.2){
		// 	translate(spacingSize*accross,spacingSizeY*down-orbSize/6);
		// 	rotate(0);
		// 	shearX(0);
		// 	scale(1,sqrt(1));
		// 	top_radius = sqRadius*10;
		// } else if(cur_frac>=0.2 && cur_frac<0.5){
		// 	translate(spacingSize*accross,spacingSizeY*down-top_posSquare);
		// 	rotate(top_rotSquare);
		// 	shearX(top_deformSquare);
		// 	scale(1,sqrt(top_scaleSquare));
		// 	top_radius = top_radiusMapRd;
		// } else if(cur_frac>=0.5 && cur_frac<0.7){
		// 	translate(spacingSize*accross,spacingSizeY*down);
		// 	rotate(-22.5);
		// 	shearX(45);
		// 	scale(1,sqrt(0.5));
		// 	top_radius = sqRadius;
		// } else if(cur_frac>=0.7){
		// 	translate(spacingSize*accross,spacingSizeY*down-top_posQuad);
		// 	rotate(top_rotQuad);
		// 	shearX(top_deformQuad);
		// 	scale(1,sqrt(top_scaleQuad));
		// 	top_radius = top_radiusMapSq;
		// }
	
		// square(0,0,quadPosSize,top_radius);
		
		// pop();
///////////////////////////////////////

		//Draw left quad
		// push();
		// rectMode(CENTER);
		// let left_deformSquare = map(cur_frac,0.2,0.5,0,22.5);
		// let left_deformQuad = map(cur_frac,0.7,1,22.5,0);
		// let left_scaleSquare = map(cur_frac,0.2,0.5,1,0.9);
		// let left_scaleQuad = map(cur_frac,0.7,1,0.9,1);
		// let left_moveXLeft = map(cur_frac,0.2,0.5,0,quadPosSize*0.47+top_posSquare/2);
		// let left_moveXRight = map(cur_frac,0.7,1,quadPosSize*0.47+top_posSquare/2,0);
		
		// if(cur_frac<0.2){
		// 	// translate(spacingSize*accross-quadPosSize*0.47-orbSize/12,spacingSize*down+orbSize*0.52+orbSize/6);
		// 	translate(spacingSize*accross,spacingSizeY*down+orbSize*0.52+orbSize/6);
		// 	shearY(0);
		// 	scale(1,1);
		// 	top_radius = sqRadius*10;
		// } else if(cur_frac>=0.2 && cur_frac<0.5){
		// 	translate(spacingSize*accross-left_moveXLeft,spacingSizeY*down+orbSize*0.52+top_posSquare);
		// 	shearY(left_deformSquare);
		// 	scale(left_scaleSquare,1);
		// 	top_radius = top_radiusMapRd;
		// } else if(cur_frac>=0.5 && cur_frac<0.7){
		// 	translate(spacingSize*accross-quadPosSize*0.47,spacingSizeY*down+orbSize*0.52);
		// 	shearY(22.5);
		// 	scale(0.9,1);
		// 	top_radius = sqRadius;
		// } else if(cur_frac>=0.7){
		// 	translate(spacingSize*accross-left_moveXRight,spacingSizeY*down+orbSize*0.52+top_posQuad);
		// 	shearY(left_deformQuad);
		// 	scale(left_scaleQuad,1);
		// 	top_radius = top_radiusMapSq;
		// }

		// square(0,0,quadPosSize,top_radius);

		// pop();
///////////////////////////////////////
		//Draw right quad
		// push();
		// rectMode(CENTER);
		// let right_deformSquare = map(cur_frac,0.2,0.5,0,-22.5);
		// let right_deformQuad = map(cur_frac,0.7,1,-22.5,0);
		// let right_scaleSquare = map(cur_frac,0.2,0.5,1,0.9);
		// let right_scaleQuad = map(cur_frac,0.7,1,0.9,1);
		// let right_moveXLeft = map(cur_frac,0.2,0.5,0,quadPosSize*0.5+top_posSquare/2);
		// let right_moveXRight = map(cur_frac,0.7,1,quadPosSize*0.5+top_posSquare/2,0);
		
		// if(cur_frac<0.2){
		// 	translate(spacingSize*accross+orbSize*0.715,spacingSizeY*down+orbSize*0.5-orbSize/6);
		// 	shearY(0);
		// 	scale(1,1);
		// 	top_radius = sqRadius*10;
		// } else if(cur_frac>=0.2 && cur_frac<0.5){
		// 	translate(spacingSize*accross+orbSize*0.715-right_moveXLeft,spacingSizeY*down+orbSize*0.5-top_posSquare);
		// 	shearY(right_deformSquare);
		// 	scale(right_scaleSquare,1);
		// 	top_radius = top_radiusMapRd;
		// } else if(cur_frac>=0.5 && cur_frac<0.7){
		// 	translate(spacingSize*accross+orbSize*0.715-quadPosSize*0.5,spacingSizeY*down+orbSize*0.5+0);
		// 	shearY(-22.5);
		// 	scale(0.9,1);
		// 	top_radius = sqRadius;
		// } else if(cur_frac>=0.7){
		// 	translate(spacingSize*accross+orbSize*0.715-right_moveXRight,spacingSizeY*down+orbSize*0.5-top_posQuad);
		// 	shearY(right_deformQuad);
		// 	scale(right_scaleQuad,1);
		// 	top_radius = top_radiusMapSq;
		// }

		// square(0,0,quadPosSize,top_radius);

		// pop();
/////////////////////////////////////////

			// if(cur_frac > 0.3 && noiseColor < 0.3){
			// 	fill(225)
			// 	moveXMap = map(cur_frac,0.3, 1, spacingSize*accross, spacingSize*(accross+1))
			// 	ellipse(moveXMap,spacingSize*down,orbSize/2) 
			// }
		}
		
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
