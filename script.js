const slider = (selector, obj) => {
	var isDraging 	= false,		
		isDraging2 	= false,		
		max 		= obj.max,
		min 		= obj.min;

	const slider = document.querySelectorAll(selector);
	
	slider.forEach((id) => {
		let slide1 	= id.querySelector('.slide1'),
			slide2 	= id.querySelector('.slide2'),
			width 	= id.clientWidth;
			
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

			slide1.addEventListener('mousedown', (event) => {
				event.preventDefault();
				event.stopPropagation();
				x = event.clientX;				
				isDraging = true;
			});			
			window.addEventListener('mouseup', (event2) => {				
				event2.preventDefault();
				event2.stopPropagation();							
				isDraging 	= false;
				slid1_val2 	= slid1_val;				
			});
			window.addEventListener('mousemove', (e) => {				
				if(isDraging){	
					count = e.clientX + slid1_val2 * width / max - x;					
					if(count < 0){
						count = 0;
					} else if(count > width) {
						count = width;
					} else if(count > count2-30){
						count = count2-30;
					}
				}
				slid1_val 	= Math.floor(max / width * count);
				id.querySelector('.min').innerHTML = slid1_val;
				slide1.style.left = count +'px';				
			});	
		
			//********************************			
			slide2.addEventListener('mousedown', (event6) => {
				event6.preventDefault();
				event6.stopPropagation();
				x2 = event.clientX;
				isDraging2 = true;							
			});

			window.addEventListener('mouseup', (event5) => {				
				event5.preventDefault();
				event5.stopPropagation();							
				isDraging2 = false;
				slid2_val2 = slide2_val;
			});			

			window.addEventListener('mousemove', (el) => {			
				el.preventDefault();
				el.stopPropagation();
				if(isDraging2){
					count2 = el.clientX + slid2_val2 * width / max - x2;

					if(count2 < 0){
						count2 = 0;
					} else if(count2 > width) {
						count2 = width;
					} else if(count2 < count+30){
						count2 = count + 30;
					}
				}
				slide2_val = Math.floor(max / width * count2);
				id.querySelector('.max').innerHTML = slide2_val;
				slide2.style.left = count2 +'px';
			});			
			
	});
}
