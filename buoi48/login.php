<!doctype html>
<html lang="en">

<head>
    <title>Login</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

    <link rel="stylesheet" href="css/style.css">
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script src="
                    https://cdn.jsdelivr.net/npm/sweetalert2@11.7.32/dist/sweetalert2.all.min.js
                    "></script>
</head>

<body>
    <section class="ftco-section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12 col-lg-7">
                    <div class="login-wrap">
                        <div class="signin-form d-md-flex">
                            <div class="half p-4 py-md-5">
                                <div class="w-100">
                                    <h3 class="mb-4" style="font-family:Time New Romance">Đăng nhập</h3>
                                </div>
                                <div class="form-group mt-3">
                                    <label class="label" for="name">Username</label>
                                    <input type="text" class="form-control" placeholder="Username" id="username"
                                        required>
                                </div>
                                <div class="form-group">
                                    <label class="label" for="password">Password</label>
                                    <input type="password" class="form-control" id="password" placeholder="Password"
                                        required>
                                    <span toggle="#password-field"
                                        class="fa fa-fw fa-eye field-icon toggle-password"></span>
                                </div>
                            </div>
                            <div class="half p-4 py-md-5 bg-primary">
                                <div class="form-group">
                                    <button type="button" class="form-control btn btn-secondary rounded submit px-3"
                                        id="loginBtn">Sign me in now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <script src="js/popper.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/main.js"></script>
    <script>
        $(document).ready(function() {
            login()
        });
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        function login() {
            $("#loginBtn").click(function(e) {
                e.preventDefault();
                var username = $("#username").val().trim();
                var password = $("#password").val().trim();
                if (username == '') {

                    Toast.fire({
                        icon: 'error',
                        title: 'Thiếu username'
                    })
                } else if (password == '') {

                    Toast.fire({
                        icon: 'error',
                        title: 'Thiếu mật khẩu'
                    })
                } else {
                    $.ajax({
                        type: "post",
                        url: "controllers.php?action=checkLogin",
                        data: {
                            username: username,
                            password: password,
                        },
                        dataType: "JSON",
                        success: function(res) {
                            if (res.check == true) {
                                Toast.fire({
                                    icon: 'success',
                                    title: 'Đăng nhập thành công'
                                }).then(()=>{
                                    window.location.replace('?page=home');
                                })
                            } else if (res.check == false) {
                                if (res.msg) {
                                    Toast.fire({
                                        icon: 'error',
                                        title: res.msg
                                    })
                                }
                            }
                        }
                    });
                }
            });
        }
    </script>
</body>

</html>
