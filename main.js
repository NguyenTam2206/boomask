var onePageClick = function () {
    $(document).on('click', '.nav-item', function () {
        $('#myNavbar').removeClass('in')
    });
};

onePageClick();

$(document).ready(function () {
    $('.nav-item').on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 300, function () {
                window.location.hash = hash;
            });
        }
    });
});