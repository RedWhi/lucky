$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
        return this;
    }
});






function redDot() {
	let rows = $("#platform .items >.row"),
	redCont = $(".red-dot"),
	cont = $(redCont).find('.cont');

	let n = $("rows").length, maxPos = $(rows).eq(n-1).position().top;
	$(redCont).height(maxPos + 45);
	$(cont).eq(n-1).css({top : maxPos + 15});

	for (let i = 1; i < n; i++) {
		let pos = $(rows).eq(i).position().top;
		$(cont).eq(i).css({top: pos + 15});
	}
}

function myAnim(anim) {
	let els = $("[data-js-animation='" + anim + "']");

	$(els).each(function() {
		if(!$(this).hasClass("STOP-EFFECT") && $(this).is(":in-viewport"))
		{
			$(this).addClass("STOP-EFFECT");
			$(this).animateCss(anim);
		}
	});
}

redDot();
$(document).scroll(function() {
	myAnim('bounceInUp');
	myAnim('bounceInLeft');
	myAnim('bounceInRight');
})
