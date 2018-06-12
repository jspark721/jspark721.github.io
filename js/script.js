/*anime({
	targets: 'div.landing__background',
  translateX: [
    { value: '-93%', duration: 800, delay: 500, elasticity: 0 }
  ],
  translateY: [
    { value: 0, duration: 800, elasticity: 0 },
    { value: '-93%', duration: 1000, delay: 200, elasticity: 0 }
  ],
  easing: 'easeOutExpo',
});

anime({
	targets: 'div.landing__title, .landing__content',
  translateX: -150,
  delay: 550,
  duration: 300,
  opacity: 0,
  easing: 'easeOutExpo'
});
*/

//animation for clicking logo

function open() {
  anime({
    targets: 'div.landing__logo',
    translateY: [
      {value: '-400%', duration: 500,  delay: 500, easing: 'easeOutQuad'},
      {value: ['200%', '0%'], duration: 700, easing: 'easeOutExpo'}],
  		rotate: [{value: 0, duration: 300}, {value: [150,0], duration: 1300, easing: 'easeOutElastic'}
    ]
  });
  
  anime({
  	targets: 'div.landing__box',
  	scaleX: {value: 100, duration: 800, delay: 500, easing: 'easeOutQuad'},
  	scaleY: {value: 100, duration: 1200, delay: 200, easing: 'easeOutQuad'}
  });
};

function close() {
  anime({
    targets: 'div.landing__box',
    scaleX: {value: 1, duration: 800, delay: 500, easing: 'easeOutExpo'},
    scaleY: {value: 1, duration: 1000, delay: 200, easing: 'easeOutQuad'}
  });
};
