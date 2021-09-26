var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 35,
    showCursor : false ,
  });
  
  const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    reset: true
  });
  
  ScrollReveal().reveal('.card-product', {
    delay: 150
  });
  