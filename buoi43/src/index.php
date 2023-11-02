<html lang="en">
  <head>
  	<title>Login 06</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<link href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap" rel="stylesheet">

	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	
	<link rel="stylesheet" href="css/style.css">

	<script src="https://code.jquery.com/jquery-3.7.1.min.js"
integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs00EvtFFmqPF/1YI/Cxo=" crossorigin="anonymous"></script>
<script src="
https://cdn.jsdelivr.net/npm/sweetalert2@11.7.32/dist/sweetalert2.all.min.js
"></script>


	</head>
	<body>
	<section class="ftco-section">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-6 text-center mb-5">
					<h2 class="heading-section">Login #06</h2>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-md-12 col-lg-7">
					<div class="login-wrap">
						<div action="#" class="signin-form d-md-flex">
							<div class="half p-4 py-md-5">
			      		<div class="w-100">
			      			<h3 class="mb-4">Sign In</h3>
			      		</div>
			      		<div class="form-group mt-3">
			      			<label class="label" for="name">Username</label>
			      			<input type="text" class="form-control" placeholder="Username" required>
			      		</div>
		            <div class="form-group">
		            	<label class="label" for="password">Password</label>
		              <input id="password" type="password" class="form-control" placeholder="Password" required>
		              <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
		            </div>
		          </div>
							<div class="half p-4 py-md-5 bg-primary">
		            <div class="form-group">
		            	<button type="button" class="form-control btn btn-secondary rounded px-3">Sign me in now</button>
		            </div>
		            <div class="form-group d-md-flex">
		            	<div class="w-50 text-left">
			            	<label class="checkbox-wrap checkbox-primary mb-0">Remember Me
									  <input type="checkbox" checked>
									  <span class="checkmark"></span>
										</label>
									</div>
									<div class="w-50 text-md-right">
										<a href="#">Forgot Password</a>
									</div>
		            </div>
		            <p class="w-100 text-center" style="color:white;">&mdash; Or Sign In With &mdash;</p>
			          <div class="w-100">
									<p class="social-media d-flex justify-content-center">
										<a href="#" class="social-icon d-flex align-items-center justify-content-center"><span class="fa fa-facebook"></span></a>
										<a href="#" class="social-icon d-flex align-items-center justify-content-center"><span class="fa fa-twitter"></span></a>
									</p>
								</div>
		          </div>
	          </div>
	        </div>
	      </div>
			</div>
		</div>
	</section>

	<script src="js/jquery.min.js"></script>
  <script src="js/popper.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/main.js"></script>
  <script>
$(document).ready(function() {
register()
});

const Toast = Swal.mixin({
 toast: true,
 position: 'top-end',
 showConfirmButton: false,
 timer: 3000,
 timerProgressBar: true,
didOpen: (toast) => {
	toast.addEventListener('mouse enter', Swal.stopTimer) 
	toast.addEventListener('mouse leave', Swal.resumeTimer)
}
})

   function register() {
$("#registerBtn").click(function(e) {
  e.preventDefault();
  var username = $("username").val().trim(); 
  var password = $("#password").val().trim(); 
  
  
  if (username=='') {
   Toast.fire({
   icon: 'error',
   title: 'Thiếu username'
   })
} else if (password == '') {
   Toast.fire({
   icon: 'error',
   title: 'Thiếu mat khẩu'
   })
}

});
   }

</script>
	</body>
</html>