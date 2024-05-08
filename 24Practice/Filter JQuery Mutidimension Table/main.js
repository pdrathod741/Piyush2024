
// Show the first tab and hide the rest

$('section.mt-sec .mt-wrap .top-wrap .tab-flex ul.feme-tab li:first-child').addClass('active');
$(document).ready(function () {

  //Gender
  $('section.mt-sec .mt-wrap .top-wrap .tab-flex ul.feme-tab.gnr li').click(function () {
    $('section.mt-sec .mt-wrap .top-wrap .tab-flex ul.feme-tab.gnr li').removeClass('active');

    $(this).addClass('active');
    return false;
  });

  //Offers

  $('section.mt-sec .mt-wrap .top-wrap .tab-flex ul.feme-tab.ofr li').click(function () {
    $('section.mt-sec .mt-wrap .top-wrap .tab-flex ul.feme-tab.ofr li').removeClass('active');

    $(this).addClass('active');
    return false;
  });
});

$('.data-fliter li:first-child').addClass('active');
$('.data-content').hide();
$('.data-content:first').show();

// Click function
$('.data-fliter li').click(function () {
  $('.data-fliter li').removeClass('active');
  $(this).addClass('active');

  $('.data-content').hide();

  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});

// DOne Code

$(document).ready(function () { 

  var FemmeOffer1 = $('.femme.offer1');
  var FemmeOffer2 = $('.femme.offer2');
  var FemmeOffer3 = $('.femme.offer3');

  var HommeOffer1 = $('.homme.offer1');
  var HommeOffer2 = $('.homme.offer2');
  var HommeOffer3 = $('.homme.offer3');

  //   chnageActiveonoffer2AndHome

  function chnageActiveonoffer1AndHome() {
    $('.data-item').hide();
    $(HommeOffer1).show();
  }

  function chnageActiveonoffer2AndHome() {
    $('.data-item').hide();
    $(HommeOffer2).show();
  }

  function chnageActiveonoffer3AndHome() {
    $('.data-item').hide();
    $(HommeOffer3).show();
  }



  $('#homme').on('click', function (event) {
    var $section = $(this).closest('section.mt-sec');
    event.preventDefault();
    $(this).parent().toggleClass('active');

    var ishommeAndoffer1Active = $('#homme').parent().hasClass('active') && $('#offer1').parent().hasClass('active'); 
    var ishommeAndoffer2Active = $('#homme').parent().hasClass('active') && $('#offer2').parent().hasClass('active');
    var ishommeAndoffer3Active = $('#homme').parent().hasClass('active') && $('#offer3').parent().hasClass('active');

    if (ishommeAndoffer2Active) {
      chnageActiveonoffer2AndHome();
    } else if (ishommeAndoffer1Active) {
      chnageActiveonoffer1AndHome();
    } else if (ishommeAndoffer3Active) {
      chnageActiveonoffer3AndHome();
    } else {
      $('.data-item').hide();
      $('.data-item').show();
    }

  });


  //   chnageActiveonoffer2AndFeme

  function chnageActiveonoffer1AndFeme() {
    $('.data-item').hide();
    $(FemmeOffer1).show();
  }

  function chnageActiveonoffer2AndFeme() {
    $('.data-item').hide();
    $(FemmeOffer2).show();
  }

  function chnageActiveonoffer3AndFeme() {
    $('.data-item').hide();
    $(FemmeOffer3).show();
  }


  $('#femme').on('click', function (event) {
    var $section = $(this).closest('section.mt-sec');
    event.preventDefault();
    $(this).parent().toggleClass('active');

    var isfemmeAndoffer1Active = $('#homme').parent().hasClass('active') && $('#offer1').parent().hasClass('active'); 
    var isfemmeAndoffer2Active = $('#homme').parent().hasClass('active') && $('#offer2').parent().hasClass('active');
    var isfemmeAndoffer3Active = $('#homme').parent().hasClass('active') && $('#offer3').parent().hasClass('active');

    if (isfemmeAndoffer2Active) {
      chnageActiveonoffer2AndFeme();
    } else if (isfemmeAndoffer1Active) {
      chnageActiveonoffer1AndFeme();
    } else if (isfemmeAndoffer3Active) {
      chnageActiveonoffer3AndFeme();
    } else {
      $('.data-item').hide();
       $('.data-item').show();

    }

  });
  
  
//   Offers Homme Click

 
  function offer1AndHome() {
    $('.data-item').hide();
    $(HommeOffer1).show();
  }

  function offer2AndHome() {
    $('.data-item').hide();
    $(HommeOffer2).show();
  }

  function offer3AndHome() {
    $('.data-item').hide();
    $(HommeOffer3).show();
  } 
  
  function offer1AndFme() {
    $('.data-item').hide();
    $(FemmeOffer1).show();
  }

  function offer2AndFme() {
    $('.data-item').hide();
    $(FemmeOffer2).show();
  }

  function offer3AndFme() {
    $('.data-item').hide();
    $(FemmeOffer3).show();
  } 

  $('#offer1').on('click', function (event) {
    event.preventDefault();
    $(this).parent().toggleClass('active');

    var Homeoffer1Active = $('#offer1').parent().hasClass('active') && $('#homme').parent().hasClass('active'); 
    var Fmeoffer1Active = $('#offer1').parent().hasClass('active') && $('#femme').parent().hasClass('active'); 

    if (Homeoffer1Active) {
      offer1AndHome();
    } else if(Fmeoffer1Active) {
      offer1AndFme();
    } else {
      $('.data-item').hide();
      $('.data-item').show();
    }
  });

  $('#offer2').on('click', function (event) {
    event.preventDefault();
    $(this).parent().toggleClass('active');


    var Homeoffer2Active = $('#offer2').parent().hasClass('active') && $('#homme').parent().hasClass('active');
    var Fmeoffer2Active = $('#offer2').parent().hasClass('active') && $('#femme').parent().hasClass('active'); 

    if (Homeoffer2Active) {
      offer2AndHome();
    } else if(Fmeoffer2Active) {
      offer2AndFme();
    } else {
      $('.data-item').hide();
      $('.data-item').show();
    }
  });

  $('#offer3').on('click', function (event) {
    event.preventDefault();
    $(this).parent().toggleClass('active');


    var Homeoffer3Active = $('#offer3').parent().hasClass('active') && $('#homme').parent().hasClass('active');
     var Fmeoffer3Active = $('#offer3').parent().hasClass('active') && $('#femme').parent().hasClass('active'); 
  
   if (Homeoffer3Active) {
      offer3AndHome();
    } else if(Fmeoffer3Active) {
      offer3AndFme();
    } else {
      $('.data-item').hide();
      $('.data-item').show();
    }
  });
  
  
}); 





