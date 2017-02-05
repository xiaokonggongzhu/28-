//$(function(){
//	$("#main").fullpage();
//})
$(function(){
$("#main").fullpage({
anchors: ['page1','page2','page3','page4','page5','page6'],//导航链接锚点
menu: '.mainnav',//作为导航的元素
//controlArrows:false,
//navigation:true,
});
})//jq ed


$(function(){
	//进的显示
	$(".en").mouseover(function(){
		$(this).children(".zz").css("visibility","visible");
	}).mouseout(function(){
		$(this).children(".zz").css("visibility","hidden");
	});
	
	//点击进入index的index1
	$(".en").click(function(){
		$("#main").css("display","none");
		$(".index1").css("display","block");
		$.fn.fullpage.setAllowScrolling(false);
		$.fn.fullpage.setKeyboardScrolling(false);
		
		
	});
	
	//导航不管到哪点击都能进入
	$(".mainnav li").click(function(){
		$(".index1").css("display","none");
		$("#main").css("display","block");
	});
	
	//
})
