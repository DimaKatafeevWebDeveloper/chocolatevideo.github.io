<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['name'])) {$name = $_POST['name'];}
    if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
	if (isset($_POST['content'])) {$content = $_POST['content'];}
	if (isset($_POST['rabota'])) {$rabota = $_POST['rabota'];}
	if (isset($_POST['type-content'])) {$typeContent = $_POST['type-content'];}
   if (isset($_POST['retush'])) {$retush = $_POST['retush'];}
   if (isset($_POST['ploshadka'])) {$ploshadka = $_POST['ploshadka'];}
   if (isset($_POST['sroki'])) {$sroki = $_POST['sroki'];}
   if (isset($_POST['budzhet'])) {$budzhet = $_POST['budzhet'];}
   if (isset($_POST['cel'])) {$cel = $_POST['cel'];}
   if (isset($_POST['time'])) {$time = $_POST['time'];}
   if (isset($_POST['kogda'])) {$kogda = $_POST['kogda'];}
   if (isset($_POST['sozdanie'])) {$budzhet = $_POST['sozdanie'];}
   if (isset($_POST['prodvizhenie'])) {$budzhet = $_POST['prodvizhenie'];}
 if (trim($phone) != '' && trim($name) != '')
	{ 

    $to = "d.katafeev@lab-dnk.ru"; //info@meleshko.org, alex2611@mail.ru
    $sendfrom   = "info@chocolate.ru";
    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    $subject = "Заявка с квиза";
    $message = 
    "
            <h2>$subject</h2><br>
            <b>Имя:</b> $name<br>
            <b>Телефон:</b> $phone<br>
			<b>Какой контент нужен:</b> $content<br>
			<b>Работа с контентом (если выбрано другое):</b> $rabota<br>
			<b>Тип контента:</b> $typeContent<br>
         <b>Ретушь отснятого материала (для фото)</b> $retush<br>
         <b>Площадка публикации:</b> $ploshadka<br>
         <b>Сроки запуска: (если выбрано другое)</b> $sroki<br>
         <b>Бюджет: (если выбрано другое)</b> $sroki<br>
         <b>Цели: (если выбрано другое)</b> $cel<br>
         <b>Хронометраж (в секундах, если выбрано видео): (если выбрано другое)</b> $time<br>
         <b>Когда требуется сдать проект:</b> $kogda<br>
         <b>Бюджет на создание: </b> $sozdanie<br>
         <b>Бюджет на продвижение: (для видео)</b> $prodvizhenie<br>";
    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true')
    {
		//header( "Location: /" );
		echo "<h4 align=\"center\">Спасибо! Мы свяжемся с вами в ближайшее время</h4>";
		echo "<script>;ym(67214407,'reachGoal','endkviz')</script>";
    }
    else

    {
    echo '<center><b>Ошибка. Сообщение не отправлено!</b></center>';
    }
	}	else {echo "<h4 align=\"center\">Поля <b>имя</b> и <b>телефон</b> не могут быть пустыми! Заявка НЕ отправлена! Попробуйте еще раз</h4>";}
} else {
	http_response_code(403);
	echo "Заявка НЕ отправлена! Попробуйте еще раз";

}?>