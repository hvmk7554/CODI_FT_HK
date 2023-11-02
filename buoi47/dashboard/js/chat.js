$(document).ready(function () {
    submitChat();
});
function submitChat() {
    $("#sendMessage").click(function (e) {
        e.preventDefault();
        var mess = $("#message").val().trim();
        if (mess != '') {
            $.ajax({
                type: "post",
                url: "controllers.php?action=submitChat",
                 data: {mess:mess
            },
                dataType: "JSON",
                success: function (res) {
                    console.log(res);
                }
});
        }
});
}