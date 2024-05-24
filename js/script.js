function cargarFragmento(idContenedor, rutaHTML){
    fetch(rutaHTML)
    .then(response => response.text())
    .then(html => {
        document.getElementById(idContenedor).innerHTML = html;
    });
}
//CARGAR HEADER
cargarFragmento('headerPlaceholder','/components/header.html');
//CARGAR FOOTER
cargarFragmento('footerPlaceholder','/components/footer.html');

/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}