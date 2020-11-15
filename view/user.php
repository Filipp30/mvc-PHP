<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>User</title>
</head>
<?php if (! $_COOKIE['type'] == ''):?>
    <body>
    <h3>Welcoom <?php echo $_COOKIE['username']; ?></h3>
    <h1>Shop - Page</h1>
    <button onclick="home()">Back to Home-page</button>
    <button onclick="sing_out()">Sing Out</button>
    <script src="/components/js/user.js"></script>
    </body>
<?php
else: header('Location:/home.php');
    exit();
endif;
?>

</html>
