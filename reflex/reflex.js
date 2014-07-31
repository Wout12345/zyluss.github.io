
$.ajax({
	dataType: "json",
	url: "members.json"
}).done(function (data) {
	var output = "";
	for ( var i in data ) {
		output += "\
		<div class='member'>\
			<img src='http://minecraft-skin-viewer.com/face.php?u="+ i +"&s=400'>\
			<span class='name'>"+ i +"</span><br>\
			<span>&lt;youtube&gt;</span>\
		</div>\
		";
	}
	if ( output == "" ) {
		output = "Error whilst loading JSON";
	}
	$("#members").append(output);

	setTimeout(function(){
		$(".member").click(function(){
			$("#memberinfo").css("display","block");
			$("#memberinfo").css("transition","all 0s");
			$("#memberinfo").find("*").css("transition","all 0s");
			$("#memberinfo").css("opacity","0");
			$("#memberinfo").css("top", $(this).offset().top - $(window).scrollTop() + ( $(this).height() / 2 ) );
			$("#memberinfo").css("left", $(this).offset().left - $(window).scrollLeft() + ( $(this).width() / 2 ) );
			$("#memberinfo").css("height", $(this).height());
			$("#memberinfo").css("width", $(this).width());
			$("#memberinfo").find("*").css("transform", "scale(0)");
			$("#memberinfo").find("#name").text( $(this).find(".name").text() );
			$("#memberinfo").find("#face").attr("src", $(this).find("img").attr("src") );
			setTimeout(function(){
				$("#memberinfo").css("transition","all 0.5s");
				$("#memberinfo").find("*").css("transition","all 0.5s");
				$("#memberinfo").css("top","");
				$("#memberinfo").css("left","");
				$("#memberinfo").css("height","");
				$("#memberinfo").css("width","");
				$("#memberinfo").css("opacity","");
				$("#memberinfo").find("*").css("transform","");
			},1);
		});
	},1);

});

$(document).ready(function(){

	

});