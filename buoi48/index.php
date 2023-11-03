<?php
    session_start();
    $page='';
    if(isset($_GET['page'])){
        $page=$_GET['page'];
    }else{
        $page ='home';
    }
    switch ($page) {
        case 'home':
            require_once('home.php');
            break;
        case 'logout':
            if(isset($_SESSION['user'])){
                unset($_SESSION['user']);
                unset($_SESSION['id']);
                header('location:?page=login');
            }
            break;
        case 'login':
            require_once('login.php');
            break;
        case 'register':
            require_once('register.php');
            break;
        case 'response':
            require_once('response.php');
            break;
        default:
            require_once('notfound.php');
            break;
    }