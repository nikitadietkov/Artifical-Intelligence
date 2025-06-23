$(document).ready(function () {
    showAndHide('nav', '.phoneNavigation', 'openNav')
    showAndHide('#playVideo', '.video', 'videoShow')
});

function showAndHide(triggerSelector, targetSelector, klass) {
    $(document).on('click', triggerSelector, function (e) {
        e.stopPropagation();
        $(targetSelector).addClass(klass)
    });
    $(document).on('click', targetSelector, function (e) {
        e.stopPropagation();
    });
    $(document).on('click', function () {
        $(targetSelector).removeClass(klass);
    });
    $(document).on('click', `${targetSelector} p, ${targetSelector} button`, function () {
        $(targetSelector).removeClass(klass);
    });
}