<?php
    require_once('header.php');
?>
<link rel="stylesheet" href="./dashboard/css/chat.css">
<div id="content" class="p-4 p-md-5 pt-5">
<div id="container">
        <aside>
            <header>
                <input type="text" placeholder="search">
            </header>
            <ul>
                <li>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg" alt="">
                    <div>
                        <h2>Prénom Nom</h2>
                        <h3>
                            <span class="status orange"></span>
                            offline
                        </h3>
                    </div>
                </li>
            </ul>
        </aside>
        <main>
            <header>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg" alt="">
                <div>
                    <h2>Chat with Vincent Porter</h2>
                    <h3>already 1902 messages</h3>
                </div>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_star.png" alt="">
            </header>
            <ul id="chat">


            </ul>
            <footer>
                <textarea placeholder="Type your message" id="message"></textarea>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_picture.png" alt="">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_file.png" alt="">
                <a href="#" id="sendMessage">Send</a>
            </footer>
        </main>
    </div>
</div>
<script src="./dashboard/js/chat.js"></script>
<?php
    require_once('footer.php');
?>