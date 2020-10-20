<?php

    include_once ROOT.'/models/homeModel.php';
    class homeController{

        function index(){
            require_once ROOT . '/view/home.php';
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
                //set cookie
               echo 'logister';
            }elseif ($result_sing_in->usertype == 'client'){
                echo 'client';
            }
        }

        function test(){
            require_once ROOT . '/view/home.php';
            return true;
        }
    }