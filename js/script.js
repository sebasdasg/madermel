function cargarFragmento(idContenedor, rutaHTML) {
  fetch(rutaHTML)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById(idContenedor).innerHTML = html;
    });
}
//CARGAR FOOTER
cargarFragmento("footerPlaceholder", "/components/footer.html");

//CARGAR SLIDER
cargarFragmento("sliderPlaceholder", "/components/slider.html");
