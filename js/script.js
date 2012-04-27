/* Author:

*/
$(document).ready(function(){


	console.log('working');
	$('.infographicElement').hover(
		function(){
	 		$(this).children('.triggerElement').each(function(){
	 			this.style.opacity = 0.9;
	 		});
		},
	    function(){
			$(this).children('.triggerElement').each(function(){
	 			this.style.opacity = 0.2;
	 		});
		}
	);
	 		
	$('.triggerElement').hover(
		function(){
			$(this).parent().children('.callout').each(function(){
				$(this).show();
			});

		},
	    function(){
			$(this).parent().children('.callout').each(function(){
				$(this).hide();
	    	});	
		});
});







