document.addEventListener('DOMContentLoaded', () => {

  const body = document.querySelector('body'),
    header = document.querySelector('.header'),
    headerLogo = document.querySelector('.header__logo'),
    location = document.querySelector('.top-header__location').cloneNode(true),
    number = document.querySelector('.top-header__tel').cloneNode(true),
    social = document.querySelector('.top-header__social'),
    bottomHeader = document.querySelector('.bottom-header'),
    catalogBtn = document.querySelector('.bottom-header__catalog'),
    menuList = document.querySelector('.bottom-header__menu-list'),
    uploadBtn = document.querySelector('.top-header__price');

  if (window.innerWidth <= 1200) {
    header.append(menuList);
    bottomHeader.append(uploadBtn);
  }

  if (window.innerWidth <= 767) {
    const newDiv = document.createElement('div'),
      closeMenu = document.createElement('button');
    newDiv.classList.add('mobile-menu');
    closeMenu.classList.add('close-menu', '_icon-close');

    location.classList.add('location-clone');
    number.classList.add('number-clone');

    header.append(newDiv);
    newDiv.append(closeMenu);
    newDiv.append(headerLogo);
    newDiv.append(menuList);
    newDiv.append(catalogBtn);
    newDiv.append(uploadBtn);
    newDiv.append(social);
    newDiv.append(location);
    newDiv.append(number);

    closeMenu.addEventListener('click', () => {
      mobileMenu.classList.remove('_show');
      body.classList.remove('_block');
    });
  }

  const mobileMenu = document.querySelector('.mobile-menu'),
    burger = document.querySelector('.menu-icon');

  clickOnBurger();

  function clickOnBurger() {
    burger.addEventListener('click', () => {
      mobileMenu.classList.add('_show');
      body.classList.add('_block');
    });
  }

  function headerBgColor() {
    if (window.scrollY >= 10) {
      header.classList.add('on-scroll');
    } else {
      header.classList.remove('on-scroll');
    }
  }

  function parallax(top) {
    const imgOne = document.querySelector('.intro__bg-1'),
      imgTwo = document.querySelector('.intro__bg-2'),
      imgThree = document.querySelector('.intro__bg-3'),
      imgFour = document.querySelector('.intro__bg-4'),
      imgFive = document.querySelector('.intro__bg-5'),
      catalogImgOne = document.querySelector('.catalog__item-1__img'),
      catalogImgTwo = document.querySelector('.catalog__item-9__img');

      if (window.innerWidth >= 767) {
        imgOne.style.transform = `translateY(${top / -2}px)`;
        imgTwo.style.transform = `translateY(${top / -10}px)`;
        imgThree.style.transform = `translateY(${top / -8}px)`;
        imgFour.style.transform = `translateY(${top / -3}px)`;
        imgFive.style.transform = `translateY(${top / -2}px)`;
        catalogImgOne.style.transform = `translateY(${top / -20}px)`;
        catalogImgTwo.style.transform = `translateY(${top / -24}px)`;
      }
  }

  window.addEventListener('scroll', () => {
    let top = window.scrollY;

    headerBgColor();

    parallax(top);
  });

});