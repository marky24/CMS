<?php

    $servername = "localhost";
    $username = "test";
    $password = "qwerty123456";
    $db_name = "2dz";
            
    $conn = new mysqli($servername, $username, $password, $db_name);

    $sql = "CREATE TABLE Persons (name varchar(40), surname varchar(40), phone varchar(40));";
    $conn->multi_query($sql);	
    /*
    if ($conn->multi_query($sql) === TRUE) {
        echo "New records created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    */
    header("Location: http://localhost/2d_dz");
	die();
?>