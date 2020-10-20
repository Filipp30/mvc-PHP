<?php


    class dbConnection{

        public static function getDbConnection(){
            $db_name="mvc";
            $dsn = 'mysql:host=localhost:3308;dbname='.$db_name;
            $pdo = new PDO($dsn,'root','root');
            return $pdo;
        }
    }