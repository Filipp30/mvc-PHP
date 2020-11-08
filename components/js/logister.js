
function home(){
    document.location.replace("/home/index");
    console.log(document.cookie);
}
//Delete Cookie
function sing_out(){
    document.cookie="type=;";
    document.cookie="username=;";
    document.location.replace("/home/index");
}
