$(window).load(function() {
  $( ".header" ).animate({
    width: "70%",
    opacity: 1,
    marginLeft: "0.6px",
    fontSize: "3em",
    borderWidth: "10px"
  }, 1500 );
});

$(window).ready(function() {
  $( "div" ).show( "slow", function() {
    // Div show
  });
});
