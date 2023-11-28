import './style.css';

const importAllImages = (function () {
  function importAll(r) {
    return r.keys().map(r);
  }

  const imgs = importAll(require.context('./imgs', false, /\.(png|jpe?g|svg)$/));
})();

const selectNavElements = (function () {
  // For openMenu fxn
  const closedMenu = document.querySelector('body > div');
  const nav = document.querySelector('nav');
  // For closeMenu fxn
  const openedMenu = document.querySelectorAll('nav > section:first-child > div > *');
  // For styleMenu fxn
  const menuSpan = document.querySelector('nav > section:first-child span');
  const menuImg = document.querySelector('nav > section:first-child img');
  // For hoveringEffectOnNavDivs fxn
  const navDivs = document.querySelectorAll('.sec-section > div, .last-section > div');

  return { closedMenu, nav, openedMenu, menuSpan, menuImg, navDivs };
})();

const openMenu = (function () {
  selectNavElements.closedMenu.addEventListener('click', () => {
    selectNavElements.nav.classList.remove('animateOut');
    setTimeout(() => {
      selectNavElements.closedMenu.style.display = 'none';
    }, 200);
    selectNavElements.nav.style.display = 'flex';
  });
})();

const closeMenu = (function () {
  selectNavElements.openedMenu.forEach((element) => {
    element.addEventListener('click', () => {
      selectNavElements.nav.classList.add('animateOut');
      setTimeout(() => {
        selectNavElements.nav.style.display = 'none';
        selectNavElements.closedMenu.style.display = 'block';
      }, 200);
    });
  });
})();

const styleMenuLauncher = function (spanColor, imgColor, spanDefault, imgDefault) {
  selectNavElements.menuSpan.addEventListener('mouseover', () => {
    selectNavElements.menuSpan.style.color = spanColor;
    selectNavElements.menuImg.style.backgroundColor = imgColor;
  });
  selectNavElements.menuSpan.addEventListener('mouseout', () => {
    selectNavElements.menuSpan.style.color = spanDefault;
    selectNavElements.menuImg.style.backgroundColor = imgDefault;
  });

  selectNavElements.menuImg.addEventListener('mouseover', () => {
    selectNavElements.menuSpan.style.color = spanColor;
    selectNavElements.menuImg.style.backgroundColor = imgColor;
  });
  selectNavElements.menuImg.addEventListener('mouseout', () => {
    selectNavElements.menuSpan.style.color = spanDefault;
    selectNavElements.menuImg.style.backgroundColor = imgDefault;
  });
};

const hoveringEffectOnNavDivs = function (color, imgDefault, spanDefault) {
  selectNavElements.navDivs.forEach((div, index) => {
    div.classList.add(`div${index}`);
    const divSpan = document.querySelector(`.div${index} span`);
    const divImg = document.querySelector(`.div${index} img`);

    divSpan.addEventListener('mouseover', () => {
      divImg.style.background = color;
      divSpan.style.color = color;
    });
    divSpan.addEventListener('mouseout', () => {
      divImg.style.background = imgDefault;
      divSpan.style.color = spanDefault;
    });

    divImg.addEventListener('mouseover', () => {
      divImg.style.background = color;
      divSpan.style.color = color;
    });
    divImg.addEventListener('mouseout', () => {
      divImg.style.background = imgDefault;
      divSpan.style.color = spanDefault;
    });
  });
};

styleMenuLauncher(
  'rgb(226, 172, 36)',
  'rgba(226, 172, 36, 0.8)',
  'black',
  'rgb(201, 150, 23)',
);
hoveringEffectOnNavDivs('rgb(226, 172, 36)', 'none', 'black');
