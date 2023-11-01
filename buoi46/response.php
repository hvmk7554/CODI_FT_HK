<script src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>

<?php
session_start();
if (!isset($_SESSION['user']) || $_SESSION['user'] == '') {
    header('location:index.php?page=login');
}
require_once('header.php')
?>

<div id="content" class="p-4 p-md-5 pt-5">
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ResponseModal">
        Add response
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
                    <input style="border:1px solid black " type="text" id='question' class="form-control">
                    <input style="border:1px solid black " type="text" id='answer' class="form-control mt-3">

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" id="submitResponseBtn">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</div>
<script src='./dashboard/js/response.js'></script>
<?php
require_once('footer.php')
?>