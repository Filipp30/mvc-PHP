
    $(document).ready(function () {
        $(".btn_register").click(function () {
            console.log("test");
            let error_field = document.querySelector("#error_field");
            let username = $("#username").val();
            let email = $("#email").val();
            let pass = $("#pass").val();
            let type = $(".type:checked").val();
            let accept = $(".accept_right:checked").val();
            if (username.length === 0 || email.length === 0 || pass.length === 0) {
                error_field.innerHTML = "";
                error_field.insertAdjacentHTML("beforeend", "Input field's are empty");
            } else if (type === undefined) {
                error_field.innerHTML = "";
                error_field.insertAdjacentHTML("beforeend", "Make a chois: Client or Logister");
            } else if (accept === undefined) {
                error_field.innerHTML = "";
                error_field.insertAdjacentHTML("beforeend", "Pleas eccept the rigth's and Cockie");
                alert("Pleas eccept the rigth's and Cockie")
            } else {
                $.ajax({
                    url: '/home/registration/' + username + '/' + email + '/' + pass + '/' + type,
                    success: func_return_status_registration
                });
            }
        });
        $(".btn_sing").click(function () {
            let errorfield = document.querySelector("#error_field_sing");
            let username = $("#username_sing").val();
            let pass = $("#pass_sing").val();
            if (username.length === 0 || pass.length === 0) {
                errorfield.innerHTML = "";
                errorfield.insertAdjacentHTML("beforeend", "Enter username & password");
            } else {
                $.ajax({
                    url: '/home/sing_in/' + username + '/' + pass,
                    success: func_return_singin_status
                });
            }
        });

        function func_return_status_registration(data) {
            let error_field = document.querySelector("#error_field");
            let username = $("#username").val("");
            let email = $("#email").val();
            let pass = $("#pass").val();
            let type = $(".type:checked").val();
            let accept = $(".accept_right:checked").val();
            if (data == true) {
                error_field.innerHTML = "";
                error_field.insertAdjacentHTML("beforeend", "Succes Registration");
                setTimeout(function () {
                    username.text("");
                    // here reset all input field's' like : username,email,pass,type,accept
                    error_field.innerHTML = "";
                }, 5000);

            } else if (data == false) {
                error_field.innerHTML = "";
                error_field.insertAdjacentHTML("beforeend", "User Exist , you can sing in");
            }
        }

        function func_return_singin_status(data) {
            let error_field = document.querySelector("#error_field_sing");
            if (data == false) {
                error_field.innerHTML = "";
                error_field.insertAdjacentHTML("beforeend", "Wrong username of password");
            } else if (data === 'logister') {
                document.location.replace("/logister/index");
            } else if (data === 'client') {
                document.location.replace("/user/index");
            }
        }
    });