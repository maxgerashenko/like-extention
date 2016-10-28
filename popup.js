document.addEventListener('DOMContentLoaded', function() {
    var likeButton = document.getElementById('likeButton');
    likeButton.addEventListener('click', function() {
        heart.click();
        console.log('click');
        alert("Click");
    }, false);
}, false);