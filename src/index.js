import "./style.css";

const importAllImages = (function () {
  function importAll(r) {
    return r.keys().map(r);
  }

  const imgs = importAll(
    require.context("./imgs", false, /\.(png|jpe?g|svg)$/),
  );
})();

const selectNavElements = (function () {
  // openMenu fxn
  const closedMenu = document.querySelector("body > div");
  const nav = document.querySelector("nav");
  // closeMenu fxn
  const openedMenu = document.querySelectorAll(
    "nav > section:first-child > div > *",
  );
  // styleMenu fxn
  const menuSpan = document.querySelector("nav > section:first-child span");
  const menuImg = document.querySelector("nav > section:first-child img");
  // hoveringEffectOnNavDivs fxn
  const navDivs = document.querySelectorAll(
    ".sec-section > div, .last-section > div",
  );

  return { closedMenu, nav, openedMenu, menuSpan, menuImg, navDivs };
})();

const openMenu = (function () {
  selectNavElements.closedMenu.addEventListener("click", () => {
    selectNavElements.closedMenu.style.display = "none";
    selectNavElements.nav.style.display = "flex";
  });
})();

const closeMenu = (function () {
  selectNavElements.openedMenu.forEach((element) => {
    element.addEventListener("click", () => {
      selectNavElements.closedMenu.style.display = "none";
      selectNavElements.nav.style.display = "block";
    });
  });
})();

const styleMenu = (function () {
  selectNavElements.menuSpan.addEventListener("mouseover", () => {
    selectNavElements.menuSpan.style.color = "rgb(226, 172, 36)";
    selectNavElements.menuImg.style.backgroundColor = "rgba(226, 172, 36, 0.8)";
  });
  selectNavElements.menuSpan.addEventListener("mouseout", () => {
    selectNavElements.menuSpan.style.color = "black";
    selectNavElements.menuImg.style.backgroundColor = "rgb(201, 150, 23)";
  });

  selectNavElements.menuImg.addEventListener("mouseover", () => {
    selectNavElements.menuSpan.style.color = "rgb(226, 172, 36)";
    selectNavElements.menuImg.style.backgroundColor = "rgba(226, 172, 36, 0.8)";
  });
  selectNavElements.menuImg.addEventListener("mouseout", () => {
    selectNavElements.menuSpan.style.color = "black";
    selectNavElements.menuImg.style.backgroundColor = "rgb(201, 150, 23)";
  });
})();

const hoveringEffectOnNavDivs = (function () {
  selectNavElements.navDivs.forEach((div, index) => {
    div.classList.add(`div${index}`);
    const divSpan = document.querySelector(`.div${index} span`);
    const divImg = document.querySelector(`.div${index} img`);

    divSpan.addEventListener("mouseover", () => {
      divImg.style.background = "rgb(226, 172, 36)";
      divSpan.style.color = "rgb(226, 172, 36)";
    });
    divSpan.addEventListener("mouseout", () => {
      divImg.style.background = "none";
      divSpan.style.color = "black";
    });

    divImg.addEventListener("mouseover", () => {
      divImg.style.background = "rgb(226, 172, 36)";
      divSpan.style.color = "rgb(226, 172, 36)";
    });
    divImg.addEventListener("mouseout", () => {
      divImg.style.background = "none";
      divSpan.style.color = "black";
    });
  });
})();
