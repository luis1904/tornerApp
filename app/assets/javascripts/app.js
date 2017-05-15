$(function() {

var i=0, j=1, left=0;

    $(window).scroll(function(){
      var numeroTop = $("#numeros").offset().top;
      var wTop = $(window).scrollTop();
      var wHeigth = $(window).height();
      if((wTop + wHeigth) > (numeroTop + 350) && i==0){
        $(".count").addClass("show");
        $(".numero > i").addClass("show");
        $(".numero > p").addClass("show");
        Contador()
        i++
      }
    });

    if($(window).width() < 760) {
      $('.toggle').show();
    }


    showMenu();
    closeMenu();
    areaShow();
    eventoShow();
    aboutSlide();
    equipoShow();
    moveLeft();
    smoothScroll(600);
    modal();
    // parallax();

  setInterval(function()
  {
      if( j  < 4) {
        $('.about-wrap').removeClass('show').eq(j).addClass('show');
        $('.shape').removeClass('show').eq(j).addClass('show');
        $('.slide-button').removeClass('show').eq(j).addClass('show');
         j++;
      }else {
        $('.about-wrap').removeClass('show').first().addClass('show');
        $('.shape').removeClass('show').first().addClass('show');
        $('.slide-button').removeClass('show').first().addClass('show');

        j=1;
      }
  },6000,j);




  $('.move-left').click(function(){

    if($(window).width() > 975) {
      var numeroPub = $('.pub-content').length - 2
    }
    if($(window).width() < 975 && $(window).width() > 710 ) {
      var numeroPub = $('.pub-content').length - 1
    }
    if($(window).width() < 710) {
      var numeroPub = $('.pub-content').length
    }

    var longitudPub = numeroPub * -280;

    left=left-280;

    if(left > longitudPub ){
      moveLeft(left)
    }else{
      left=0;
      moveLeft(left)
    }



  });

  $('.move-right').click(function(){

    if($(window).width() > 975) {
      var numeroPub = $('.pub-content').length - 2
    }
    if($(window).width() < 975 && $(window).width() > 710 ) {
      var numeroPub = $('.pub-content').length - 1
    }
    if($(window).width() < 710) {
      var numeroPub = $('.pub-content').length
    }


    var longitudPub = numeroPub * 280;

    left=left+280;

    if(left < longitudPub && left < 0 ){
      moveLeft(left)
    }else{
      left=0;
      moveLeft(left)
    }
  });
});




function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}



function Contador()
{
  $('.count').each(function () {

    $(this).prop('Counter',0).animate({
      Counter: $(this).text()
    }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });
}

function areaShow()
{
  $(window).scroll(function(){
    var areaTop = $("#areas").offset().top;
    var wTop = $(window).scrollTop();
    var wHeigth = $(window).height();
    if((wTop + wHeigth) > (areaTop + 300)){

      $(".area >  i").addClass("show");
      $(".area >  p").addClass("show");
      $(".area >  span").addClass("show");

    }

  });

}


function eventoShow()
{

  $(window).scroll(function(){
    var eventoTop = $("#eventos").offset().top;
    var wTop = $(window).scrollTop();
    var wHeigth = $(window).height();

    if((wTop + wHeigth) > (eventoTop + 450)){

      $(".evento-content").each(function( index ) {
        setTimeout(function(){
          $(".evento-content").eq(index).addClass("show");
        }, index*200);

      });

    }

  });
}

function equipoShow()
{

  $(window).scroll(function(){
    var equipoTop = $("#equipo").offset().top;
    var wTop = $(window).scrollTop();
    var wHeigth = $(window).height();

    if((wTop + wHeigth) > (equipoTop + 500)){

      $(".miembro").each(function( index ) {
        setTimeout(function(){
          $(".miembro").eq(index).addClass("show");
        }, index*200);

      });

    }

  });
}

function showMenu()
{

  $('.toggle').click(function(){
      $('.toggle').hide();
      $('.close').show();

      $(".item").each(function( index ) {
        setTimeout(function(){
          $(".item").eq(index).removeClass('hide').addClass("show");
        }, index*50);

      });

  });
}

function closeMenu()
{

  $('.close').click(function(){
      $('.close').hide();
      $('.toggle').show();

      var sizeMenu = $(".item").length

      $(".item").each(function( index ) {
        setTimeout(function(){
          $(".item").eq(sizeMenu-1-index).removeClass('show').addClass("hide");
        }, index*50);

      });

  });
}




function aboutSlide()
{

  $('.msg-btn').click(function(){

  var $this = $(this),
   $siblings = $this.parent().children(),
   position = $siblings.index($this);
    $('.about-wrap').removeClass('show').eq(position).addClass('show');
    $('.shape').removeClass('show').eq(position).addClass('show');
    $('.slide-button').removeClass('show').eq(position).addClass('show');

	});


}


function moveLeft(left)
{
    $('.pub-move').css({
      "margin-left" : left
    });
}


function parallax(){
  $(window).scroll(function(){
    var wTop = $(window).scrollTop();
    var headerHeight = $(window).height();
    $('#about').css({
      "margin-top" : -wTop
    })
    console.log(wTop+"-"+headerHeight/4);
    if(wTop < headerHeight/4){
      $('nav').css({
        "transition" : "none",
        "margin-top" : (wTop/40)+wTop,
      });
    }else {
      $('nav').css({
        "transition" : "all ease-in-out .3s",
        "margin-top" : "0"
      });
    }

  });
}

function modal()
{
    $('.suscribete').click(function(){
      $('.modal').removeClass('hideModal')
      $('.modal').addClass('showModal')
    });

    $('.icon-cancel').click(function(){
      $('.modal').removeClass('showModal')
      $('.modal').addClass('hideModal')
    })
}


$(window).load(function(){
	$.stellar({
		horizontalScrolling:false
	});
});
