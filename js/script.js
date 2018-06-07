anime({
  targets: 'div.landing__logo',
  translateY: [
    {value: '-400%', duration: 200, easing: 'easeOutQuad'},
    {value: ['200%', '0%'], duration: 700, easing: 'easeOutExpo'}
  ],
});

anime({
  targets: 'div.landing__title h1',
  translateX: [
    { value: 100, duration: 1200, easing: 'easeInOutSine' },
    { value: -40, duration: 800, easing: 'easeInOutSine'}
  ],
  rotate: '1turn',
  duration: 3000,
  scale: 1.2
});
