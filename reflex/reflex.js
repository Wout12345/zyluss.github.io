
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
				<span>"+ i +"</span>\
			</div>\
			";
		}
		if ( output == "" ) {
			output = "Error whilst loading JSON";
		}
		$("#members").append(output);

	});

});