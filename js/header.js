//CARGAR HEADER
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
          document.body.classList.add("no-scroll");
        });
      }
      /*===== MENU HIDDEN =====*/
      /* Validate if constant exists */
      if (navClose) {
        navClose.addEventListener("click", () => {
          navMenu.classList.remove("show-menu");
          document.body.classList.remove("no-scroll");
        });
      }
      /*==========DHOW MENU INFO============*/
      const navInfo = document.getElementById('nav-info'),
        infoIcon = document.getElementById('nav-info-icon'),
        infoClose = document.getElementById('nav-close-info');
        /*===MENU INFO===*/
        if(infoIcon) {
          infoIcon.addEventListener("click", () => {
            navInfo.classList.add("show-menu-info");
            document.body.classList.add("no-scroll");
          });
        }
        /*===MENU INFO - CLOSE===*/
        if(infoClose){
          infoClose.addEventListener("click", () => {
            navInfo.classList.remove("show-menu-info");
            document.body.classList.remove("no-scroll");
          });
        }
        //aqui iba slider
        
    });
});