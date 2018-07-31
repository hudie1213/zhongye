$(document).ready(function() {
	$("nav a").eq(n).addClass("hover");
	$(".ban div").eq(0).css("opacity", "1");
	$(".ban div").eq(0).siblings().css("opacity", "0");
	$(".banList span").eq(0).addClass("spH");
	var a = 1;
	$(".smv").smoove({
		offset: '15%'
	})

	function roll() {

		$(".ban .ban_con").eq(a).animate({ "opacity": "1" }, 1000);
		$(".ban .ban_con").eq(a).siblings().css("opacity", "0");
		$(".banList span").eq(a).addClass("spH").siblings().removeClass("spH");
		if(a == 2) {
			a = -1;
		}
		a++;
	}
	var time1 = setInterval(roll, 4000)

	$(".indexaside a").eq(0).addClass("indAsidea");
	$(document).scroll(function() {
		var targetOffset1 = $("header").offset().top;
		var targetOffset2 = $(".sy_bj").offset().top;
		var targetOffset3 = $(".sm_bj").offset().top;
		var targetOffset4 = $(".rc_bj").offset().top;
		var targetOffset5 = $(".fa_bj").offset().top;
		var targetOffset6 = $(".hz_bj").offset().top;
		var targetOffset7 = $(".xw_bj").offset().top;
		var targetOffset8 = $(".lx_bj").offset().top;
		var top = $(document).scrollTop();
		if(top < 300) {
			$(".indexaside a").eq(0).addClass("indAsidea").siblings().removeClass("indAsidea");
		} else if(top < targetOffset2) {
			$(".indexaside a").eq(1).addClass("indAsidea").siblings().removeClass("indAsidea");
		} else if(top < targetOffset3) {
			$(".indexaside a").eq(2).addClass("indAsidea").siblings().removeClass("indAsidea");
		} else if(top < targetOffset4) {
			$(".indexaside a").eq(3).addClass("indAsidea").siblings().removeClass("indAsidea");
		} else if(top < targetOffset5) {
			$(".indexaside a").eq(4).addClass("indAsidea").siblings().removeClass("indAsidea");
		} else if(top < targetOffset6) {
			$(".indexaside a").eq(5).addClass("indAsidea").siblings().removeClass("indAsidea");
		} else if(top < targetOffset7) {
			$(".indexaside a").eq(6).addClass("indAsidea").siblings().removeClass("indAsidea");
		} else if(top < targetOffset8) {
			$(".indexaside a").eq(7).addClass("indAsidea").siblings().removeClass("indAsidea");
		}
	});

	$(".indexaside a").click(function() {
		$(this).addClass("indAsidea").siblings().removeClass("indAsidea");
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
})