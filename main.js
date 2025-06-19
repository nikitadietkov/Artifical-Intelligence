$(document).ready(function () {
    $(document).on('click', '#menuBtn', function () {
        $('.phoneNavigation').addClass('openNav');
    });
    $(document).on('click', '.phoneNavigation', function () {
        $('.phoneNavigation').removeClass('openNav');
    });
});