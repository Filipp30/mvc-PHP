<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Logister</title>
</head>
<?php if (! $_COOKIE['type'] == ''):?>
<body>
<?php echo $_COOKIE['username']; ?>
<h1>Logistics Page</h1>
<button onclick="home()">Back to Home-page</button>
<button id="sing_out" ">Sing Out</button> // deze moet nog een functionaliteit krijgen
    <script src="/components/js/logister.js"></script>
</body>
<?php
else: header('Location:/home.php');
endif;
?>

</html>
