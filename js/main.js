

/*********************** Pre-Loader ***********************/
$(window).on('load', function() {
    //force page scroll position to top at page refresh
    $('html, body').animate({ scrollTop: 0 }, 'normal');
    // Preloader
    $('.preloader').addClass('animated fadeOut prenone').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $('.preloader').hide();
    });
});



$(document).ready(function() {

    
    /*********************** Waypoints ***********************/
    $('.wp1').waypoint(function() {
		$('.wp1').addClass('animate__animated animate__fadeInLeft');
	}, {
		offset: '70%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animate__animated animate__fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animate__animated animate__zoomIn');
	}, {
		offset: '70%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animate__animated animate__fadeInRight');
	}, {
		offset: '70%'
	});
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animate__animated animate__fadeInLeft');
	}, {
		offset: '70%'
	});
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animate__animated animate__zoomIn');
	}, {
		offset: '70%'
	});



    /*********************** Hamburger Menu ***********************/
    
      //When user clicks the Hamburger Icon
      $('.hamburger').on('click', function(){
          $('.hamburger').toggleClass('toggled');
          $('.header-nav').toggleClass('active');
          $('.header-nav').toggleClass('open');
          $('#main-nav').toggleClass('open');
      });

      /* When user clicks a link */
	    $('.mob-menu li a').click(function() {
            $('.hamburger').toggleClass('toggled');
		    $('.header-nav').toggleClass('active');
		    $('.header-nav').toggleClass('open');          
            $('#main-nav').toggleClass('open');
        });



    /*********************** Window Scroll Down Tansitions ***********************/

    $(window).on('scroll', function(){
        let scroll = $(window).scrollTop();

        //Hero Text Fading On Scrolling Down
        $('.h-text').css({
            'opacity' : 1 - scroll / 500,
            'transform' : 'scale3d(1, 1, 1)'
        });

        //Header Navation BG
        if (scroll >=30) {
            $('#main-nav').removeClass('transparent-header');
            $('#main-nav').addClass('fixed-solid--nav');
            $('#main-nav a.btn').addClass('btn-red');
        } else {
            $('#main-nav').removeClass('fixed-solid--nav');
            $('#main-nav').addClass('transparent-header');
        }
    });


    /*********************** Hero Carousel ***********************/
    $('.hero__carousel').owlCarousel({
        loop: true,
        margin: 0,
        smartSpeed: 1200,
        items: 1,
        rtl: false,
        slideSpeed: 600,
        autoHeight: false,
        autoplay: true,
        animateOut: 'fadeOut',
    });


    /*********************** Smooth Scrolling Effect ***********************/
    
    $("a").on('click', function(event) {

      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        var targetIDName = this.hash;
  
        $('html, body').animate({
          scrollTop: $(targetIDName).offset().top
        }, 800); 
          // Prevent the browser from showing the attribute name of the clicked link in the address bar
          event.preventDefault();
        
      } 
    });

    //Back To Top button
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 800) { 
            $('.up-btn').css('display', 'block').fadeIn(700); 
        } else { 
            $('.up-btn').css('display', 'none').fadeOut(700); 
        } 
    }); 



    /*********************** Smooth Scrolling Effect ***********************/
    var t = "0"; //inital text value
    $(".counter_num").text(t);  //set this "t" as the element's text value
     $(".counter_num").waypoint({
         //what fn we want to run
       handler: function(direction) {
           //condition: if the scrolling is downward direction then run
           if (direction === "down") {
               //for each target elements with the same class run the fn
            $(".counter_num").each(function() {
                //set t = current text value
                var t = $(this);
                $({ Counter: 0 }).animate( { Counter: t.attr("data-stop") }, {
                    duration: 5e3,
                    easing: "swing",
                    step: function(a) {
                        t.text(Math.ceil(a));
                    }
                });
            }); 
           }
           //run only as the page loads
           this.destroy();
       }, 
       
        offset: "75%"
    });



    //Selecting the options
    var filter = $('#inputArticle-Sort');


    filter.change(function(){
        //storing selected option
        var optSelected = $(this).children("option:selected").val();

        if(optSelected == 'ux-design') {

            $('.blog .col-33').css('display', 'none');
            $('#ux-design').each(function() {
                $(this).css('display', 'block');
            });

        } else if(optSelected == 'visual-design') {

            $('.blog .col-33').css('display', 'none');
            $('#visual-design').each(function() {
                $(this).css('display', 'block');
            });

        }else if(optSelected == 'ui-patterns') {

            $('.blog .col-33').css('display', 'none');
            $('#ui-patterns').each(function() {
                $(this).css('display', 'block');
            });

        }else if(optSelected == 'teams') {

            $('.blog .col-33').css('display', 'none');
            $('#teams').each(function() {
                $(this).css('display', 'block');
            });

        }else if(optSelected == 'product') {

            $('.blog .col-33').css('display', 'none');
            $('.product').each(function() {
                $(this).css('display', 'block');
            });

        }else {

            $('.blog .col-33').css('display', 'block');

        }
    });


});