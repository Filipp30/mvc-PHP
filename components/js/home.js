    document.getElementById("error_field_sing").style.visibility = 'hidden';
    document.getElementById("error_field").style.visibility='hidden';

    $(document).ready(function () {
        $(".btn_register").click(function () {
            let username = $("#username").val();
            let email = $("#email").val();
            let pass = $("#pass").val();
            let type = $("#type:checked").val();
            let accept = $("#accept_right:checked").val();
            if (username.length === 0 || email.length === 0 || pass.length === 0) {
                document.getElementById("error_field").style.visibility='visible';
                document.getElementById("error_field").innerText="Input field's are empty";
                setTimeout(function(){hideErrorRegField()},4000);
            } else if (type === undefined) {
                document.getElementById("error_field").style.visibility='visible';
                document.getElementById("error_field").innerText="Make a chois: Client or Logister";
                setTimeout(function(){hideErrorRegField()},4000);
            } else if (accept === undefined) {
                document.getElementById("error_field").style.visibility='visible';
                document.getElementById("error_field").innerText="Pleas eccept the rigth's and Cockie";
                alert("Pleas eccept the rigth's and Cockie");
                setTimeout(function(){hideErrorRegField()},4000);
            } else {
                $.ajax({
                    url: '/home/registration/' + username + '/' + email + '/' + pass + '/' + type,
                    success: func_return_status_registration
                });
            }
        });
        $(".btn_sing").click(function () {

            let username = $("#username_sing").val();
            let pass = $("#pass_sing").val();
            if (username.length === 0 || pass.length === 0) {
                document.getElementById("error_field_sing").style.visibility = 'visible';
                document.getElementById("error_field_sing").innerText="Enter username & password";
                setTimeout(function (){
                    document.getElementById("error_field_sing").style.visibility = 'hidden';
                },5000);

            } else {
                $.ajax({
                    url: '/home/sing_in/' + username + '/' + pass,
                    success: func_return_singin_status
                });
            }
        });

        function func_return_status_registration(data) {
            if (data == true) {
                document.getElementById("error_field").style.visibility='visible';
                document.getElementById("error_field").innerText="Success";
                setTimeout(function () {
                    resetInputs();
                    hideErrorRegField();
                }, 5000);

            } else if (data == false) {
                document.getElementById("error_field").style.visibility='visible';
                document.getElementById("error_field").innerText="User Exist , you can sing in";
                setTimeout(function(){hideErrorRegField();},4000);
            }
        }

        function func_return_singin_status(data) {
            if (data == false) {
                document.getElementById("error_field_sing").style.visibility='visible';
                document.getElementById("error_field_sing").innerText="Wrong username of password"
               setTimeout(function (){
                   document.getElementById("error_field_sing").style.visibility='hidden';},5000);
            } else if (data === 'logister') {
                document.location.replace("/logister/index");
            } else if (data === 'client') {
                document.location.replace("/user/index");
            }
        }

        function resetInputs(){
            $("#username").val("");
            $("#email").val("");
            $("#pass").val("");
            $('input[name="radio"]').prop('checked', false);
            $('input[name="accept_right"]').prop('checked', false);
        }
        function hideErrorRegField(){
            document.getElementById("error_field").style.visibility='hidden';
        }
    });
