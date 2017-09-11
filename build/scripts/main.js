'use strict';

$('.pgwSlider').pgwSlider({
  autoSlide: false,
  displayControls: true
});

var listElement = $('.characteristics__item');

listElement.click(function () {
  var id = $(this).attr('data-id');

  listElement.removeClass('active');
  $(this).addClass('active');

  $('.wrapper-description-product').hide();
  $('#' + id).show();
});