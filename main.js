$(document).ready(function()
{
	
	$("#lie_button").on("click", function()
	{
		
		$(this).css("border", "2px solid green");
		
		$("h1").html("<h1>Correct</h1>");
		
		$("h1").css({"display": "flex", "justify-content": "center", "color": "green"});
		
	});
	
	
	$(".truth_button").on("click", function()
	{
		
		$(this).css("border", "2px solid red");
		
		$("h1").html("<h1>Wrong, try again</h1>");
		
		$("h1").css({"display": "flex", "justify-content": "center", "color": "red"});
		
	});
	
});