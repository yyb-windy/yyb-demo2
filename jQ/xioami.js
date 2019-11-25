var currentIndex = 0;
var timer = null;
$('.banner .btn-list li').click(function () {
	$(this).addClass('ac').siblings().removeClass('ac')
	$(".banner .img-item").eq($(this).index()).addClass('ac').siblings().removeClass('ac')
	currentIndex = $(this).index()
})
function autoPlay () {
	timer = setInterval(function () {
		currentIndex++;
		currentIndex %= 5;
		$('.banner .btn-list li').eq(currentIndex).addClass('ac').siblings().removeClass('ac')
		$(".banner .img-item").eq(currentIndex).addClass('ac').siblings().removeClass('ac')
	},3000)
}
autoPlay ();
$(".banner .img-item").hover(function () {
	clearInterval(timer);
},function () {
	autoPlay ();
})
$(".iphone").parent().nextAll().slice(0,8).mouseenter(function () {
	$(".iphone").parent().nextAll().slice(0,8).find('a').removeClass('ac')
	$(this).find('a').addClass('ac')
	$('.product-showcase').stop().fadeIn();
	$('.product-showcase .showcase').eq($(this).index()-1).stop().fadeIn().siblings().hide();
})
$(".iphone").parent().parent().mouseleave(function () {
	$('.product-showcase').stop().fadeOut();
})
$('.product-showcase').hover(function () {
	$(this).show();
	
},function () {
	$(this).hide();
})



$(".asideList li").click(function () {
	var t = $(".floor-wrap .floor").eq($(this).index()).offset().top;
	$("html,body").animate({'scrollTop' : t},500)
})
$(window).scroll(function () {
	var scrTop = $(window).scrollTop();
	if (scrTop > 1500) {
		$('.asideList').stop().slideDown(100)
	}
	else{
		$('.asideList').stop().slideUp(100)
	}
	$('.floor').each(function (index) {
		if ($(this).offset().top - $(window).scrollTop() < 100) {
			$('.asideList li').eq(index).addClass('ac').siblings().removeClass('ac')
		}
	})
})


var starttime = new Date("2019/10/7");
setInterval(function () {
var nowtime = new Date();
var time = starttime - nowtime;
var day = parseInt(time / 1000 / 60 / 60 / 24);
var hour = parseInt(time / 1000 / 60 / 60 % 24);
var minute = parseInt(time / 1000 / 60 % 60);
var seconds = parseInt(time / 1000 % 60);
$(".time ul li:nth-child(1)").html(hour-1)
$(".time ul li:nth-child(3)").html(minute)
$(".time ul li:nth-child(5)").html(seconds)
if(hour<=9){
	$(".time ul li:nth-child(1)").html('0'+(hour-1))
}
if(minute<=9){
	$(".time ul li:nth-child(3)").html('0'+minute)
}
if(seconds<=9){
	$(".time ul li:nth-child(5)").html('0'+seconds)
}
}, 1000);

$(".right ul li a").parent().slice(0,4).click(function () {
	$(".right ul li a").removeClass('ac');
	$(this).find('a').addClass('ac');
	$(".electric .cont").eq($(this).index()).show().siblings().hide()
})
$(".menu-list li").mouseenter(function () {
	$(".continerwrap .continer").eq($(this).index()).removeClass('hide').siblings().addClass('hide')
	
})
$(".menu-list li").mouseleave(function () {
	$(".continerwrap .continer").addClass('hide')
	
})
$(".continerwrap .continer").hover(function () {
	$(this).show()
},function () {
	$(this).hide()
})