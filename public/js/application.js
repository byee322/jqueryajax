$(document).ready(function(){
	$("#get_color").on("click",function(){
		$.ajax({
			method: "POST",
			url: "/color"
		}).done(function(response){
			console.log(response.cell);
			$("#color_me").children("li").eq(response.cell).css("background-color", response.color)
		});
	});
});