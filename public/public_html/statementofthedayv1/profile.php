<?php
include 'functions.php';
checkLogin();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
</head>
<body class="flex-column center-hor">
<?php
loadHeader();
profileLoadPosts();
?>

<div id="posts-box">

</div>

<button id="load-more-btn" onclick="loadMorePostsProfile()">load posts</button>

<?php
loadFooter();
?>
<script src="https://kit.fontawesome.com/99a47fae58.js" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="main.js"></script>
</body>
</html>
