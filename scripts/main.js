(function($) {

  $(window).on('load', function() {
    $(window).trigger('resize');
});
let itemList = document.querySelector('.navigation__item');
let linksList = document.querySelectorAll('.navigation__link');
let linkList = document.querySelectorAll('.navigation__link');
let navigation = document.querySelector('.navigation');


for (let i = 0; i < linksList.length; i++) {
  linksList[i].onclick = function() {
    linksList[i].classList.toggle("navigation__link--active");
  };

}

})(jQuery);
