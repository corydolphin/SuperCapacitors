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

	 	$('div#.callout').show();
	 	$(this).parent().children('.callout').each(function(){});
		},
	    function(){
	 	$('div#.callout').hide();

	})
});







