<?php
session_start();
if (!isset($_SESSION['user']) || $_SESSION['user'] == '') {
    header('location:index.php?page=login');
}
require_once 'pdo.php';
require_once 'header.php';
$sql = 'SELECT * FROM response';
$response = pdo_query($sql);
?>
<div id="content" class="p-4 p-md-5 pt-5">
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ResponseModal">
        Thêm phản hồi
    </button>

    <!-- Modal -->
    <div class="modal fade" id="ResponseModal" tabindex="-1" aria-labelledby="ResponseModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="ResponseModalLabel">Response Modal</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <input style="border:1px solid black" type="text" id="question" class="form-control">
                    <input style="border:1px solid black" type="text" id="answer" class="form-control mt-3">

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" id="submitResponseBtn">Lưu</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="EditResponseModal" tabindex="-1" aria-labelledby="EditResponseModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="EditResponseModalLabel">Response Modal</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <input style="border:1px solid black" type="text" id="questionedit" class="form-control">
                    <input style="border:1px solid black" type="text" id="answeredit" class="form-control mt-3">

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" id="submitEditResponseBtn">Lưu</button>
                </div>
            </div>
        </div>
    </div>
    <div class="mt-3">
        <div class="table-responsive">
            <table class="table table-primary">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Question</th>
                        <th scope="col">Answer</th>
                        <th scope="col">Ngày tạo</th>
                        <th scope="col">Xoá</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                        foreach ($response as $key => $value) { ?>
                    <tr class="">
                        <td scope="row"><?=(++$key)?></td>
                        <td><?=$value['question']?></td>
                        <td><?=$value['answer']?></td>
                        <td><?=$value['created_at']?></td>
                        <td><button class="btn btn-danger deleteResponseBtn" data-id="<?=$value['id']?>">Xoá</button>
                        <button class="btn btn-warning editResponseBtn" data-question="<?=$value['question']?>" 
                        data-response="<?=$value['answer']?>" data-id="<?=$value['id']?>">Sửa</button>
                    </td>
                    </tr>

                    <?php    }
                    
                    ?>

                </tbody>
            </table>
        </div>

    </div>
</div>
<script src="./dashboard/js/response.js"></script>
<?php
require_once 'footer.php';
?>
