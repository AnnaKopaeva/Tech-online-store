const listElement = $('.characteristics__item');

listElement.click(function () {
  const id = $(this).attr('data-id');

  listElement.removeClass('active');
  $(this).addClass('active');

  $('.wrapper-description-product').hide();
  $(`#${id}`).show();
});

