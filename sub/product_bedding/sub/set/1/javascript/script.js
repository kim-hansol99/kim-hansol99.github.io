// JavaScript Document

jQuery(document).ready(function(){
	
	/*메뉴*/
	$('.navi>li').mouseover(function(){        
		$(this).find('.submenu').stop().slideDown(500);
	}).mouseout(function(){
		$(this).find('.submenu').stop().slideUp(500);
	});
 


	/*슬라이드*/
	setInterval(function(){
		$(".slide").animate({"left":"-800px"},500,function(){ 
		$(".slide").append($(".slide li:first-child")).css({"left":"0"});
		}); 
	},3000); 
  
  
  
 
	/*탭메뉴*/
	$(function(){
		$('.tabmenu>li>a').click(function(){
			$(this).parent().addClass("active").siblings().removeClass("active");
			return false;
		});
	});



	/*레이어팝업*/
	$(".notice li:first").click(function(){
		$("#modal").addClass("active");
	});
	
	$(".btn").click(function(){
		$("#modal").removeClass("active");
	});
	
});
	
