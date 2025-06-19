$(document).ready(function () {
    $(document).on('click', '#menuBtn', function () {
        $('.phoneNavigation').toggleClass('openNav');
    });
    $(document).on('click', '.phoneNavigation', function () {
        $('.phoneNavigation').animate({ transform: 'translateX(-100%)' }, 600, function () {
            $('.phoneNavigation').toggleClass('openNav');
        });
    });
});