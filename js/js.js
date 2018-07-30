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
	var anliTime1 = setInterval(anliroll, 4000);
	$(".anliSpan span").click(function() {
		var index = $(this).index();
		var alt = index * '33.33';
		$(this).addClass("anliSpanh").siblings().removeClass("anliSpanh");
		$(".anliList_con").css("transform", "translateX(-" + alt + "%)");
		clearInterval(anliTime1);
		al = index;
		anliTime1 = setInterval(anliroll, 4000)
	})
	$(".anliList_con").hover(function() {
		clearInterval(anliTime1);
	}, function() {
		anliTime1 = setInterval(anliroll, 4000)
	})
	$(".jia_ce").css("opacity", "0");
	$(document).scroll(function() {
		var top = $(document).scrollTop();
		if(top < 300) {
			//			$(".jia_ce").animate({ "opacity": "0" }, 300)
			$(".jia_ce").css( "opacity","0");
		} else if(top>=500) {
			//			$(".jia_ce").animate({ "opacity": "1" }, 300)
			$(".jia_ce").css( "opacity","1");
		}
		
		
		var targetOffset1 = $(".jia_qj_con").offset().top;
		if(top+400>targetOffset1){
			$(".jia_qj_con li").eq(0).animate({"left":"0","opacity":"1"},500);
			setTimeout(function(){
				$(".jia_qj_con li").eq(1).animate({"left":"0","opacity":"1"},500);
			},300)
			setTimeout(function(){
				$(".jia_qj_con li").eq(2).animate({"left":"0","opacity":"1"},500);
			},600)
			setTimeout(function(){
				$(".jia_qj_con li").eq(3).animate({"left":"0","opacity":"1"},500);
			},900)
			setTimeout(function(){
				$(".jia_qj_con li").eq(4).animate({"left":"0","opacity":"1"},500);
			},1200)
		}
//		else if(top-50<=targetOffset1){
//			$(".jia_qj_con li").eq(0).animate({"left":"0","opacity":"1"},1000);
//		}
	})
})