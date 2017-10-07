<?php

$recepient = "verino1377@mail.ru";
$sitename  = "Sborka";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$text = trim($_POST["text"]);
$message = "Имя: $name \nEmail: $email \nТекст: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle,  $message,"Content-type: text/plain; charset=\"utf-8\" From: $recepient");
