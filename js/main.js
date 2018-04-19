
	$(function(){
        var slide = $(".slideshow ul.slides>li");
        var pagBullets = $(".pagination ul>li");
        var active = "flex-active";
        $(slide).mySimpleSlider({
         	selectors:pagBullets,
         	selectorsActiveClass:active,
         	animationType:"slideTowards",
         	duration:1000
        });
	});

	