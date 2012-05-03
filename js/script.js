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
				if(!this.hovering)
					$(this).removeClass('active');
	    	});	
		}
	}
	);
	$('.callout').hoverIntent(
	{
		sensitivity:7,
		interval:100,
		over: function(){
			$(this).addClass('active');
			$(this).parent().children('.triggerElement').each(function(){
				$(this).addClass('active');
				this.hovering = true;
			});
		},
		timeout:500,
		out:function(){
			$(this).removeClass('active');
			this.hover=false;	
		}
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







