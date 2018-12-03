$(function() {
    var headNav = $("header");
    $(window).on('load scroll', function () {
        if($(this).scrollTop() > 500 && headNav.hasClass('fixed') == false) {
            headNav.css({"top": '-100px'});
            headNav.addClass('fixed');
            headNav.animate({"top": 0},600);}

        else if($(this).scrollTop() < 500 && headNav.hasClass('fixed') == true){
            headNav.removeClass('fixed');
        }
    });
});