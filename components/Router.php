<?php


    class Router{

        private $routes;
        private $ControllerName;
        private $MethodeName;
        private $parameter;

        function __construct(){
            $this->routes=array(
                'home/([a-z]+)/([a-z]+)/([a-z]+)/([a-z]+)/([a-z]+)'=>'home/$1/$2/$3/$4/$5',
                'home/([a-z]+)/([a-z]+)/([a-z]+)',
                'home/([a-z]+)'=>'home/$1',
                'home'=>'home/index',
                'logiter/([a-z]+)'=>'logister/$1',
                'logister'=>'logister/index',
                'user'=>'user/index',
                'user/([a-z]+)'=>'user/$1'
            );
        }
        function getUri(){
            if (!empty($_SERVER['REQUEST_URI'])){
                return $uri=trim($_SERVER['REQUEST_URI'],'/');
            }
        }
        function run(){
            $uri = $this->getUri();
            foreach ($this->routes as $userRequest => $path){
                if (preg_match("~$userRequest~",$uri)){
                    $internPath=preg_replace("~$userRequest~",$path,$uri);
                    $segment = explode('/',$internPath);
                    $this->ControllerName=array_shift($segment)."Controller";

                    $controllerPath = ROOT.'/controllers/'.$this->ControllerName.'.php';
                    include_once ($controllerPath);

                    $controllerObject = new $this->ControllerName;
                    $this->MethodeName=array_shift($segment);
                    $this->parameter=array_values($segment);

                    if (!method_exists($controllerObject,$this->MethodeName)){
                        $this->MethodeName='index';
                    }
                    call_user_func_array(array($controllerObject,$this->MethodeName),$this->parameter);
                    break;
                }
            }
        }
    }