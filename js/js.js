$(document).ready(function() {
	$("nav a").eq(n).addClass("hover");
	$(".ban div").eq(0).css("opacity", "1");
	$(".ban div").eq(0).siblings().css("opacity", "0");
	$(".banList span").eq(0).addClass("spH");
	var a = 1;
	var b;

	function roll(b) {

		$(".ban .ban_con").eq(b?b:a).animate({ "opacity": "1" }, 1000);
		$(".ban .ban_con").eq(b?b:a).siblings().css("opacity", "0");
		$(".banList span").eq(b?b:a).addClass("spH").siblings().removeClass("spH");
		if(a == 2) {
			a = -1;
		}
		a++;
	}
	var time1 = setInterval(roll, 4000)
//	$(".banList span").click(function() {
//		var lsIndex = $(this).index();
//		a = lsIndex;
//		b = lsIndex;
//		clearInterval(time1);
//		roll();
//		//		$(".ban .ban_con").eq(a).find("article").css("transform", "translate(0px,8vw)");
//		//		$(".ban .ban_con").eq(a).find("article").siblings("article").css("transform", "translate(0px,-8vw)");
//		//		$(".ban .ban_con").eq(a).find("article").animate({ "transform": "translate(0px,0vw)" }, 1000);
//		//		$(".ban .ban_con").eq(a).find("article").siblings("article").animate({ "transform": "translate(0px,0vw)" }, 1000);
//		//		$(".ban .ban_con").eq(a).animate({ "opacity": "1" }, 1000);
//		//		$(".ban .ban_con").eq(a).siblings().css("opacity", "0");
//		$(".banList span").eq(a-1).addClass("spH").siblings().removeClass("spH");
//		a++;
//		time1 = setInterval(roll, 4000);
//	})
})