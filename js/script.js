/* Author:

*/
$(document).ready(function(){

	$('#nowButton').bind('click',function(){$(this).parent().children().removeClass('active'); $(this).addClass('active');});
	$('#nearButton').bind('click',function(){$(this).parent().children().removeClass('active'); $(this).addClass('active');});
	$('#farButton').bind('click',function(){$(this).parent().children().removeClass('active'); $(this).addClass('active');});

	$('.infographicElement').hoverIntent(
	{
		sensitivity: 7,
		interval: 100,
		over: function(){
	 		$(this).children('.calloutContainer').children('.triggerElement').each(function(){
	 			$(this).addClass('active');	
	 			
	 		});
		},
		timeout:1000,
	    out: function(){
	 		$(this).children('.calloutContainer').children('.triggerElement').each(function(){
	 			
	 			$(this).removeClass('active');
	 		});
		}
	}
	);
	 
	$('.triggerElement').hoverIntent(
	{
		sensitivity: 7,
		interval: 100,
		over:function(){
			$(this).parent().children('.callout').each(function(){
				$(this).addClass('active');	
			});

		},
		timeout:1000,
	    out:function(){
			$(this).parent().children('.callout').each(function(){
				$(this).removeClass('active');	
	    	});	
		}
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

	modalGetter = function(id){
		$.get('./modalContent/'+ id + '.html', function(html){
			$('#' + String(id)).append(html);	
		});
	};
	$('.modal.hide.in').each(function(){
		
		modalGetter(this.id);
	});



});







