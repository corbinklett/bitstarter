 $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        if(scrollTop != 0)
            $('.ah-nav').stop().animate({'opacity': '.95'},200);
      	else   
            $('.ah-nav').stop().animate({'opacity':'.4'},200); 
    });

function showMenu() {
	var ahnav = $('.ah-nav');
	if(ahnav.css('height') == '90px') {
		ahnav.stop().animate({'height': '200px'}, 300);
		$('.ah-nav-contents').stop().animate({'height': '200px'}, 300);
		$('.ah-nav').animate({'opacity': '.95'},200);
	}
	else {
		ahnav.stop().animate({'height': '90px'}, 300);
		$('.ah-nav-contents').stop().animate({'height': '90px'}, 300);		
	}

}
