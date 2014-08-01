
var mictwitter = "";
var micyoutube = "";

$.ajax({
	dataType: "json",
	url: "members.json"
}).done(function (data) {
	var output = "";
	for ( var i in data ) {
		output += "\
		<div class='member'>\
			<img src='http://minecraft-skin-viewer.com/face.php?u="+ data[i].ign +"&s=400'>\
			<span class='name'>"+ i +"</span><br>\
			<span>"+ data[i].ign +"</span>\
			<span class='info'>"+ data[i].info +"</span>\
			<span class='twitter'>"+data[i].twitter+"</span>\
			<span class='youtube'>"+data[i].youtube+"</span>\
		</div>\
		";
	}
	if ( output == "" ) {
		output = "Error whilst loading JSON";
	}
	$("#members").append(output);

	setTimeout(function(){
		$(".member").click(function(){
			$("#memberinfo").removeClass("hidden");
			$("#memberinfo").css("display","block");
			$("#memberinfo").css("transition","all 0s");
			$("#memberinfo").find("*").css("transition","all 0s");
			$("#memberinfo").css("opacity","0");
			$("#memberinfo").css("top", $(this).offset().top - $(window).scrollTop() + ( $(this).height() / 2 ) );
			$("#memberinfo").css("left", $(this).offset().left - $(window).scrollLeft() + ( $(this).width() / 2 ) );
			$("#memberinfo").css("height", $(this).height());
			$("#memberinfo").css("width", $(this).width());
			$("#memberinfo").find("#name").text( $(this).find(".name").text() );
			$("#memberinfo").find("#face").attr("src", $(this).find("img").attr("src") );
			$("#memberinfo").find("#info").html( $(this).find(".info").html() );
			$("#memberinfo #info").find("*").css("opacity", "0");
			//$("#memberinfo").find("img").css("height","0");

			if ( $(this).find(".twitter").text() != "" ) {
				$("#memberinfo #twlink").css("display","block");
				$("#memberinfo #twlink").attr("title","@" + $(this).find(".twitter").text() );
				mictwitter = "http://twitter.com/" + $(this).find(".twitter").text();
			} else {
				$("#memberinfo #twlink").css("display","none");
			}
			if ( $(this).find(".youtube").text() != "" ) {
				$("#memberinfo #ytlink").css("display","block");
				$("#memberinfo #ytlink").attr("title", $(this).find(".youtube").text() );
				micyoutube = "http://youtube.com/" + $(this).find(".youtube").text();
			} else {
				$("#memberinfo #ytlink").css("display","none");
			}

			setTimeout(function(){
				$("#memberinfo").css("transition","all 0.5s");
				$("#memberinfo").find("*").css("transition","");
				$("#memberinfo #info").find("*").css("transition","all 1s");
				$("#memberinfo").css("top","");
				$("#memberinfo").css("left","");
				$("#memberinfo").css("height","");
				$("#memberinfo").css("width","");
				$("#memberinfo").css("opacity","");
				$("#memberinfo #info").find("*").css("opacity", "1");
				//$("#memberinfo").find("*").css("height","");
			},1);
		});
	},1);

});

$("#memberinfo #close").click(function(){
	$("#memberinfo").addClass("hidden");
});

$("#memberinfo #twlink").click(function(){
	window.location = mictwitter;
});
$("#memberinfo #ytlink").click(function(){
	window.location = micyoutube;
});