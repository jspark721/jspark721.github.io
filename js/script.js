let background = document.querySelector('.landing__box');
let enter = document.querySelector('.enter');
let logo = document.querySelector('.landing__logo');
let landing = document.querySelector('.landing');
let main = document.querySelector('#main');
let menu = document.getElementById('menu');
let nav = document.querySelector('nav');
let footer = document.querySelector('footer');

background.style.transform = "scaleX(100) scaleY(90)";
enter.onclick = close;
background.onclick = open;
logo.onclick = open;
main.style.transform = 'translateY(100%)';
main.style.opacity = '0';
menu.style.opacity = '0';
footer.style.opacity = '0';

//animation for clicking logo

function open() {
  anime({
    targets: '.landing__logo',
    translateY: [
      {value: '-400%', duration: 400,  delay: 200, easing: 'easeOutQuad'},
      {value: ['200%', '0%'], duration: 300, easing: 'easeOutExpo'}
    ]
  });

  anime({
  	targets: 'div.landing__box',
  	scaleX: {value: 100, duration: 800, delay: 500, easing: 'easeOutQuad'},
  	scaleY: {value: 100, duration: 1200, delay: 200, easing: 'easeOutQuad'},
    opacity: {value: 1, duration: 800, delay: 100, easing: 'easeOutQuad'}
  });

  anime({
  	targets: 'div.landing__title, .landing__content',
    translateX: 0,
    opacity: 1,
    delay: 550,
    duration: 300,
    easing: 'easeOutExpo'
  });
  anime({
    targets: '.el',
    translateX: 0,
    direction: 'normal',
    duration: 2000,
    opacity: 1,
    delay: (el, i, l) => i * 300
  });
  anime({
    targets: '#main',
    translateX: '110%',
    duration: 1500,
    delay: 400,
    opacity: {
      value: 0,
      easing: 'linear',
      duration: 800
    }
  });
  menu.style.opacity = '0';
  footer.style.opacity = '0';
};

//animation for clicking enter

function close() {
  window.scrollTo(0, 0);

  anime({
    targets: '.landing__logo',
    translateY: [
      {value: '-400%', duration: 500,  delay: 500, easing: 'easeOutQuad'},
      {value: ['200%', '0%'], duration: 700, easing: 'easeOutExpo'}],
      rotate: [{value: 0, duration: 300}, {value: [150,0], duration: 1300, easing: 'easeOutElastic'}
    ]
  });
  anime({
    targets: 'div.landing__box',
    // backgroundColor: '#fff',
    // delay: 1600,
    scaleX: {value: 1, duration: 800, delay: 500, easing: 'easeOutExpo'},
    scaleY: {value: 1, duration: 800, delay: 600, easing: 'easeOutQuad'},
    opacity: {value: 1, duration: 800, delay: 1000, easing: 'easeOutQuad'}
  });

  anime({
    targets: '.el',
    translateX: '-20%',
    easing: 'easeOutExpo',
    delay: 550,
    duration: 200,
    opacity: { value: 0, easing: 'linear', duration: 200, delay: 500 }
  });

  anime({
  	targets: 'div.landing__title, .landing__content',
    translateX: '-100%',
    opacity: 0,
    delay: 550,
    duration: 300,
    easing: 'easeOutExpo'
  });

  anime({
    targets: '#main',
    translateY: 0,
    duration: 2000,
    delay: 200,
    opacity: {
      value: 1,
      easing: 'linear',
      delay: 1200,
      duration: 800
    }
  });
  anime({
    targets: '#menu',
    opacity: {
      value: 1,
      easing: 'linear',
      delay: 200,
      duration: 800
    }
  });
  anime({
    targets: 'footer',
    opacity: {
      value: 1,
      easing: 'linear',
      delay: 1800,
      duration: 800
    }
  });
  landing.style.zIndex = '-1';
};

/*hamburger menu*/
function toggleMenu() {
  menu.classList.toggle('open');
  nav.classList.toggle('show');
}

menu.onclick = toggleMenu;
