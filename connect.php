<?php
    $bedrijfsNaam = $_POST['bedrijfsNaam'];
    $mail = $_POST['mail'];
    $nummer = $_POST['nummer'];
    $Onderwerp = $_POST['Onderwerp'];
    $bericht = $_POST['bericht'];

    //database
    $conn = new mysqli('localhost','root','root','fs-system');
    if($conn->connect_error){
        die('Probber Opnieuw Server Timeout  : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into offerteaanvraag(bedrijfsNaam, mail, nummer, Onderwerp, bericht)
        values(?, ?, ?, ?, ?)");
        $stmt->bind_param("ssiss",$bedrijfsNaam, $mail, $nummer, $Onderwerp, $bericht);
        $stmt->execute();
        echo "Bericht Verstuurd U Hoort Van Ons";
        $stmt->close();
        $conn->close();
    }
?>