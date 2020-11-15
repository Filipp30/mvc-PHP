//testing coockie when return to home page
function home(){
    document.location.replace("/home/index");
}
//Delete Cookie
function sing_out(){
    document.cookie="type=;";
    document.cookie="username=;";
    document.location.replace("/home/index");
}
