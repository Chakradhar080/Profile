document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.sticky-nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('show-menu');
    });
});


// Handle certificate image maximization
function maximizeImage(img) {
    // Create an overlay for the maximized image
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.onclick = function () {
        document.body.removeChild(overlay);
    };

    // Create an image element for the maximized image
    const fullImg = document.createElement('img');
    fullImg.src = img.src;
    fullImg.classList.add('full-image');

    overlay.appendChild(fullImg);
    document.body.appendChild(overlay);
}



// Handle "See more" functionality for projects
document.querySelectorAll('.see-more').forEach(function (element) {
    element.addEventListener('click', function () {
        // Expand the project description or navigate to a detailed project page
    });
});
