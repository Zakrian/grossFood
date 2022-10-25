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
    uploadBtn = document.querySelector('.top-header__price'),
    partnersSection = document.querySelector('.partners'),
    topFooter = document.querySelector('.top-footer'),
    socialFooter = document.querySelector('.social-footer'),
    infoFooter = document.querySelector('.info-footer'),
    connectionFooter = document.querySelector('.connection-footer'),
    checkLabels = document.querySelectorAll('.form__label');

  if (window.innerWidth <= 1200) {
    header.append(menuList);
    bottomHeader.append(uploadBtn);
  }

  if (window.innerWidth <= 1000) {
    movingForm();
    moveFooterTablet();
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

  if (window.innerWidth <= 540) {
    moveFooterMobile();
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
      catalogImgTwo = document.querySelector('.catalog__item-9__img'),
      benefitsImg = document.querySelector('.benefits__img');

    if (window.innerWidth >= 767) {
      imgOne.style.transform = `translateY(${top / -2}px)`;
      imgTwo.style.transform = `translateY(${top / -10}px)`;
      imgThree.style.transform = `translateY(${top / -8}px)`;
      imgFour.style.transform = `translateY(${top / -3}px)`;
      imgFive.style.transform = `translateY(${top / -2}px)`;
      catalogImgOne.style.transform = `translateY(${top / -20}px)`;
      catalogImgTwo.style.transform = `translateY(${top / -24}px)`;
      benefitsImg.style.transform = `translateY(${top / -20}px)`;
    }
  }

  function movingForm() {
    const formSection = document.createElement('section');
    formSection.classList.add('section', 'form-section');

    formSection.innerHTML = `
      <div class="form-section__container">
        <div class="partners__form form">
          <form action="POST">
            <h3 class="form__title">Индивидуальное коммерческое предложение <span>для вашего бизнеса</span></h3>
            <div class="form__radios niches">
              <h6 class="form__radios_title">Ваша ниша</h6>
              <div class="niches__inner">
                <label for="niche1">Ресторан/кафе/бар/фастфуд/пиццерия</label>
                <input type="radio" name="niche-input" id="niche1">
                <label for="niche2">Мясное или пищевое производство</label>
                <input type="radio" name="niche-input" id="niche2">
                <label for="niche3">Кулинарный или кондитерский цех</label>
                <input type="radio" name="niche-input" id="niche3">
                <label for="niche4">Гостиница или отель</label>
                <input type="radio" name="niche-input" id="niche4">
                <label for="niche5">Комбинат питания</label>
                <input type="radio" name="niche-input" id="niche5">
                <label for="niche6">Кейтеринговая служба/столовая</label>
                <input type="radio" name="niche-input" id="niche6">
              </div>
            </div>
            <div class="form__radios way-to-get">
              <h6 class="form__radios_title">Способ получения </h6>
              <div class="way-to-get__inner">
                <label for="wayToGet1" class="checked">Доставка по МСК или МО</label>
                <input type="radio" name="way-to-get-input" id="wayToGet1">
                <label for="wayToGet2">Самовывоз</label>
                <input type="radio" name="way-to-get-input" id="wayToGet2">
                <label for="wayToGet3">Доставка в регионы</label>
                <input type="radio" name="way-to-get-input" id="wayToGet3">
              </div>
            </div>
            <div class="form__radios purchase">
              <h6 class="form__radios_title">Ваши объемы закупки </h6>
              <div class="purchase__inner">
                <label for="purchase1">200 000 руб.</label>
                <input type="radio" name="purchase-input" id="purchase1">
                <label for="purchase2">200 000 - 500 000 руб.</label>
                <input type="radio" name="purchase-input" id="purchase2">
                <label for="purchase3">более 500 000 руб.</label>
                <input type="radio" name="purchase-input" id="purchase3">
              </div>
            </div>
            <div class="form__data">
              <input type="tel" name="user-tel" placeholder="Телефон*" class="form__data_tel" id="userTel">
              <input type="email" name="user-email" placeholder="Почта*" class="form__data_email" id="userEmail">
              <button class="btn form__btn">Получить</button>
            </div>
          </form>
        </div>
      </div>
    `;

    partnersSection.insertAdjacentElement('afterend', formSection);
  }

  function moveFooterTablet() {
    const newLeft = document.createElement('div'),
      newRight = document.createElement('div');

    newLeft.classList.add('top-footer__left');
    newRight.classList.add('top-footer__right');

    newLeft.append(socialFooter);
    newLeft.append(connectionFooter);
    newRight.append(infoFooter);

    topFooter.append(newLeft);
    topFooter.append(newRight);
  }

  function moveFooterMobile() {
    const footerLeft = document.querySelector('.top-footer__left'),
      footerRight = document.querySelector('.top-footer__right');

    footerLeft.insertBefore(footerRight, connectionFooter);
  }

  function removeShowClass(element, selector) {
    element.classList.remove(selector);
  }

  window.addEventListener('scroll', () => {
    let top = window.scrollY;

    headerBgColor();

    parallax(top);
  });

  document.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target,
      searchIcon = document.querySelector('.bottom-header__search'),
      userIcon = document.querySelector('.bottom-header__user'),
      favoriteIcon = document.querySelector('.bottom-header__favorite'),
      cartIcon = document.querySelector('.bottom-header__cart'),
      search = document.querySelector('.search-input'),
      user = document.querySelector('.user__modal'),
      favorite = document.querySelector('.favorite__modal'),
      cart = document.querySelector('.cart__modal');

    if (target && target == searchIcon) {
      target.classList.toggle('_active');
      search.classList.toggle('_show-search');
      removeShowClass(user, '_show-modal');
      removeShowClass(favorite, '_show-modal');
      removeShowClass(cart, '_show-modal');
      removeShowClass(userIcon, '_active');
      removeShowClass(favoriteIcon, '_active');
      removeShowClass(cartIcon, '_active');
    }
    if (target && target == userIcon) {
      target.classList.toggle('_active');
      user.classList.toggle('_show-modal');
      removeShowClass(search, '_show-search');
      removeShowClass(favorite, '_show-modal');
      removeShowClass(cart, '_show-modal');
      removeShowClass(searchIcon, '_active');
      removeShowClass(favoriteIcon, '_active');
      removeShowClass(cartIcon, '_active');
    }
    if (target && target == favoriteIcon) {
      target.classList.toggle('_active');
      favorite.classList.toggle('_show-modal');
      removeShowClass(search, '_show-search');
      removeShowClass(user, '_show-modal');
      removeShowClass(cart, '_show-modal');
      removeShowClass(searchIcon, '_active');
      removeShowClass(userIcon, '_active');
      removeShowClass(cartIcon, '_active');
    }
    if (target && target == cartIcon) {
      target.classList.toggle('_active');
      cart.classList.toggle('_show-modal');
      removeShowClass(search, '_show-search');
      removeShowClass(user, '_show-modal');
      removeShowClass(favorite, '_show-modal');
      removeShowClass(searchIcon, '_active');
      removeShowClass(userIcon, '_active');
      removeShowClass(favoriteIcon, '_active');
    }

    if (target && target == catalogBtn) {
      console.log(header.scrollHeight);

      // window.scrollTo(120)
    }

  });

});