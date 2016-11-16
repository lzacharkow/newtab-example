// ROTATE THE WORLD

$(document).ready(function() {

    // First, get the world element from the page.
    var worldElement = $('.world')[0];
    // Fill an array with the image sources that we want to go through.
    var worldImages = [
        'images/world-1.png',
        'images/world-2.png',
        'images/world-3.png'
    ];
    // Set the current world image index.
    // We'll use this to get the next world image to make the globe "spin".
    var currentImageIndex = 0;

    function spinWorld() {
        // Increment the world image.
        currentImageIndex ++;
        // Set the world back to zero if the current index exceeds how many images we have.
        if (currentImageIndex === worldImages.length) {
            currentImageIndex = 0;
        }
        // Set the source to the new world image.
        worldElement.setAttribute('src', worldImages[currentImageIndex]);
    }

    // Every second, spin the world!
    setInterval(spinWorld, 1000);
});
