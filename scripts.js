// A $( document ).ready() block.
// This is to initiate Javascript. Always has to go on top. 
   

    $(document).ready(function() {
        $('.hamburger').click(function() {
            $(this).toggleClass('active');
            $('.mobile-menu').fadeToggle();
        });
    });
    