
$( document ).ready(function() {


	// var rando = Math.floor(Math.random() * (13 - 7 + 1)) + 7;


// $("#head").css("background-image","url('img/image"+rando+".jpg'");

/* prepend menu icon */
$(' #mobileButton').prepend('<div id="menu-icon"><i class="icon-fixed-width icon-list-ul"></i>Menu</div>');

/* toggle nav */
$("#menu-icon").on("click", function(){
	$("#mobileNav").slideToggle();
	$(this).toggleClass("active");
});


if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	$('.bxslider').bxSlider();
	$('header').removeAttr( "data-stellar-background-ratio" );
} else {
	$.stellar();

	$('.bxslider').bxSlider({
	  minSlides: 1,
	  maxSlides: 5,
	  slideWidth: 320,
	  slideMargin: 10
	});
}
	


$(".bxslider li").hover(function(){
	$(this).find("span").addClass("hover");
},function(){
	$(this).find("span").removeClass("hover");
})


});



$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});