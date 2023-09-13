

$(document).ready(function () {
    login();getdata();
});
const url= 'https://students.trungthanhweb.com/api/';
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
function login(){
$("#loginbtn").click(function (e) { 
    e.preventDefault();
    $("#loginModal").modal(`show`);
    $("#submitloginbtn").click(function (e) { 
        e.preventDefault();
        var email= $("#email").val().trim();
       if (email==``){

       }else{
       
$.ajax({
    type: "POST",
    url: "https://students.trungthanhweb.com/api/checkLoginhtml",
    data: {
        email:email, 
    },
    dataType: "JSON",
    success: function (res) {
        if (res.check==true){
            localStorage.setItem('token',res.apitoken);
            Toast.fire({
                icon: 'success',
                title: 'dang nhap thanh cong'
              }).then(()=>{
                window.location.reload();
              }
              )
        }else{
            Toast.fire({
                icon: 'error',
                title: 'chua dang ki'
              })

        }
        
    }
});
};
});
})}

function getdata(){
 
  $.ajax({
    type: "GET",
    url: url+"home",
    data: {
      apitoken:localStorage.getItem('token')
    },
    dataType: "JSON",
    success: function (res) {
      console.log(reg.products.data);
        if (reg.categories.length>0){
            var str='';
            reg.categories.forEach(el => {
              str+=`
              <li><a class="dropdown-item" href="#"` +el.name+ `</a></li>
              `
            });
            $("loaispUl").html(str);
            str=``;
            reg.brand.forEach(el => {
              str+=`
              <li><a class="dropdown-item" href="#"` +el.name+ `</a></li>
              `
            });
            $("brandsUl").html(str);

          }        
    

if (res.products.data.length>0){
  var str=``;
  res.products.data.forEach(el => {
      str+=`
      <div class="card" style ="width: 18rem;">
      <img src="`+urlimage+el.images+`" class="card-img-top" alt="...">
      <div class=" card-body pruductinfo">
      <h5 class="card-title"> `+el.name+` </h5>
      <span class="card-text"> `+el.name+` </span><br>
      <span class="card-text"> Gia:`+Intl.NumberFormat('en-US').format(el.price)+`</span><br>
      <span class="card-text"> Thuong hieu : `+el.brandname+` </span><br><br>
      <a href="#" class="btn btn-primary"> Xem them</a>
      <a href="#" class="btn btn-warning ms-3"> Dat hang</a>
</div>
</div>
</div>`;


});
$("#productfetch").html(stl);
}}
  });
}