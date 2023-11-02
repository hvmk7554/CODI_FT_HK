<?php
    require_once('pdo.php');
    session_start();
    date_default_timezone_set('Asia/Ho_Chi_Minh');
    require_once('mail.php');
    if(isset($_GET['action'])){
        switch ($_GET['action']) {
            case 'editResponse':
                if(!isset($_POST['id'])||$_POST['id']==''||!isset($_POST['question'])||$_POST['question']==''||!isset($_POST['answer'])||$_POST['answer']==''){
                    $data = ['check'=>false,'msg'=>'Thiếu thông tin'];
                    header("Content-Type: application/json");
                    echo json_encode($data);
                    exit();
                    
                }else{
                    $date= date("Y-m-d H:i:s");
                    $sql="UPDATE response set question = '".$_POST['question']."',
                    answer='".$_POST['answer']."',updated_at='".$date."' where id=".$_POST['id'];
                    pdo_execute($sql);
                    $data = ['check'=>true];
                    header("Content-Type: application/json");
                    echo json_encode($data);
                    exit();
                }
                break;
            case 'deleteResponse':
                if(!isset($_POST['id'])||$_POST['id']==''){
                    $data = ['check'=>false,'msg'=>'Thiếu thông tin'];
                    header("Content-Type: application/json");
                    echo json_encode($data);
                    exit();
                }else{
                    $sql ="SELECT * FROM response where id=".$_POST['id'];
                    $result = pdo_query($sql);
                    if(count($result)==0){
                        $data = ['check'=>false,'msg'=>'Không tồn tại id result'];
                        header("Content-Type: application/json");
                        echo json_encode($data);
                        exit();
                    }else{
                        $sql = "DELETE FROM response where id=".$_POST['id'];
                        pdo_execute($sql);
                        $data = ['check'=>true];
                        header("Content-Type: application/json");
                        echo json_encode($data);
                        exit();
                    }
                }
                break;
            case 'createResponse':
                if(!isset($_POST['question'])||$_POST['question']==''||!isset($_POST['answer'])||$_POST['answer']==''){
                    $data = ['check'=>false,'msg'=>'Thiếu thông tin'];
                    header("Content-Type: application/json");
                    echo json_encode($data);
                    exit();
                    
                }else{
                    $sql = "SELECT * FROM response where question='".$_POST['question']."'";
                    $result= pdo_query($sql);
                    if(count($result)==0){
                        $date= date("Y-m-d H:i:s");
                        $sql = "INSERT INTO response (question,answer,created_at)
                        VALUES ('".$_POST['question']."','".$_POST['answer']."','".$date."')";
                        pdo_execute($sql);
                        $data = ['check'=>true];
                        header("Content-Type: application/json");
                        echo json_encode($data);
                        exit();
                    }else{
                        $data = ['check'=>false,'msg'=>'Trùng câu hỏi'];
                        header("Content-Type: application/json");
                        echo json_encode($data);
                        exit();
                    }
                }
                break;
            case 'create':
                if(!isset($_POST['username'])||$_POST['username']==''||!isset($_POST['email'])||$_POST['email']==''){
                    $data = ['check'=>false,'msg'=>'Thiếu thông tin tài khoản'];

                    header("Content-Type: application/json");
                    echo json_encode($data);
                    exit();
                }else{
                    $password=random_int(1000,9999);
                    $password2=password_hash($password,PASSWORD_BCRYPT,[10]);
                    $sql = "SELECT * FROM users where name = ' ".$_POST['username']." ' ";
                    $email= $_POST['email'];
                    $result= pdo_query($sql);
                    if(count($result)==0){
                        $date= date("Y-m-d H:i:s");
                        $sql = "INSERT INTO users (name,password,email,created_at) values('".$_POST['username']."','".$password2."','".$email."','".$date."')";
                        pdo_execute($sql);
                        $name = $_POST['username'];
                        goimail($email,$name,$password);
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
