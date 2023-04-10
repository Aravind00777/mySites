<?php

if($_POST) {

    $to       = "aravind_mt@yatnam.com";
    $name     = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
    $emails     = filter_var($_POST["emails"], FILTER_SANITIZE_EMAIL);
    $number       = filter_var($_POST["number"], FILTER_SANITIZE_STRING);
    $subject    = filter_var($_POST["subject"], FILTER_SANITIZE_STRING);
    $textareas    = filter_var($_POST["textareas"], FILTER_SANITIZE_STRING);
    $check     =filter_var($_POST["check"], FILTER_SANITIZE_STRING);
    $sub  = "I want to attend the presentation";
    $body     = "Name: $name\nE-mail: $emails\nPhone Number: $number \subject: $subject\textareas: $textareas\ncheck: $check\n";
    $headers = 'From: ' .$from . "\r\n".
    'Reply-To: ' . $from. "\r\n" . 
    'X-Mailer: PHP/' . phpversion();
    var_dump($headers);
    if(@mail($to, $sub, $body, $headers)) {
        $output = json_encode(array('success' => true));
        die($output);
    } else {
        $output = json_encode(array('success' => false));
        die($output);
    }
    
}
