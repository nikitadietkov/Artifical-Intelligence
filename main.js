$(document).ready(function () {
    showAndHide('nav', '.phoneNavigation', 'openNav')
    showAndHide('#playVideo', '.video', 'videoShow')



    let perPageCount = 0;
    if (window.innerWidth >= 700) {
        perPageCount = 5;
    } else {
        perPageCount = 2 
    }

    var splide = new Splide('.splide', {
        type: 'loop',
        perPage: perPageCount,
        perMove: 1,
    });

    splide.mount();
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