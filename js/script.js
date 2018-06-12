let background = document.querySelector('.landing__box');
background.style.transform = "scaleX(100) scaleY(90)";

let enter = document.querySelector('.enter');
enter.onclick = close;

let logo = document.querySelector('.landing__logo');
logo.onclick = open;

//animation for clicking logo

function open() {
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
    duration: 2500,
    opacity: 1,
    delay: (el, i, l) => i * 300
  });

};

//animation for clicking enter

function close() {
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
    scaleX: {value: 1, duration: 800, delay: 500, easing: 'easeOutExpo'},
    scaleY: {value: 1, duration: 800, delay: 600, easing: 'easeOutQuad'},
    opacity: {value: 0.4, duration: 800, delay: 1000, easing: 'easeOutQuad'}
  });

  anime({
  	targets: 'div.landing__title, .landing__content',
    translateX: '-20%',
    opacity: 0,
    delay: 550,
    duration: 300,
    easing: 'easeOutExpo'
  });
  anime({
    targets: '.el',
    translateX: '-20%',
    easing: 'easeOutExpo',
    delay: 550,
    duration: 300,
    opacity: { value: 0, easing: 'linear', duration: 200, delay: 500 }
  });

};
