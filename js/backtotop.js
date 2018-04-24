$(document).ready(function(){ 
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#backtotop').fadeIn(); 
        } else { 
            $('#backtotop').fadeOut(); 
        } 
    }); 
    $('#backtotop').click(function(e){ //scrolling animation
        e.preventDefault(); //Keeps button from blinking when function is activated
        $("html, body").animate({ scrollTop: 0 }, 500); 
        return false; 
    }); 
});