$(window).load(function() {
  $( ".header" ).animate({
    width: "70%",
    opacity: 1,
    marginLeft: "0.6px",
    fontSize: "3em",
    borderWidth: "10px"
  }, 1500 );
});


$(".header").css("top",$(".header").outerHeight());

$(window).resize(function(){
  $(".header").css("top",$(".header").outerHeight());
});
$( document ).click(function() {
  $( ".header" ).toggle( "fold" );
});
