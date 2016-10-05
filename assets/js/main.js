(function($) {
  //header scrolling banner
  function scrollBanner() {
    var scrollPos;
    var headerText = document.querySelector('#banner');
    scrollPos = window.scrollY;

    if (scrollPos <= 750) {
      headerText.style.transform = "translateY(" + (-scrollPos / 3) + "px" + ")";
    }
  }
  if ($(window).width() > 750) {
    window.addEventListener('scroll', scrollBanner);
  }


  // http://codepen.io/Lewitje/pen/YybQEP original copy from Lewi Hussay updated to work with multiple divs
  // Equal height - by Burfield www.burfield.co.uk
  // Example usage use data-match-height="groupName"> on anything!!!

  var matchHeight = (function () {

    "use strict";

    function matchHeight(){
      //get all matched height attr
      var groupName = $('[data-match-height]');
      var groupHeights = [];

      // for each attr set the min height to auto this makes it responsive
      $(groupName).each(function(){

        var dataName = $(this);

        var key = dataName.data('match-height');

        //create an array of heights
        if(!(key in groupHeights)){
          groupHeights[key] = [];
        }

        dataName.css('min-height', 'auto');

        dataName.each(function() {

          groupHeights[key].push(dataName.outerHeight());

        });

        return groupHeights.key;

      });

      var obj = groupHeights;

      for (var index in obj) {
        if (!obj.hasOwnProperty(index)) {
          continue;
        }

        var minHeight = Math.max.apply(null, obj[index]);

        //if window is bigger then 600px set new height else set height to auto
        if ($(window).width() > 750) {
          $('[data-match-height="'+index+'"]').css('min-height', minHeight);
        } else {
          $('[data-match-height="'+index+'"]').css('min-height', 'auto');
        }

      }

    }


    function init() {
      matchHeight();
    }

    return {
      init: init
    };

  }());

  // Mobile menu button
  $('#mobile-menu-button').on('click', function(){
    event.stopPropagation();
    if(!$(this).hasClass('open')) {
      $('#mobile-menu-button, #menu').addClass('open');
    } else {
      $('#mobile-menu-button, #menu').removeClass('open').addClass('close');
      setTimeout(function(){
        $('#menu').removeClass('close');
      }, 400);
    }
  });


  $('.mobile-menu').on('click',  function(event){
    event.stopPropagation();
  });

  $('html').on('click', function() {
    if($('.mobile-menu').hasClass('open')) {
      $('#mobile-menu-button, #menu').removeClass('open');
    }
  });

  $(document).ready(function() {
    if ($(window).width() >= 750) {
      matchHeight.init();
    }
  });


  $( window ).resize(function() {
    if ($(window).width() >= 750) {
      matchHeight.init();
    } else {
      $('.title-side, .image-side').css('min-height', 'auto');
    }
  });

})(jQuery);
