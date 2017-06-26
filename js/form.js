var form = document.getElementById('formID'); // form has to have ID: <form id="formID">
form.noValidate = true;
form.addEventListener('submit', function(event) { // listen for form submitting
if (!event.target.checkValidity()) {
    event.preventDefault(); // dismiss the default functionality
    //alert('Please, fill the form'); // error message
    $(this).find('.error_field').addClass('error_show');
}
else {
	$('.form_send').addClass('_up');
	$('.form__field').attr('value' , "").css('background:','#fff');
	$('html,.form_send__close').click(function () {
		$('.form_send').removeClass('_up');
	});
	$('.error_field').removeClass('error_show');
}
}, false);

var error = form;
jQuery(document).ready(function($){

	$('.check').each(function() {
		if($(this).is(':checked')){
			$(".fofm input[type=submit]").removeAttr('disabled');
			$('.fofm input[type=hidden].valTrFal').val('valTrFal_true');
		}
		else {
			$(".fofm input[type=submit]").attr('disabled','disabled');
			$('.fofm input[type=hidden].valTrFal').val('valTrFal_disabled');
		}
	});
	$(".fofm").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "contact.php",
			data: str,
			success: function(msg) {
				if(msg == 'ok') {
					if(error=true){
						
					}
				}
				else {
					$('body').html('<h5>Ошибка</h5><p>Сообщение не отправлено, убедитесь в правильности заполнение полей</p>');
				}
			}
		});
		return false;
	});

});

