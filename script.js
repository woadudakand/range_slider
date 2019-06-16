const slider = (selector, obj) => {
	var isDraging = false;		
	var isDraging2 = false;		
	const slider = document.querySelectorAll(selector);
	
	var max = obj.max,
		min = obj.min;
	slider.forEach((id) => {
		let slide1 = id.querySelector('.slide1'),
			slide2 = id.querySelector('.slide2'),
			width = id.clientWidth;
			
		id.querySelector('.max').innerHTML = max;
		id.querySelector('.min').innerHTML = min;

			var x = null;
			var count = 0;
			var x2 = null;
			var count2 = width;

			slide1.addEventListener('mousedown', (event) => {
				event.preventDefault();
				event.stopPropagation();
				x = event.clientX;				
				isDraging = true;				
				//event.target.style.left = count +'px';				
			});

			slide1.addEventListener('mouseup', (event2) => {				
				event2.preventDefault();
				event2.stopPropagation();							
				isDraging = false;				
			});

			window.addEventListener('mouseup', (event2) => {				
				event2.preventDefault();
				event2.stopPropagation();							
				isDraging = false;				
			});

			slide1.addEventListener('mousemove', (e) => {
				
				if(isDraging){	
					count = e.clientX - x;
					//console.log(count3);
					if(count < 0){
						count = 0;
					} else if(count > width) {
						count = width;
					} else if(count > count2-30){
						count = count2-30;
					}
				}
				id.querySelector('.min').innerHTML = Math.floor(max / width * count);
				e.target.style.left = count +'px';				
			});	
		/*
			//********************************
			slide2.addEventListener('mousedown', (event6) => {
				event6.preventDefault();
				event6.stopPropagation();
				x2 = event.clientX;
				isDraging2 = true;
				//event.target.style.left = count +'px';				
			});

			slide2.addEventListener('mouseup', (event5) => {				
				event5.preventDefault();
				event5.stopPropagation();							
				isDraging2 = false;
			});

			slide2.addEventListener('mouseleave', (event4) => {				
				event4.preventDefault();
				event4.stopPropagation();							
				isDraging2 = false;
			});

			slide2.addEventListener('mousemove', (el) => {			
				el.preventDefault();
				el.stopPropagation();
				if(isDraging2){

				count2 += el.clientX - x2;
					if(count2 < 0){
						count2 = 0;
					} else if(count2 > width) {
						count2 = width;
					} else if(count2 < count+30){
						count2 = count+30;
					}
				}
				id.querySelector('.max').innerHTML = Math.floor(max / width * count2);
				el.target.style.left = count2 +'px';
			});

			*/

	});
}
