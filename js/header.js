//CARGAR HEADER
//cargarFragmento("headerPlaceholder", "/components/header.html");
document.addEventListener("DOMContentLoaded", function () {
  fetch("/components/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("headerPlaceholder").innerHTML = data;
      /*==================== SHOW MENU ====================*/
      const navMenu = document.getElementById("nav-menu"),
        navToggle = document.getElementById("nav-toggle"),
        navClose = document.getElementById("nav-close");

      /*===== MENU SHOW =====*/
      /* Validate if constant exists */
      if (navToggle) {
        navToggle.addEventListener("click", () => {
          navMenu.classList.add("show-menu");
        });
      }
      /*===== MENU HIDDEN =====*/
      /* Validate if constant exists */
      if (navClose) {
        navClose.addEventListener("click", () => {
          navMenu.classList.remove("show-menu");
        });
      }
      let items = document.querySelectorAll(".slider .list .item");
      let next = document.getElementById("next");
      let prev = document.getElementById("prev");
      let thumbnails = document.querySelectorAll(".thumbnail .item__thumbnail");

      let countItem = items.length;
      let itemActive = 0;
      //evento next click
      next.onclick = function () {
        itemActive = itemActive + 1;
        if (itemActive >= countItem) {
          itemActive = 0;
        }
        showSlider();
      };
      //evento prev click
      prev.onclick = function () {
        itemActive = itemActive - 1;
        if (itemActive < 0) {
          itemActive = countItem - 1;
        }
        showSlider();
      };
      //auto ruun slider
      let refreshInterval = setInterval(() => {
        next.click();
      }, 20000);
      function showSlider() {
        //remove item active old
        let itemActiveOld = document.querySelector(
          ".slider .list .item.active"
        );
        let thumbnailActiveOld = document.querySelector(
          ".thumbnail .item__thumbnail.active"
        );
        itemActiveOld.classList.remove("active");
        thumbnailActiveOld.classList.remove("active");

        //active new item
        items[itemActive].classList.add("active");
        thumbnails[itemActive].classList.add("active");

        //clear auto time run slider
        clearInterval(refreshInterval);
        refreshInterval = setInterval(() => {
          next.click();
        }, 25000);
      }
      //click thumbnail
      thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", () => {
          itemActive = index;
          showSlider();
        });
      });
    });
});
