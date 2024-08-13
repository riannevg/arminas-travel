$(document).ready(function() {
    $('.hamburger').click(function() {
        // Check if screen width is less than or equal to 64em (1024px)
        if ($(window).width() <= 1024) {
            $('.mobile-menu').fadeToggle();
        }
    });

    // Optional: close the menu when clicking outside of it
    $(document).click(function(event) {
        if (!$(event.target).closest('.hamburger, .mobile-menu').length) {
            if ($('.mobile-menu').is(':visible')) {
                $('.mobile-menu').fadeOut();
                $('.hamburger').removeClass('active');
            }
        }
    });
});
