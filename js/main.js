window.onload = function () {
  const placeholder = document.querySelector('.placeholder'),
    small = placeholder.querySelector('.img-small')

  // 1: load small image and show it
  const img = new Image();
  img.src = small.src;
  img.onload = function () {
    small.classList.add('loaded');
  };

  // 2: load large image
  const imgLarge = new Image();
  imgLarge.src = placeholder.dataset.large;
  imgLarge.onload = function () {
    imgLarge.classList.add('loaded');
  };

  placeholder.appendChild(imgLarge);
  const typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 30,
    startDelay: 0,
    onComplete: function () {
      const mobileMedia = window.matchMedia('(max-width: 560px)')
      if (mobileMedia.matches) {
        document.styleSheets[0].insertRule('@media only screen and (max-width: 35em) { #typed .everest-engineering::after { width: 54% !important; }}', 0);
      } else {
        document.styleSheets[0].insertRule('#typed .everest-engineering::after { width: 35% !important; }', 0);
      }
      document.styleSheets[0].insertRule('.social-media-container, .reach-out { opacity: 1 !important; transition: 1s ease-in; }', 0);
    }
  })
}
