function anchor() {
    $('.category').on('click', function () {
        var page = $(this).attr('href');
        var speed = 750;
        $('html, body').animate({scrollTop: $(page).offset().top}, speed); // Go
        return false;
    });
    
    $('.basket').on('click', function () {
        var page = $(this).attr('href');
        var speed = 750;
        $('html, body').animate({scrollTop: $(page).offset().top}, speed); // Go
        return false;
    });
}

function anchorAdmin() {
    $('.for-anchor').on('click', function () {
        var page = $(this).attr('href');
        var speed = 750;
        $('html, body').animate({scrollTop: $(page).offset().top}, speed); // Go
        return false;
    });
}