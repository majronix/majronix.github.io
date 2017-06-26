<?php
	$msg_box = ""; // в этой переменной будем хранить сообщения формы
	$errors = array(); // контейнер для ошибок
	// проверяем корректность полей
	if($_POST['user_name'] == "") 	 $errors[] = "Поле 'Ваше имя' не заполнено!";
	if($_POST['user_email'] == "") 	 $errors[] = "Поле 'Ваш e-mail' не заполнено!";

	// если форма без ошибок
	if(empty($errors)){		
		// собираем данные из формы
		$message  = "Имя пользователя: " . $_POST['user_name'] . "<br/>";
		$message .= "E-mail пользователя: " . $_POST['user_email'] . "";
		
		send_mail($message); // отправим письмо
		// выведем сообщение об успехе
		$msg_box = "
			<script type='text/javascript'>
		$(document).ready(function(){ 
			$('.form_send').addClass('_up');
					$('.form__field').attr('value' , '').css('background:','#fff');
					$('html,.form_send__close').click(function () {
						$('.form_send').removeClass('_up');
					});
		});
		</script>  
		";
	}else{
		// если были ошибки, то выводим их
		$msg_box = "";
		foreach($errors as $one_error){
			$msg_box .= "<span class='field_error'>$one_error</span>";
		}
	}

	// делаем ответ на клиентскую часть в формате JSON
	echo json_encode(array(
		'result' => $msg_box
	));
	
	// функция отправки письма
	function send_mail($message){
		// почта, на которую придет письмо
		$mail_to = "zakaz@wood.net.ua"; 
		// тема письма
		$subject = "Письмо с обратной связи";
		
		// заголовок письма
		$headers= "MIME-Version: 1.0\r\n";
		$headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
		$headers .= "From: Тестовое письмо <no-reply@test.com>\r\n"; // от кого письмо
		
		// отправляем письмо 
		mail($mail_to, $subject, $message, $headers);
	}
	
