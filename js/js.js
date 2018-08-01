$(document).ready(function() {
	var winWid = $(window).width();
	var winHei = $(window).height();
	$(".zinav a").eq(n).addClass("zihover");

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
	

})