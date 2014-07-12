$("#page").css("top",$(".header").outerHeight());

$(window).resize(function(){
  $("#page").css("top",$(".header").outerHeight());
});
$( document ).click(function() {
  $( "#header" ).toggle( "fold" );
});
