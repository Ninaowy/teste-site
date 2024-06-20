var swiper = new Swiper(".swiper", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  keyboard: true,
});



const sr = ScrollReveal({
  distance:'65px',
  duration: 2600,
  delay:450,
  reset: true

});


sr.reveal('tituloserv', {delay:200,origin:'top'});