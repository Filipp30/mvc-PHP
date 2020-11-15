<?php

    include_once ROOT.'/models/homeModel.php';
    class homeController{

        function index(){
            if (!isset($_COOKIE['type'])){
                require_once ROOT . '/view/home.php';
            }else{
                if ($_COOKIE['type'] == 'logister'){
                    header('Location:/logister.php');
                    exit();

                }elseif ($_COOKIE['type'] == 'client'){
                    header('Location:/user.php');
                    exit();
                }else{
                    require_once ROOT . '/view/home.php';
                }
            }
            return true;
        }
        //-----------------------------------------------------------------//
        //connected with home.js 36
        function registration($username,$email,$pass,$typeUser){
            // MD5  to password !!!
                $resultUserExist = homeModel::insertIntoUsers($username, $email, $pass, $typeUser);
                if ($resultUserExist == true) {
                    //return data to home.js 36
                    echo true;
                } else {
                    //return data to home.js 36
                    echo false;
                }
                return true;
        }
        //-------------------------------------------------------//
        //connected with home.js 53
        function sing_in($username,$pass){
            //MD5 From password
            $result_sing_in=homeModel::selectIfExist($username,$pass);
            if ($result_sing_in==false){
                echo false;
            }elseif ($result_sing_in->usertype == 'logister'){
                setcookie('username',$username, time() + 60, "/");
                setcookie('type','logister',time() + 60,"/");
                //send type to home.js  73
               echo 'logister';
            }elseif ($result_sing_in->usertype == 'client'){
                setcookie('username',$username, time() + 60, "/");
                setcookie('type','client',time() + 60, '/');
                //send type to home.js  73
                echo 'client';
            }
        }
    }