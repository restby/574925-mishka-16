var menu = document.querySelector('.navigation'),
    menuBtn = document.querySelector('.main-header__btn'),
    goodsLink = document.querySelector('.goods__link'),
    galeryBtn = document.querySelectorAll('.galery__btn'),
    modal = document.querySelector('.modal'),
    modalBtn = document.querySelector('.modal__btn'),
    modalOverlay = document.querySelector('.modal__overlay'),
    mapStatic = document.querySelector('.contacts__map'),
    mapInteractive = document.querySelector('.contacts__map-interactive');


menu.classList.remove('navigation--no-js');
menuBtn.classList.remove('main-header__btn--no-js');
menuBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  menu.classList.toggle('navigation--no-js');
  menuBtn.classList.toggle('main-header__btn--close');
});

if(mapStatic) {
  mapStatic.classList.remove('contacts__map--no-js');
  mapInteractive.classList.remove('contacts__map-interactive--nojs');
}

if(goodsLink) {
  goodsLink.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal.classList.toggle('modal--show');
  modalOverlay.classList.toggle('modal__overlay--show');
  });
}

if(galeryBtn) {
  galeryBtn.forEach(function(item, i, galeryBtn) {
    galeryBtn[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    modal.classList.toggle('modal--show');
    modalOverlay.classList.toggle('modal__overlay--show');
    });
  });
}

if(modal && modalOverlay) {
  window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains('modal--show')) {
    modal.classList.remove('modal--show');
    }
    if (modalOverlay.classList.contains('modal__overlay--show')) {
    modalOverlay.classList.remove('modal__overlay--show');
      }
    }
  });
}
