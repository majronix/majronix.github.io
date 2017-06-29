$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	};
	$('body').removeClass('loaded'); 
});
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
$(function(){

	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.main-nav-list').slideToggle(); 
		return false;
	});
	

});

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();	
	$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	
	
	var viewport_wid = viewport().width;
	
	if (viewport_wid <= 991) {
		
	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);

//Фиксированное меню при скроллинге
$(document).ready(function(){ 

    //Плавный я корь
    $(".s_ancor").on("click", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

    //form
    $('.btn_submit').click(function(){
        // собираем данные с формы
        var user_name    = $('#user_name').val();
        var user_email   = $('#user_email').val();
        // отправляем данные
        $.ajax({
            url: "/action.php", // куда отправляем
            type: "post", // метод передачи
            dataType: "json", // тип передачи данных
            data: { // что отправляем
                "user_name":    user_name,
                "user_email":   user_email
            },
            // после получения ответа сервера
            success: function(data){
                $('.messages').html(data.result); // выводим ответ сервера
            }
        });
    });
    $('.btn_submit2').click(function(){
        // собираем данные с формы
        var user_name2    = $('#user_name2').val();
        var user_email2   = $('#user_email2').val();
        // отправляем данные
        $.ajax({
            url: "/action2.php", // куда отправляем
            type: "post", // метод передачи
            dataType: "json", // тип передачи данных
            data: { // что отправляем
                "user_name2":    user_name2,
                "user_email2":   user_email2
            },
            // после получения ответа сервера
            success: function(data){
                $('.messages2').html(data.result); // выводим ответ сервера
            }
        });
    });
});
 
/****** modal window */
var overlay = $('#overlay'); 
var open_modal = $('.open_modal'); 
var close = $('.modal__close, #overlay'); 
var modal = $('.modal_div'); 

 open_modal.click( function(event){ 
     event.preventDefault(); 
     var div = $(this).attr('href'); 
     overlay.fadeIn(400,
         function(){ 
             $(div) 
                 .css('display', 'block') 
                 .animate({opacity: 1, top: '0'}, 200); 
     });
 });

 close.click( function(){ 
        modal 
         .animate({opacity: 0}, 200, 
             function(){ 
                 $(this).css('display', 'none');
                 overlay.fadeOut(400); 
             }
         );
 });

 /******* start paralax */ 
$(window).bind('scroll',function(e){ 
    parallaxScroll();
});
function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('.c-what__bg').css('top',(0-(scrolled*.5-1050))+'px');
    $('.privilege__img').css('top',(0-(scrolled*.5-530))+'px');
    
}
/******* end paralax */


