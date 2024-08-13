// A $( document ).ready() block.
// This is to initiate Javascript. Always has to go on top. 

$( document ).ready(function() {
    
    // This is the hamburger menu
    $('.hamburger').click(function(){

        $(this).toggleClass('active');
        $('.mobile-menu').fadeToggle();

    });
