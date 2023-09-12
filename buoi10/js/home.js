$(document).ready(function () {
    login();getData();
});
const url= "https://students.trungthanhweb.com/api/";
const urlimage= "https://students.trungthanhweb.com/images/";

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1700,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

function login(){
    $("#loginbtn").click(function (e) { 
        e.preventDefault();
        $("#LoginModal").modal('show')
        $("#submitloginbtn").click(function (e) { 
            e.preventDefault();
            var email=$("#email").val().trim() ;
            if(email==``){
                Toast.fire({
                    icon: 'error',
                    title: 'chưa nhập email'
                  })
            }else{
                $.ajax({
                    type: "post",
                    url: "https://students.trungthanhweb.com/api/checkLoginhtml",
                    data:{
                        email:email,
                    },
                    dataType: "JSON",
                    success: function (res) {
                        if(res.check==true){
                            localStorage.setItem('token',res.apitoken);
                            Toast.fire({
                                icon: 'success',
                                title: 'Đăng nhập thành công'
                              }).then(()=>{
                                    window.location.reload();
                              })
                        }else{
                            Toast.fire({
                                icon: 'Error',
                                title: 'Tài khoản chưa được đăng kí'
                              })
                        }
                    }
                });
            }
          
        });
    });
}
function getData(){
    
    $.ajax({
        type: "GET",
        url: url+"home",
        // tuong duong nhu url
        data: {
            apitoken:localStorage.getItem('token')
        },
        dataType: "JSON",
        success: function (res) {
            console.log(res.products.data);
            if(res.categrories.length>0){
                var str=``;
                res.categrories.forEach(el => {
                    str+=`
                    <li><a class="dropdown-item" href="#">`+el.name+`</a></li>
  
                    `
                });
                $("#loaispUL").html(str);
                str=``;
                res.brands.forEach(el => {
                    str+=`
                    <li><a class="dropdown-item" href="#">`+el.name+`</a></li>
  
                    `
                });
                $("#brandsUL").html(str);
            }
            if(res.products.data.length>0){
                var str=``;
                res.products.data.forEach(el => {
                    str+=`
                    <div class="col-md-3">
                    <div class="card" style="width: 18rem;">
                      <img src="`+urlimage+el.images+`" class="card-img-top" alt="...">
                      <div class="card-body productinfo">
                        <h5 class="card-title">`+el.name+`</h5>
                        <span class="card-text">Tên Sản Phẩm: `+el.name+`</span><br>
                        <span class="card-text">Giá :`+Intl.NumberFormat('en-US').format(Number(el.price))+`</span><br>
                        <span class="card-text">Thương Hiệu :`+el.brandname+`</span><br><br>
                        <a href="#" class="btn btn-primary">Xem Thêm</a>
                        <a href="#" class="btn btn-warning ms-3">Đặt Hàng</a>
                      </div>
                    </div>
                  </div>

                    `;
                });
                $("#productfetch").html(str);
            }
        }
    });
}



function addToCart(){
    if (!localStorage.getItem("cart") || localStorage.getItem('cart') == null ){
        var arr =[];
    } else {
        var cart = localStorage.getItem('cart');
        var arr  = JSON.parse(cart);   
    }
    $(".addToCartBtn").click(function (e) { 
        e.preventDefault();
        var id = Number($(this).attr('data-id'));
        var qty = 1 ;
        var item = [id, qty];
        var check = 0;
        arr.forEach(el => {
            if (el[0] == id) {
                el[1]++;
                check = 1;              
            }
        });
        if (check==0){
            arr.push(item);
        }
        localStorage.setItem('cart', JSON.stringify(arr));  
        Toast.fire({
            icon: 'success',
            title: 'them thanh cong'
          })
    });
}
str+=`
<div class="col-md-3 mb-3">
<div class="card" style="width: 100%;">
  <img class="productImage"  src="https://students.trungthanhweb.com/images/" `+ el['images'] + `  >
  <div class="card-body ">
  <a href="#">
    <h5 class="card-title">`+el.name+`</h5>   
    <p class="card-text">
      Giá :`+Intl.NumberFormat('en-US').format(Number(el.price))+`</p>
    <p>Loai san pham :`+el.catename+`</p>
    <p>Thương Hiệu :`+el.brandname+`</p>
    <a href="detail.htmi?id=`+ el.id +`" class="btn btn-primaryms-3">Đặt Hàng</a>    
    data-id="`+ el.id +`"> Chi tiet</a>
    <button class="btn btn-success addToCartBtn"  data-id="`+ el.id +`">Them</button>
  </div>
</div>
</div>

`;
 $("resultProduct").append(str);
 if (res.products.next_page_url != null){
    link = res.products.next_page_url;
 } else {
    $("showmorebtn").hide();
 }
 addToCart();


 function editQuantity() {
    $(".qtyinput").change(function (e) {
    e.preventDefault();
    var id = $(this).attr('data-id');
    var qty = $(this).val();
    var cart = JSON.parse(localStorage.getItem("cart"));
    if (qty == 0) {
    Swal.fire({
    icon: 'warning',
    text: 'Xóa khỏi giỏ hàng 2',
    showDenyButton: true, 
    ShowCancelButton: false, 
    ConfirnButtonText: 'Đúng',
    denyButtonText: `Không`,
    }).then((result) => {
    /* Read more about isConfirmed, isDenied below */ 
    if (result.isConfirmed) {
    var arr = []; 
    cart.forEach(el=> {
    if (el[0] != id) 
    { arr.push(el);
    }
    });
    if (arr.length == 0) {
    localStorage.removeItem("cart");
    } else {
    localStorage.setItem('cart', JSON.stringify(arr));
    }
    Toast.fire({
    icon: 'success',
    title: 'Đã xoa',
    }).then(() => { 
        loadCart()
    })
    } else if (result.isDenied) { 
        loadCart();
    }
})
    }else {
    cart.forEach(el => {
    if (el[0]== id) {
    el[1] = qty;
    }    
});
    localStorage.setItem('cart', JSON.stringify(cart));
    }
    loadCart();
    });
}

function deleteCart() {
    $(".deleteCartItem").click(function (e) { 
        e.preventDefault(); 
        Swal.fire({
    icon: 'question',
    text: 'Xóa sản phẩm khỏi giỏ hàng ? ',
    showDenyButton: true,
    showCancelButton: false, 
    confirmButtonText: 'Xóa', 
    denyButtonText: `Không`, 
    }).then((result) => {
    /* Read more about isConfirmed, isDenied below */ 
    if (result.isConfirmed) {
      var id = $(this).attr('data-id');
      var arr = []; 
    console.log(id);
    var cart = JSON.parse(localStorage.getItem('cart')); 
    cart.forEach(el => {
    if (el[0] != id) {
        arr.push(el);
    }
    });
    if (arr.length == 0) {
    localStorage.removeItem('cart');
    } else {
        localStorage.setItem('cart', JSON.stringify(arr));
    }
    
    Toast.fire({
    icon: 'success',
    title: 'Đã xóa khỏi giỏ hàng'
    }).then(() => {
        loadCart();
    }) 
    } else if (result.isDenied) {
    }
});
})
    }