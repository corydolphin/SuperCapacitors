/* Author:

*/
$(document).ready(function(){


	console.log('working');
	$('.infographicElement').hover(
		function(){
	 		$(this).children('.calloutContainer').children('.triggerElement').each(function(){
	 			$(this).addClass('active');	
	 			//this.style.opacity = 0.5;
	 		});
		},
	    function(){
	 		$(this).children('.calloutContainer').children('.triggerElement').each(function(){
	 			$(this).removeClass('active');
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
		}
	);
});







