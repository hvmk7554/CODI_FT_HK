$(document).ready(function () {
    addResponse();
    deleteResponse();
    editResponse();
});
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
  function editResponse(){
    $(".editResponseBtn").click(function (e) { 
        e.preventDefault();
        var id=$(this).attr('data-id');
        var question=$(this).attr('data-question');
        var answer=$(this).attr('data-response');
        $("#questionedit").val(question);
        $("#answeredit").val(answer);
        $("#EditResponseModal").modal('show');
        $("#submitEditResponseBtn").click(function (e) { 
            e.preventDefault();
            question = $("#questionedit").val().trim();
            answer = $("#answeredit").val().trim();
            if(question==''||answer==''){
                Toast.fire({
                    icon: 'error',
                    title: 'Chưa nhập đủ dữ liệu'
                  })
            }else{
                $.ajax({
                    type: "post",
                    url: "controllers.php?action=editResponse",
                    data: {
                        id:id,
                        question:question,
                        answer:answer
                    },
                    dataType: "JSON",
                    success: function (res) {
                        if(res.check==true){
                            Toast.fire({
                                icon: 'success',
                                title: "Sửa thành công"
                              }).then(()=>{
                                window.location.reload();
                              })
                        }else if(res.check==false){
                            if(res.msg){
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

    });
  }
function addResponse(){
    $("#submitResponseBtn").click(function (e) { 
        e.preventDefault();
        var question = $("#question").val().trim();
        var answer = $("#answer").val().trim();
        if(question==''){
            Toast.fire({
                icon: 'error',
                title: 'Thiếu câu hỏi'
              })
        }else if(answer==''){
            Toast.fire({
                icon: 'error',
                title: 'Thiếu phản hồi'
              })
        }else{
            $.ajax({
                type: "post",
                url: "controllers.php?action=createResponse",
                data: {
                    question:question,
                    answer:answer
                },
                dataType: "JSON",
                success: function (res) {
                    if(res.check==true){
                        Toast.fire({
                            icon: 'success',
                            title: "Thêm thành công"
                          }).then(()=>{
                            window.location.reload();
                          })
                    }else if(res.check==false){
                        if(res.msg){
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
function deleteResponse(){
    $(".deleteResponseBtn").click(function (e) { 
        e.preventDefault();
        var id =$(this).attr('data-id');
        Swal.fire({
            icon:'question',
            text: 'Xoá không?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Xoá',
            denyButtonText: `Không`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                $.ajax({
                    type: "post",
                    url: "controllers.php?action=deleteResponse",
                    data: {id:id},
                    dataType: "JSON",
                    success: function (res) {
                        if(res.check==true){
                            Toast.fire({
                                icon: 'success',
                                title: "Xoá thành công"
                              }).then(()=>{
                                window.location.reload();
                              })
                        }else if(res.check==false){
                            if(res.msg){
                                Toast.fire({
                                    icon: 'error',
                                    title: res.msg
                                  })
                            }
                        }
                    }
                });
            } else if (result.isDenied) {
            }
          })
    });
}