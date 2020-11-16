//Style for titel : Registration


    async function start(){
        let color_arr=["#FF1010","#0B0B0B","#2A08FF","#07FF07"];
        let i=0;
        color_film(color_arr[i]).then(function (){
            setInterval(function (){
                i++;
                console.log(i);
                color_film(color_arr[i]);

                if (i==3){
                    i=-1;
                }
            },3500);
        });
    }


    function color_film(color) {
        return new Promise(function (resolve) {

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
                resolve();
            }, 3500);
        });
    }

start();




