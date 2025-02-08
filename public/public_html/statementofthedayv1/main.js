// ihawp


// load-more-posts.php
function loadMorePosts() {
    $(document).ready(function() {
        var offset = 25; // Initial offset value
        var limit = 25; // Number of posts to load on each "Load More" click

        function loadPosts() {
            $.ajax({
                url: "load-more-posts.php",
                type: "POST",
                data: { offset: offset, limit: limit },
                success: function(response) {
                    if (response !== '') {
                        $("#posts-box").append(response);
                        offset += limit;
                    } else {
                        $("#posts-box").append('no mnore posts');
                    }
                },
                error: function() {
                    alert("Error loading more posts.");
                }
            });
        }

        $("#load-more-button").on("click", function() {
            loadPosts(limit);
        });

        // Initial load
        loadPosts(limit);
    });
}

function loadMorePostsFollowing() {
    $(document).ready(function() {
        function loadPosts() {
            $.ajax({
                url: "load-more-posts-following.php",
                type: "POST",
                data: {},
                success: function(response) {
                    if (response !== '') {
                        $("#posts-box").append(response);
                    } else {
                        $("#posts-box").append('no mnore posts');
                    }
                },
                error: function() {
                    alert("Error loading more posts.");
                }
            });
        }

        $("#load-more-button").on("click", function() {
            loadPosts();
        });

        // Initial load
        loadPosts();
    });
}

function loadMorePostsProfile(offset) {
    $.ajax({
        url: "load-more-posts-profile.php",
        type: "POST",
        data: {},
        success: function(response) {
            if (response !== '') {
                $("#posts-box").append(response);
            }
        },
        error: function() {
            alert("Error loading more posts.");
        }
    });
}


function viewPost(postID, username) {
    window.location.href = 'viewpost.php?postID=' + postID + '&username=' + username;
}

function addLike(event, postID, posterID) {
    event.stopPropagation();
    $(document).ready(function() {
        $.ajax({
            url: "addPostLike.php",
            type: "POST",
            data: { post_id: postID, poster_id: posterID },
            success: function(response) {
                var wow = document.getElementById(`post-likes-count-${postID}`);
                if (response === 'Liked!') {
                    let current = parseInt(wow.innerText);
                    wow.innerText = current + 1;
                } else {
                    wow.innerText -= 1;
                }
            },
            error: function() {
                alert("error adding the like");
            }
        });
    });
}


function displayCommentBox(event, postID) {
    event.stopPropagation();
    const body = document.getElementById("body");
    body.style.overflow = 'hidden';
    const main = document.getElementById("comment-popup");
    main.style.display = 'flex';
    const commentForm = document.getElementById("comment-form");

    const hiddenInput = document.createElement("input");
    hiddenInput.type = "hidden";
    hiddenInput.name = "post_id";
    hiddenInput.value = postID;

    // Append the hidden input field to the comment form
    commentForm.appendChild(hiddenInput);

    main.scrollIntoView({ behavior: "smooth", block: "start" });
}


function stopDisplayCommentBox() {
    const body = document.getElementById("body");
    body.style.overflow = 'scroll';
    const comment = document.getElementById("comment-popup");
    comment.style.display = 'none';
}



function callError(error) {
    return `
        <div id="error-box" class="flex-row center-hor">
            <h1><i class="fa-solid fa-circle-exclamation noti-icon"></i> ${error}</h1>
        </div>
    `;
}
function callSuccess(success) {
    return `
        <div id="success-box" class="flex-row center-hor">
            <h1><i class="fa-solid fa-check"></i> ${success}</h1>
        </div>
    `;
}

function addFollower(pbfID) {
    const followButton = document.getElementById("follow-button");
    const followCount = document.getElementById("follow-count");
    var change = parseInt(followCount.innerText);
    $(document).ready(function() {
        $.ajax({
            url: "addFollower.php",
            type: "POST",
            data: { person_being_followed: pbfID },
            success: function(response) {
                if (response === 'true') {
                    change += 1;
                    followCount.innerText = change;
                    followButton.innerText = 'unfollow';
                } else if (response === 'false') {
                    change -= 1;
                    followCount.innerText = change;
                    followButton.innerText = 'follow';
                }
            },
            error: function() {
                console.log("AJAX request failed.");
            }
        });
    });
}

function deletePost(event, postID) {
    event.stopPropagation();
    $(document).ready(function() {

        $.ajax({
            url: "deletePost.php",
            type: "POST",
            data: { post_id: postID },
            success: function(response) {
                if (response === 'true') { // wasn't accepting regular true and false, so I am using this for now!.
                    const wow = document.getElementById("post-menu-" + commentID);
                    wow.style.display = 'none';
                } else if (response === 'false') {

                }
            },
            error: function() {
                console.log("AJAX request failed.");
            }
        });
    });
}
function deleteComment(event, commentID) {
    event.stopPropagation();
    $(document).ready(function() {

        $.ajax({
            url: "deleteComment.php",
            type: "POST",
            data: { comment_id: commentID },
            success: function(response) {
                if (response === 'true') { // wasn't accepting regular true and false, so I am using this for now!.
                    const wow = document.getElementById("post-menu-" + commentID);
                    wow.style.display = 'none';
                } else if (response === 'false') {

                }
            },
            error: function() {
                console.log("AJAX request failed.");
            }
        });
    });
}
$(document).ready(function() {
    // Add an event listener for the post-menu-dots class
    $(".post-menu-dots").on("click", function(event) {
        event.stopPropagation();
        const postID = $(this).data("post-id");
        const postMenu = $("#post-menu-" + postID);

        if (postMenu.css("display") === "none") {
            displayPostMenu(event, postID);
        } else {
            hidePostMenu(postID);
        }
    });
});
$(document).ready(function() {
    // Add an event listener for the post-menu-dots class
    $(".comment-menu-dots").on("click", function(event) {
        event.stopPropagation();
        const postID = $(this).data("comment-id");
        const postMenu = $("#post-menu-" + postID);

        if (postMenu.css("display") === "none") {
            displayPostMenu(event, postID);
        } else {
            hidePostMenu(postID);
        }
    });
});

function displayPostMenu(event, postID) {
    event.stopPropagation();
    const postMenu = document.getElementById("post-menu-"+postID);
    postMenu.style.display = 'flex';
}
function hidePostMenu(postID) {
    const postMenu = document.getElementById("post-menu-"+postID);
    postMenu.style.display = 'none';
}
function deletePost(event, postID) {
    event.stopPropagation();

    $.ajax({
        url: "deletePost.php",
        type: "POST",
        data: { post_id: postID },
        success: function(response) {

        }
    });

}
