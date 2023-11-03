$(document).ready(function () {
    submitChat();
    loadChat();
    $("#chat").animate({ 
        scrollTop: '9999999px' 
    }, 2000); 

});
function loadChat(){
    $.ajax({
        type: "post",
        url: "controllers.php?action=loadChat",
        dataType: "JSON",
        success: function (res) {
            if (res.length > 0) {
                var str = ``;
                res.forEach(el => {
                    str += `
                    <li class="me">
                    <div class="entete">
                        <h3>`+el.created_at+`</h3>
                        <h2>Me</h2>
                        <span class="status blue"></span>
                    </div>
                    <div class="triangle"></div>
                    <div class="message">
                       `+el.question+`
                    </div>
                </li>
                <li class="you">
                    <div class="entete">
                        <span class="status green"></span>
                        <h2>Bot</h2>
                        <h3>`+el.created_at+`</h3>
                    </div>
                    <div class="triangle"></div>
                    <div class="message">
                    `+el.answer+`
                    </div>
                </li>
                    `
                });
                $("#chat").html(str);
            }
        }
    });
}
function submitChat() {
    $("#sendMessage").click(function (e) {
        e.preventDefault();
        var mess = $("#message").val().trim();
        if (mess != '') {
            $.ajax({
                type: "post",
                url: "controllers.php?action=submitChat",
                data: {
                    mess: mess
                },
                dataType: "JSON",
                success: function (res) {
                    if (res.length > 0) {
                        var str = ``;
                        res.forEach(el => {
                            str += `
                            <li class="me">
                            <div class="entete">
                                <h3>`+el.created_at+`</h3>
                                <h2>Me</h2>
                                <span class="status blue"></span>
                            </div>
                            <div class="triangle"></div>
                            <div class="message">
                               `+el.question+`
                            </div>
                        </li>
                        <li class="you">
                            <div class="entete">
                                <span class="status green"></span>
                                <h2>Bot</h2>
                                <h3>`+el.created_at+`</h3>
                            </div>
                            <div class="triangle"></div>
                            <div class="message">
                            `+el.answer+`
                            </div>
                        </li>
                            `
                        });
                        $("#chat").html(str);
                        $("#message").val('');
                    }

                }
            });
        } else {
            alert("NNone");
        }
    });
}