$(document).ready(function() {
	var windowWid = $(window).width();
	var windowHei = $(window).height();
	$(".zinav a").eq(n).addClass("zihover");

	var al = 1;
	$(".anliSpan span").eq(0).addClass("anliSpanh").siblings().removeClass("anliSpanh");

	function anliroll() {
		$(".anliSpan span").eq(al).addClass("anliSpanh").siblings().removeClass("anliSpanh");
		var alt = al * '33.33';
		$(".anliList_con").css("transform", "translateX(-" + alt + "%)");
		if(al == 2) {
			al = -1;
		}
		al++;
	}
	var anliTime1 = setInterval(anliroll, 41000);
	$(".anliSpan span").click(function() {
		var index = $(this).index();
		var alt = index * '33.33';
		$(this).addClass("anliSpanh").siblings().removeClass("anliSpanh");
		$(".anliList_con").css("transform", "translateX(-" + alt + "%)");
		clearInterval(anliTime1);
		al = index;
		anliTime1 = setInterval(anliroll, 14000)
	})
	$(".anliList_con").hover(function() {
		clearInterval(anliTime1);
	}, function() {
		anliTime1 = setInterval(anliroll, 41000)
	})

	
})