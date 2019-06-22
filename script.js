const slider = (selector, obj) => {
	var isDraging 	= false,		
		isDraging2 	= false,		
		max 		= obj.maxValue,
		min 		= obj.minValue,
		down 		= 'mousedown',
		up 			= 'mouseup',
		move 		= 'mousemove',
		style = {
			maxWidth: '600px',
			width: '100%',			
			height: '10px',
			background: '#ddd',
			position: 'relative',
			borderRadius: '20px'
		},
		div = `<div class="slide1" draggable="true"></div>
		<div class="slide2"></div>
		<p class="min" style="color : ${obj.fontColor}; font-size: ${obj.fontSize} "></p>
		<p class="max" style="color : ${obj.fontColor}; font-size: ${obj.fontSize} "></p>
		<input type='hidden' class="minimum" name="minimum" value=${min} />
		<input type='hidden' class="maximum" name="maximum" value=${max} />`;

		if ("ontouchstart" in document.documentElement){
			down = 'touchstart';
			up = 'touchend';
			up = 'touchmove';
			alert("your device is Touched");
		}


	const slider = document.querySelectorAll(selector);
	
	slider.forEach((id, index) => {
			id.setAttribute('style', `max-width: ${obj.maxWidth}; border: ${obj.barBorder}; width: 100%; height: 10px; background: ${obj.barColor}; position: relative; border-radius: 20px;`);
			id.innerHTML = div;
		let slide1 	= id.querySelector('.slide1'),
			slide2 	= id.querySelector('.slide2'),
			width 	= id.clientWidth;

			slide1.style.background = obj.pointerColor;
			slide1.style.border = obj.pointerBorder;
			slide2.style.background = obj.pointerColor;
			slide2.style.border = obj.pointerBorder;

		id.querySelector('.max').innerHTML = max;
		id.querySelector('.min').innerHTML = min;

			var x 			= null,
				count 		= 0,
				x2 			= null,
				slid1_val 	= 0,		
				slid1_val2 	= 0,
				slid2_val 	= max,		
				slid2_val2 	= max,
				count2 		= width;

			slide1.addEventListener(down, (event) => {
				event.preventDefault();
				event.stopPropagation();
				x = event.clientX;				
				isDraging = true;
				event.target.classList.add('active');
			});			
			window.addEventListener(up, (event2) => {				
				event2.preventDefault();
				event2.stopPropagation();							
				isDraging 	= false;
				slid1_val2 	= slid1_val;
				slide1.classList.remove('active');				
			});
			window.addEventListener(move, (e) => {				
				if(isDraging){	
					count = e.clientX + slid1_val2 * width / max - x;					
					if(count < 0){
						count = 0;
					} else if(count > width) {
						count = width;
					} else if(count > count2 - 60){
						count = count2 - 60;
					}
				}
				if(slide1.classList.contains('active')){
					slid1_val 	= Math.floor(max / width * count);
					id.querySelector('.min').innerHTML = slid1_val;
					id.querySelector('.minimum').value = slid1_val;
					id.querySelector('.active').style.left = count +'px';				

				}
			});	
		
			//********************************			
			slide2.addEventListener(down, (event6) => {
				event6.preventDefault();
				event6.stopPropagation();
				x2 = event.clientX;
				isDraging2 = true;
				event6.target.classList.add('active2');					
			});

			window.addEventListener(up, (event5) => {				
				event5.preventDefault();
				event5.stopPropagation();							
				slide2.classList.remove('active2');	
				isDraging2 = false;
				slid2_val2 = slide2_val;
			});			

			window.addEventListener(move, (el) => {			
				el.preventDefault();
				el.stopPropagation();
				if(isDraging2){
					count2 = el.clientX + slid2_val2 * width / max - x2;

					if(count2 < 0){
						count2 = 0;
					} else if(count2 > width) {
						count2 = width;
					} else if(count2 < count + 60){
						count2 = count + 60;
					}
				}
				if(slide2.classList.contains('active2')){
					slide2_val = Math.floor(max / width * count2);
					id.querySelector('.max').innerHTML = slide2_val;
					id.querySelector('.maximum').value = slide2_val;
					id.querySelector('.active2').style.left = count2 - 30 +'px';
				}
			});			
			
	});
}
