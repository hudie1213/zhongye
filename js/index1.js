$(document).ready(function () {
	$(".flexnoend a").eq(0).addClass("hover");
	$(".ban div").eq(0).css("opacity", "1");
	$(".ban div").eq(0).siblings().css("opacity", "0");
	$(".banList span").eq(0).addClass("spH");
	var winHei = $(window).height();
	var a = 1;
var top;
	








	function roll() {
		$(".ban .ban_con").eq(a).animate({
			"opacity": "1"
		}, 1000);
		$(".ban .ban_con").eq(a).siblings().css("opacity", "0");
		$(".banList span").eq(a).addClass("spH").siblings().removeClass("spH");
		if (a == 3) {
			a = -1;
		}
		a++;
	}
	var time1 = setInterval(roll, 4000)
	$(".indexaside a").eq(0).addClass("indAsidea");
	$(".userForm").css("transform", "translateX(-15vw)");
	$(".lx_md").css("transform", "translateX(15vw)");
	var jr = new Array();
	for (i = 0; i < $(".jrc").length; i++) {
		jr.push($(".jrc").eq(i).offset().top);
	}
	$(document).scroll(function () {
		top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
		if (top < 300) {
			$(".indexaside a").eq(0).addClass("indAsidea").siblings().removeClass("indAsidea");
		}
		for (q = 1; q < jr.length; q++) {
			if (top < jr[q] && top > jr[(q - 1)]) {
				$(".indexaside a").eq(q).addClass("indAsidea").siblings().removeClass("indAsidea");
			}
		}

		if ((top + (0.7 * winHei)) > jr[1] && (top + (0.7 * winHei)) < jr[2]) {
			$(".sy_bj").css({
				"transform": "translateY(0)",
				"opacity": "1"
			});
		} else if ((top + (0.7 * winHei)) > jr[2] && (top + (0.7 * winHei)) < jr[3]) {
			$(".sm_bj").css({
				"transform": "translateY(0)",
				"opacity": "1"
			});
		} else if ((top + (0.7 * winHei)) > jr[3] && (top + (0.7 * winHei)) < jr[4]) {
			$(".rc_bj").css({
				"transform": "translateY(0)",
				"opacity": "1"
			});
			$(".rc_one").css("transform", "translateX(0)");
		} else if ((top + (0.7 * winHei)) > jr[4] && (top + (0.7 * winHei)) < jr[5]) {
			$(".fa_bj").css({
				"transform": "translateY(0)",
				"opacity": "1"
			});
		} else if ((top + (0.7 * winHei)) > jr[5] && (top + (0.7 * winHei)) < jr[6]) {
			$(".hz_bj").css({
				"transform": "translateY(0)",
				"opacity": "1"
			});
		} else if ((top + (0.7 * winHei)) > jr[6] && (top + (0.7 * winHei)) < jr[7]) {
			$(".xw_bj").css({
				"transform": "translateY(0)",
				"opacity": "1"
			});
			$(".xw_con ul").css("transform", "translateX(0)");
		} else if ((top + (0.7 * winHei)) > jr[7]) {
			$(".lx_bj").css({
				"transform": "translateY(0)",
				"opacity": "1"
			});
			$(".userForm").css("transform", "translateX(0)");
			$(".lx_md").css("transform", "translateX(0)");
		}
	});

	$(".indexaside a").click(function () {
		$(this).addClass("indAsidea").siblings().removeClass("indAsidea");
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
			if ($target.length) {
				var targetOffset = $target.offset().top;
				$('html,body').animate({
					scrollTop: targetOffset
				}, 800);
				return false;
			}
		}
	});
	$(".sub").click(function () {
		function isPoneAvailable(str) {
			var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
			if (!myreg.test(str)) {
				return false;
			} else {
				return true;
			}
		}

		function isEmail(str) {
			var myemail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
			if (!myemail.test(str)) {
				return false;
			} else {
				return true;
			}
		}

		if ($("#name").val() == "" || ($("#name").val().length < 2 && $("#name").val().length > 5)) {
			alert("请正确填写您的姓名！");
			return false;
		} else if (isPoneAvailable($("#tel").val()) == false) {
			alert("请正确填写您的手机号码！");
			return false;
		} else if (isEmail($("#email").val()) == false) {
			alert("请正确填写您的邮箱！");
			return false;
		}

	})

})
