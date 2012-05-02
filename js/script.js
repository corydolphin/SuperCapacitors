/* Author:

*/
$(document).ready(function(){

	$('.btn').qtip();

	$('#nowButton').bind('click',function(){$(this).parent().children().removeClass('active'); $(this).addClass('active');});
	$('#nearButton').bind('click',function(){$(this).parent().children().removeClass('active'); $(this).addClass('active');});
	$('#farButton').bind('click',function(){$(this).parent().children().removeClass('active'); $(this).addClass('active');});
	console.log('working');


	
	$('.infographicElement').hover(
		function(){
	 		$(this).children('.calloutContainer').children('.triggerElement').each(function(){
	 			$(this).addClass('active');	
	 			
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
				$(this).addClass('active');	
			});

		},
	    function(){
			$(this).parent().children('.callout').each(function(){
				$(this).removeClass('active');	
	    	});	
		}
	);
	$('.callout').hover(
		function(){
			$(this).addClass('active');	
		},
		function(){
			$(this).removeClass('active');	
		}
	);

});







