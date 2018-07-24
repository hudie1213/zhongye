$(document).ready(function() {
	$("nav a").eq(n).addClass("hover");
	$(".ban div").eq(0).css("opacity", "1");
	$(".ban div").eq(0).siblings().css("opacity", "0");
	var a = 1;
	var time1 = setInterval(function() {

			$(".ban .a").eq(a).animate({ "opacity": "1" }, 500);
			$(".ban .a").eq(a).siblings().animate({ "opacity": "0" }, 500);
			$(".ban div").eq(a).find("article").animate({ "marginTop": "0" }, 1000);
			$(".ban div").eq(a).find("p").animate({ "paddingTop": "0" }, 1000);
			if(a == 2) {
				a = -1;
			}
			a++;
		},
		4000)
});