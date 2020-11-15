<?php


    class homeModel{

        public static function insertIntoUsers($username,$email,$pass,$user_type){
        $pdo = dbConnection::getDbConnection();
        $sql_testing="SELECT * FROM users WHERE email=? LIMIT 1";
        $sql="INSERT INTO users (username,email,pass,usertype) VALUES (?,?,?,?)";
        $query_test = $pdo->prepare($sql_testing);
        $query_test->execute([$email]);
        $result=$query_test->fetchAll(PDO::PARAM_BOOL);
            if ($result==true){
                return false;
            }else{
                $query = $pdo->prepare($sql);
                $query->execute([$username,$email,$pass,$user_type]);
                return true;
            }
        }
        public static function selectIfExist($username,$pass){

                $sql="SELECT usertype FROM users WHERE username = ? AND pass = ? ";
                $pdo = dbConnection::getDbConnection();
                $query=$pdo->prepare($sql);
                $query->execute([$username,$pass]);
                $result= $query->fetch(PDO::FETCH_OBJ);
                return $result;

        }
    }

