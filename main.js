$(document).ready(function () {
    $(document).on('click', '#menuBtn', function () {
        $('.phoneNavigation').toggleClass('openNav');
    });
    $(document).on('click', '.phoneNavigation', function () {
        $('.phoneNavigation').toggleClass('openNav');
    });
});