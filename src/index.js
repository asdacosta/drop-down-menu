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
    menuSpan.style.color = "rgb(97, 73, 8)";
    menuImg.style.backgroundColor = "rgba(201, 150, 23, 0.8)";
  });
  menuSpan.addEventListener("mouseout", () => {
    menuSpan.style.color = "black";
    menuImg.style.backgroundColor = "rgb(201, 150, 23)";
  });

  menuImg.addEventListener("mouseover", () => {
    menuSpan.style.color = "rgb(97, 73, 8)";
    menuImg.style.backgroundColor = "rgba(201, 150, 23, 0.8)";
  });
  menuImg.addEventListener("mouseout", () => {
    menuSpan.style.color = "black";
    menuImg.style.backgroundColor = "rgb(201, 150, 23)";
  });
})();
