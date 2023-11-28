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
  const openedMenu = document.querySelectorAll("nav > section:first-child > *");

  openedMenu.forEach((element) => {
    element.addEventListener("click", () => {
      openMenu.nav.style.display = "none";
      openMenu.closedMenu.style.display = "block";
    });
  });
})();
