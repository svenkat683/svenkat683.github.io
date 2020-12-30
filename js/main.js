window.onload = function () {
  const typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 30,
    startDelay: 0,
    onComplete: function () {
      document.styleSheets[0].insertRule('#typed .everest-engineering::after { width: 26% !important; }', 0);
    }
  })
}
