$(document).scroll(function () {
    var scroll = $(this).scrollTop();
    if (scroll > 50) {
        $(".nav-bar").addClass("nav-shadow");
        $(".nav-bar .logo").removeClass("logo-fixed");
    }
    else {
        $(".nav-bar").removeClass("nav-shadow");
        $(".nav-bar .logo").addClass("logo-fixed");
    }
})