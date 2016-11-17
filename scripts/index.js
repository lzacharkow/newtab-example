$(document).ready(function() {

    // MAKE THE WORLD SPIN
    var worldElement = $('.world')[0],
        worldImages = [
            'images/world-1.png',
            'images/world-2.png',
            'images/world-3.png'
        ],
        currentImageIndex = 0;

    setInterval(spinWorld, 1000);

    function spinWorld() {
        currentImageIndex ++;

        if (currentImageIndex === worldImages.length) {
            currentImageIndex = 0;
        }

        worldElement.setAttribute('src', worldImages[currentImageIndex]);
    }

});
