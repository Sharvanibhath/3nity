$("#sidebar-toggle").click(function(e){
    $('#side-wrapper,#main-wrapper,#sidebar-toggle,#site-overlay').toggleClass('active');
    if($('#login-wrapper').hasClass('active')){
        $('#login-wrapper,#login-toggle').toggleClass('active');
    }
});
$("#login-toggle").click(function(e){
    $('#login-wrapper,#site-overlay,#login-toggle').toggleClass('active');
    if($('#side-wrapper').hasClass('active')){
        $('#side-wrapper,#main-wrapper,#sidebar-toggle').toggleClass('active');
    }

});
/*
 $(":not(#side-wrapper)").click(function(e){
 if($('#side-wrapper').hasClass('active')) {
 $('#side-wrapper,#main-wrapper,#sidebar-toggle,#site-overlay').toggleClass('active');
 }
 });
 */