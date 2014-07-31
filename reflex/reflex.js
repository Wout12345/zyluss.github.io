
$(document).ready(function(){

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

	});

});