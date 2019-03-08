<?php

session_start();

$bdd = new PDO('mysql:host=localhost;charset=utf8;dbname=tp_javascript', 'root', '');



$email= htmlspecialchars($_POST["email"]);

$requete_mail = $bdd->prepare("INSERT INTO espace_membre(email) VALUE (?)");
$requete_mail->execute(array($email));

$try = $requete_mail->rowCount();
if ($try>0){
    echo "OK";
}
else{
    echo "NO";
}
?>