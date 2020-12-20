    document.getElementById("error_field_sing").style.visibility = 'hidden';
    document.getElementById("error_field").style.visibility='hidden';

    $(document).ready(function () {
        // OnClick REGISTRATION BUTTON :
        $(".btn_register").click(function () {
            resetInputs_sing_in();
            let username = $("#username").val();
            let email = $("#email").val();
            let pass = $("#pass").val();
            let type = $("#type:checked").val();
            let accept = $("#accept_right:checked").val();
            //Control input field NOT EMPTY + radio Buttons are selected
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
                //if ALL inputs Not empty: controler->homeController->function registration
                // homeController return if user exist or Not to func_return_status_registration
                // homeController registration 24
                $.ajax({
                    url: '/home/registration/' + username + '/' + email + '/' + pass + '/' + type,
                    success: func_return_status_registration
                });
            }
        });
        // data :from return homeController/registration  - to func_return_status_registration(data)
        // homeController registration 24
        function func_return_status_registration(data) {
            if (data == true) {
                document.getElementById("error_field").style.visibility='visible';
                document.getElementById("error_field").innerText="Success";
                setTimeout(function () {
                    resetInputs_registration();
                    hideErrorRegField();
                }, 3000);

            } else if (data == false) {
                document.getElementById("error_field").style.visibility='visible';
                document.getElementById("error_field").innerText="User Exist , you can sing in";
                setTimeout(function(){hideErrorRegField();},4000);
            }
        }
        //----------------------------------------------------------------------------------//
        //OnClick SING IN BUTTON:
        // !!!!! input field empty not working after sing in if user not exist
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
                //if ALL inputs Not empty: controler->homeController->function sing_in
                $.ajax({
                    url: '/home/sing_in/' + username + '/' + pass,
                    success: func_return_singin_status
                });
            }
        });
        // data :from return homeController/sing_in - to func_return_status_registration(data)
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
        //-------------------------------------------------------------------------//
        //reset input's after registration;
        function resetInputs_registration(){
            $("#username").val("");
            $("#email").val("");
            $("#pass").val("");
            $('input[name="radio"]').prop('checked', false);
            $('input[name="accept_right"]').prop('checked', false);
        }
        //reset input's after singin
        function resetInputs_sing_in(){
            $("#username_sing").val("");
            $("#pass_sing").val("");
        }

        //hidden error field when not need/use
        function hideErrorRegField(){
            document.getElementById("error_field").style.visibility='hidden';
        }
    });
