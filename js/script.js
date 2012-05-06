/* Author:

*/
$(document).ready(function(){

	$('#nowButton').bind('click',function(){
		$(this).parent().children().removeClass('active');
		$(this).addClass('active');
		$('#old').show();
		$('#near').hide();
		$('#future').hide();
	});
	$('#nearButton').bind('click',function(){
		$(this).parent().children().removeClass('active'); 
		$(this).addClass('active');
		$('#old').hide();
		$('#near').show();
		$('#future').hide();
	});
	
	$('#farButton').bind('click',function(){
		$(this).parent().children().removeClass('active'); 
		$(this).addClass('active');
		$('#old').hide();
		$('#near').hide();
		$('#future').show();
	
	});

	$('.infographicElement').hover(
		function(){
	 		$(this).children('.calloutContainer').children('.triggerElement').each(function(){
	 			$(this).addClass('active');	
	 		});
		},
		function(){
			that = this;
	 		setTimeout(function(){
		 		$(that).children('.calloutContainer').children('.triggerElement').each(function(){
		 			$(this).removeClass('active');
		 		});
	 		},1000); //wait 1 second before hiding the trigger after mouse leaves the infographic element div
		}
	);
	 
	$('.triggerElement').hover(
	
		function(){
			$(this).data("hover",true);
			$(this).parent().children('.callout').each(function(){
				$(this).addClass('active');	
			});
		},
	    function(){
	    	var that = this;
	    	$(this).data("hover",false);
	    	
	    	setTimeout(function(){
				$(that).parent().children('.callout').each(function(){
					if(! $(this).data("hover")){
						$(this).removeClass('active');
					}
				});
	    	},1000);	
		}
	);
	$('.callout').hover(
		function(){
			$(this).addClass('active');
			$(this).data("hover",true);
			$(this).parent().children('.triggerElement').each(function(){
				$(this).addClass('active');
			});
		},
		function(){
			$(this).data("hover",false);
			var that = this;
			setTimeout(function(){$(that).removeClass('active');},500);
        }
	);

	modalGetter = function(id){
		$.get('./modalContent/'+ id + '.html', function(html){
			$('#' + String(id)).append(html);	
		}).error(function(){console.log('error');});
	};
	$('.modal.hide.in').each(function(){
		
		modalGetter(this.id);
	});



});







