//Style for titel : Registration


    function start(){
        let color_arr=["#FF1010","#0B0B0B","#2A08FF","#07FF07"];
        let res=color_film(color_arr[3]);
        let tes
    }

    function color_film(color){


        setTimeout(function () {
            document.getElementById("titel_reg").style.color = color;
        }, 500);
        setTimeout(function () {
            document.getElementById("username").style.color = color;
        }, 1000);
        setTimeout(function () {
            document.getElementById("email").style.color = color;
        }, 1500);
        setTimeout(function () {
            document.getElementById("pass").style.color = color;
        }, 2000);
        setTimeout(function () {
            document.getElementById("client").style.color = color;
        }, 2500);
        setTimeout(function () {
            document.getElementById("logister").style.color = color;
        }, 3000);
        setTimeout(function () {
            document.getElementById("accept").style.color = color;

        }, 3500);

    }

start();


