$(function() {

	// 슬라이드
	setInterval(function(){
		$(".slide").animate({"left":"-800px"},500,function(){ 
		$(".slide").append($(".slide li:first-child")).css({"left":"0"});
		}); 

	
	},3000); 


	// $("#left").click(function() {
	// 	$("#slide").animate({"left":"-500px"}, 500, function() {
	// 		$("#slide").append($("#slide li:first-child")).css({"left":"0"});
	// 	});
	// });
	// $("#right").click(function() {
	// 	$("#slide").prepend($("#slide li:last-child")).css({"left":"-500px"}).animate(
	// 		{"left":"0"}, 500);
	// });
	
	// function auto() {
	// 	$("#slide").animate({"left":"-500px"}, 500, function() {
	// 		$("#slide").append($("#slide li:first-child")).css({"left":"0"});
	// 	});
	// }

	// var timer = setInterval(auto, 3000);
	// $(".imgSlide").on("mouseover", function() {
	// 	clearInterval(timer);
	// });
	
	// $(".imgSlide").on("mouseover", function() {
	// 	timer = setInterval(auto, 3000);
	// });
	
});