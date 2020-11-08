<?php

    include_once ROOT.'/models/homeModel.php';
    class homeController{

        function index(){
            if ($_COOKIE['type'] == ''){
                require_once ROOT . '/view/home.php';
            }else{
                if ($_COOKIE['type'] == 'logister'){
                    header('Location:/logister.php');

                }elseif ($_COOKIE['type'] == 'client'){
                    header('Location:/user.php');
                }else{
                    header('Location:/home.php');
                }
            }
            return true;
        }
        function registration($username,$email,$pass,$typeUser){
                $resultUserExist = homeModel::insertIntoUsers($username, $email, $pass, $typeUser);
                if ($resultUserExist == true) {
                    echo true;
                } else {
                    echo false;
                }
                return true;
        }
        function sing_in($username,$pass){
            $result_sing_in=homeModel::selectIfExist($username,$pass);
            if ($result_sing_in==false){
                echo false;
            }elseif ($result_sing_in->usertype == 'logister'){
                setcookie('username',$username, time() + 60, "/");
                setcookie('type','logister',time() + 60,"/");
               echo 'logister';
            }elseif ($result_sing_in->usertype == 'client'){
                setcookie('username',$username, time() + 60, "/");
                setcookie('type','client',time() + 60, '/');
                echo 'client';
            }
        }
    }