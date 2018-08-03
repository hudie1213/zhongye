$(document).ready(function() {
	$(".flexnoend a").eq(0).addClass("hover");
	$(".ban div").eq(0).css("opacity", "1");
	$(".ban div").eq(0).siblings().css("opacity", "0");
	$(".banList span").eq(0).addClass("spH");
	var winHei = $(window).height();
	var a = 1;

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
	$(".userForm").css("transform", "translateX(-15vw)");
	$(".lx_md").css("transform", "translateX(15vw)");
	var jr = new Array();
	for(i = 0; i < $(".jrc").length; i++) {
		jr.push($(".jrc").eq(i).offset().top);
	}
//	for(i in jr) {
//		console.log(jr[i]);
//	}
	$(document).scroll(function() {
		var top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
		if(top < 300) {
			$(".indexaside a").eq(0).addClass("indAsidea").siblings().removeClass("indAsidea");
		}
		for(q = 1; q < jr.length; q++) {
			if(top < jr[q] && top > jr[(q - 1)]) {
				$(".indexaside a").eq(q).addClass("indAsidea").siblings().removeClass("indAsidea");
			}
		}

		if((top + (0.3 * winHei)) > jr[1] && (top + (0.5 * winHei)) < jr[2]) {
			$(".sy_bj").css({ "transform": "translateY(0)", "opacity": "1" });
		} else if((top + (0.3 * winHei)) > jr[2] && (top + (0.3 * winHei)) < jr[3]) {
			$(".sm_bj").css({ "transform": "translateY(0)", "opacity": "1" });
		} else if((top + (0.3 * winHei)) > jr[3] && (top + (0.3 * winHei)) < jr[4]) {
			$(".rc_bj").css({ "transform": "translateY(0)", "opacity": "1" });
			$(".rc_one").css("transform", "translateX(0)");
		} else if((top + (0.3 * winHei)) > jr[4] && (top + (0.3 * winHei)) < jr[5]) {
			$(".fa_bj").css({ "transform": "translateY(0)", "opacity": "1" });
		} else if((top + (0.3 * winHei)) > jr[5] && (top + (0.3 * winHei)) < jr[6]) {
			$(".hz_bj").css({ "transform": "translateY(0)", "opacity": "1" });
		} else if((top + (0.3 * winHei)) > jr[6] && (top + (0.3 * winHei)) < jr[7]) {
			$(".xw_bj").css({ "transform": "translateY(0)", "opacity": "1" });
			$(".xw_con ul").css("transform", "translateX(0)");
		} else if((top + (0.3 * winHei)) > jr[7]) {
			$(".lx_bj").css({ "transform": "translateY(0)", "opacity": "1" });
			$(".userForm").css("transform", "translateX(0)");
			$(".lx_md").css("transform", "translateX(0)");
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