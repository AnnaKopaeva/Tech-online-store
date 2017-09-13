const listElement = $('.tabs__item');

listElement.click(function () {
  const id = $(this).attr('data-id');

  listElement.removeClass('active');
  $(this).addClass('active');

  $('.tabs__content').hide();
  $(`#${id}`).show();
});

$(".line-wrapp").click(function() {
  $(this).toggleClass("active-menu");
  $('.header__nav').toggle();
});
