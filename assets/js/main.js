---
---

$(document).ready(function () {
  $('a.blog-button').click(function (event) {
    event.preventDefault();

    let browserLanguage = window.navigator.language.substr(0, 2);
    if (browserLanguage === 'fr') {
      window.location.replace('{{ site.baseurl }}/fr');
    } else {
      window.location.replace('{{ site.baseurl }}/en');
    }
  });

  if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  });

  $('.navigation-wrapper .blog-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  });
});
