window.onload = function () {
  const typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 30,
    startDelay: 0,
    onComplete: function () {
      const mobileMedia = window.matchMedia('(max-width: 560px)')

      if (mobileMedia.matches) {
        document.styleSheets[0].insertRule('@media only screen and (max-width: 35em) { #typed .everest-engineering::after { width: 54% !important; }}', 0);
      } else {
        document.styleSheets[0].insertRule('#typed .everest-engineering::after { width: 37% !important; }', 0);
      }
    }
  })
}
