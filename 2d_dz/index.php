    <form action="create.php" method="post">
        <input type="submit" value="Создать таблицу">
    </form>
<?php
            //echo "im in";
            $servername = "localhost";
            $username = "test";
            $password = "qwerty123456";
            $db_name = "2dz";

            $conn = new mysqli($servername, $username, $password, $db_name);
            // Check connection
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            } 

            $sql = "SELECT name, surname, phone FROM Persons";
            $result = $conn->query($sql);
    ?>
<!DOCTYPE html>
<html>

<head>
</head>

<body>
    <table id="example" class="display" cellspacing="0" width="100%">
        <thead>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Phone</th>
                <th>Delete button</th>
                <!--<th>time_post</th>-->
            </tr>
        </thead>
        <tbody>
            <?php while($row = $result->fetch_assoc()) {?>
            <tr>
                <? echo "keker"; ?>
                <td align="center">
                    <?php echo $row["name"];?>
                </td>
                <td align="center">
                    <?php echo $row["surname"];?>
                </td>
                <td align="center">
                    <?php echo $row["phone"];?>
                </td>
                <td align="center">
                    <form action="delete_post.php" method="post">
                        <input type='hidden' name='phone' value='<?php echo $row["phone"];?>'>
                        <input type="submit" value="Удалить">
                    </form>
                </td>
            </tr>
            <?php };?>
        </tbody>
    </table>
    <br />
    <form action="send_post.php" method="post">
        Name: <input type="text" name="name">
        Surname: <input type="text" name="surname">
        Phone: <input type="text" name="phone">
        <input type="submit" value="Добавить">
    </form>
    <form action="delete.php" method="post">
        <input type="submit" value="Удалить таблицу">
    </form>
</body>

</html>
