$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	};
	$('body').removeClass('loaded'); 
});

var handler = function(){
	
	var height_footer = $('footer').height();	
	$('.content').css({'padding-bottom':height_footer+100});
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);



