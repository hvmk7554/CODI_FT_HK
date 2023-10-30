<?php
    require_once('pdo.php');
    session_start();
    date_default_timezone_set('Asia/Ho_Chi_Minh');
    if(isset($_GET['action'])){
        switch ($_GET['action']) {
            case 'create':
                if(!isset($_POST['username'])||!isset($_POST['password'])||$_POST['username']==''||$_POST['password']==''){
                    $data = ['check'=>false,'msg'=>'Thiếu thông tin tài khoản'];

                    header("Content-Type: application/json");
                    echo json_encode($data);
                    exit();
                }else{
                    $password=$_POST['password'];
                    $password2=password_hash($password,PASSWORD_BCRYPT,[10]);
                    $sql = "SELECT * FROM users where name = ' ".$_POST['username']." ' ";
                    $result= pdo_query($sql);
                    if(count($result)==0){
                        $date= date("Y-m-d H:i:s");
                        $sql = "INSERT INTO users (name,password,created_at) values('".$_POST['username']."','".$password2."','".$date."')";
                        pdo_execute($sql);
                        $data = ['check'=>true];
    
                        header("Content-Type: application/json");
                        echo json_encode($data);
                        exit();
                    }

                }
                break;
            case 'checkLogin':
                if(!isset($_POST['username'])||!isset($_POST['password'])||$_POST['username']==''||$_POST['password']==''){
                    $data = ['check'=>false,'msg'=>'Thiếu thông tin tài khoản'];

                    header("Content-Type: application/json");
                    echo json_encode($data);
                    exit();
                }else{
                    $sql = "SELECT * FROM users where name='".$_POST['username']."'";
                    $result = pdo_query_one($sql);
                    $check = count($result);
                    if($check==0){
                        $data = ['check'=>false,'msg'=>'Không tồn tại tài khoản'];
                        header("Content-Type: application/json");
                        echo json_encode($data);
                        exit();
                    }else{
                        $password=$result['password'];
                        //Tham số 1 : PAssword chưa mã hoá
                        // Tham số 2 : Password đã mã hoá

                        $checkpass = password_verify($_POST['password'],$password);
                        if($checkpass==true){
                            $_SESSION['user']= $_POST['username'];
                            $data = ['check'=>true];
                            header("Content-Type: application/json");
                            echo json_encode($data);
                            exit();
                        }else{
                            $data = ['check'=>false,'msg'=>'Sai mật khẩu'];
                            header("Content-Type: application/json");
                            echo json_encode($data);
                            exit();
                        }
                    }
                }
                break;
            default:
                # code...
                break;
        }
    }
