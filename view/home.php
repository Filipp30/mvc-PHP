<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Grig-Home</title>
    <link rel="stylesheet" href="/view/styles/home.css">
</head>
<body>

 <div class="container1">

        <div class="registration">
                        <h1>Registration</h1>
                        <label for="username">UserName</label><br>
                            <input type="text" placeholder="Username" name="username" id="username"><br>
                                <label for="email">E-mail</label><br>
                                <input type="text" placeholder="E-mail" name="email" id="email"><br>
                                <label for="pass">Password</label><br>
                                <input type="password" name="pass" id="pass"><br><br>

                                    <label>Client</label>
                                    <input type="radio" name="radio" class="type" id="type" value="client"><br>
                                    <label>Logister</label>
                                    <input type="radio" name="radio" class="type" id="type" value="logister"><br><br>

                                <label for="accept_right">Accept the right's en Coockie</label><br>
                            <input type="radio" name="accept_right" class="accept_right" id="accept_right" value="accept"><br>
                        <input type="button" class="btn_register" value="Register">
            <div class="error_field" id="error_field"></div>
        </div>

                <div class="autoresation">
                    <h1>Autoresation</h1>
                    <label for="username">UserName</label><br>
                    <input type="text" placeholder="Username" name="username" id="username_sing"><br>
                    <label for="pass">Password</label><br>
                    <input type="password" name="pass" id="pass_sing"><br><br>
                    <input type="button" class="btn_sing" value="singin">
                    <div class="error_field" id="error_field_sing"></div>
                </div>

 </div>
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
 <script src="/components/js/home.js"></script>

</body>
</html>
