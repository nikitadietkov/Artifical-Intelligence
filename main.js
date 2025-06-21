$(document).ready(function () {
    showAndHide('nav', '.phoneNavigation', 'openNav')
    showAndHide('#playVideo', '.video', 'videoShow')
});

function showAndHide(triggerSelector, targetSelector, klass) {
    $(document).on('click', triggerSelector, function (e) {
        e.stopPropagation();
        $(targetSelector).show(0, function () {
            $(targetSelector).animate({ opacity: 1 }, 300)
        });
    });
    $(document).on('click', targetSelector, function (e) {
        e.stopPropagation();
    });
    $(document).on('click', function () {
        $(targetSelector).animate({opacity: 0}, 300, function () {
            $(targetSelector).hide(0)
        });
    });
    $(document).on('click', `${targetSelector} p`, function () {
        $(targetSelector).animate({ opacity: 0 }, 300, function () {
            $(targetSelector).hide(0)
        });
    });
    $(document).on('click', `${targetSelector} button`, function () {
        $(targetSelector).animate({ opacity: 0 }, 300, function () {
            $(targetSelector).hide(0)
        });
    });
}