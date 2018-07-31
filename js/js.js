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
	$(".ce_nav").css("opacity", "0");
	$(document).scroll(function() {
		var top = $(document).scrollTop();
		if(top < 300) {
			$(".ce_nav").css("opacity", "0");
		} else if(top >= 500) {
			$(".ce_nav").css("opacity", "1");
		}

	})
	$(".ce_nav a").click(function() {
		if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
			if($target.length) {
				var targetOffset = $target.offset().top;
				$('html,body').animate({ scrollTop: targetOffset }, 800);
				return false;
			}
		}
	});
	$(".job_shou1").click(function() {
		$(".about_need1").css({ "opacity": "1", "transform": "scale(1,1)", "left": "12.5%" });
	})
	$(".job_shou2").click(function() {
		$(".about_need2").css({ "opacity": "1", "transform": "scale(1,1)", "left": "12.5%" });
	})
	$(".job_shou3").click(function() {
		$(".about_need3").css({ "opacity": "1", "transform": "scale(1,1)", "left": "12.5%" });
	})
	$(".job_shou4").click(function() {
		$(".about_need4").css({ "opacity": "1", "transform": "scale(1,1)", "left": "12.5%" });
	})
	$(".job_shou5").click(function() {
		$(".about_need5").css({ "opacity": "1", "transform": "scale(1,1)", "left": "12.5%" });
	})
	$(".about_close1").click(function() {
		$(".about_need1").css({ "opacity": "0", "transform": "scale(0,0)", "left": "-30%" });
	})
	$(".about_close2").click(function() {
		$(".about_need2").css({ "opacity": "0", "transform": "scale(0,0)", "left": "-5%" });
	})
	$(".about_close3").click(function() {
		$(".about_need3").css({ "opacity": "0", "transform": "scale(0,0)", "left": "12.5%" });
	})
	$(".about_close4").click(function() {
		$(".about_need4").css({ "opacity": "0", "transform": "scale(0,0)", "left": "30%" });
	})
	$(".about_close5").click(function() {
		$(".about_need5").css({ "opacity": "0", "transform": "scale(0,0)", "left": "50%" });
	})

})