var link = document.querySelector('.navigation__button');
var nav = document.querySelector('.navigation__list');
var call = document.querySelector('.header__call');
var phone = document.querySelector('.header__number');
var reviewsList = document.querySelector('.reviews__list');
var reviewsItem = document.querySelectorAll('.reviews__body');
var reviewsButtonRight = document.querySelector('.reviews__slider--right');
var reviewsButtonLeft = document.querySelector('.reviews__slider--left');          

    link.addEventListener('click', function (evt) {
        evt.preventDefault();
        link.classList.toggle('navigation__button--open');
        nav.classList.toggle('navigation__list--open');
        call.classList.toggle('header__call--open');
        phone.classList.toggle('header__number--open');
    })
                       
    var showElement = reviewsItem[0];
    for (var i = 0; i < reviewsItem.length; i++) {
      if(reviewsItem[i] != showElement) {
        reviewsItem[i].style.display = 'none'
      }
    }
                              
    reviewsButtonRight.addEventListener('click', function() {
    var indexElement;
    for (var i = 0; i < reviewsItem.length; i++) {
      if(reviewsItem[i] === showElement) {
         indexElement = i
      }
    }
    if(indexElement + 1 < reviewsItem.length) {
    showElement.style.display = 'none';
    showElement = reviewsItem[(indexElement+1)];
    showElement.style.opacity = '0';
    showElement.style.display = 'block';
    showElement.classList.add('opacity'); 
    return showElement
    }});

    reviewsButtonLeft.addEventListener('click', function() {
    var indexElement;
    for (var i = 0; i < reviewsItem.length; i++) {
      if(reviewsItem[i] === showElement) {
        indexElement = i
      }
    }
    if(indexElement > 0) {
    showElement.style.display = 'none';
    showElement = reviewsItem[(indexElement-1)];
    showElement.style.opacity = '0';
    showElement.style.display = 'block';
    showElement.classList.add('opacity'); 
    return showElement
    }})
