import "./style.css";

const importAllImages = (function () {
  function importAll(r) {
    return r.keys().map(r);
  }

  const imgs = importAll(
    require.context("./imgs", false, /\.(png|jpe?g|svg)$/),
  );
})();

const openMenu = (function () {
  const closedMenu = document.querySelector("body > div");
  const nav = document.querySelector("nav");

  closedMenu.addEventListener("click", () => {
    closedMenu.style.display = "none";
    nav.style.display = "flex";
  });

  return { closedMenu, nav };
})();

const closedMenu = (function () {
  const openedMenu = document.querySelectorAll(
    "nav > section:first-child > div > *",
  );

  openedMenu.forEach((element) => {
    element.addEventListener("click", () => {
      openMenu.nav.style.display = "none";
      openMenu.closedMenu.style.display = "block";
    });
  });
})();

const styleMenu = (function () {
  const menuSpan = document.querySelector("nav > section:first-child span");
  const menuImg = document.querySelector("nav > section:first-child img");

  menuSpan.addEventListener("mouseover", () => {
    menuSpan.style.color = "rgb(226, 172, 36)";
    menuImg.style.backgroundColor = "rgba(226, 172, 36, 0.8)";
  });
  menuSpan.addEventListener("mouseout", () => {
    menuSpan.style.color = "black";
    menuImg.style.backgroundColor = "rgb(201, 150, 23)";
  });

  menuImg.addEventListener("mouseover", () => {
    menuSpan.style.color = "rgb(226, 172, 36)";
    menuImg.style.backgroundColor = "rgba(226, 172, 36, 0.8)";
  });
  menuImg.addEventListener("mouseout", () => {
    menuSpan.style.color = "black";
    menuImg.style.backgroundColor = "rgb(201, 150, 23)";
  });
})();

const hoveringEffectOnNavDivs = (function () {
  const navDivs = document.querySelectorAll(
    ".sec-section > div, .last-section > div",
  );

  navDivs.forEach((div, index) => {
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
