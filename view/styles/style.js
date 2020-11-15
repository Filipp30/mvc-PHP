//Style for titel : Registration

    function color_film(color){
        setTimeout(function (){
            document.getElementById("titel_reg").style.color=color;
        },500);
        setTimeout(function (){
            document.getElementById("username").style.color=color;
        },1000);
        setTimeout(function (){
            document.getElementById("email").style.color=color;
        },1500);
        setTimeout(function (){
            document.getElementById("pass").style.color=color;
        },2000);
        setTimeout(function (){
            document.getElementById("client").style.color=color;
        },2500);
        setTimeout(function (){
            document.getElementById("logister").style.color=color;
        },3000);
        setTimeout(function (){
            document.getElementById("accept").style.color=color;
        },3500);
        setTimeout(function (){
            changeColor(color);
        },3500);
    }


    function changeColor(color_func){
        let color_arr=["#0B0B0B","#FF1010","#2A08FF","#07FF07"];

        let color_1="#0B0B0B";
        let color_2="#FF1010";
        let color_3="#2A08FF";
        let color_4="#07FF07";
        let i=0;
        while (i<color_arr.length){

        }
        color_film();
    }




