const buttons = document.querySelectorAll('.project');
const overlay = document.querySelector('.overlay');
const overlayImage = document.querySelector('.overlay__inner img');
let overlayText = document.querySelector('.overlay__inner_title')
let overlayDesc = document.querySelector('.overlay__desc');

function open(e) {
  overlay.classList.add('open');
  const src= e.currentTarget.querySelector('img').src;
  overlayImage.src = src;

  const title = e.currentTarget.querySelector('a').name;
  overlayText.innerHTML = title;

  const txt = e.currentTarget.querySelector('.desc').name;
  overlayDesc.innerHTML = txt;
}

function close() {
  overlay.classList.remove('open');
}

buttons.forEach(button => button.addEventListener('click', open));
overlay.addEventListener('click', close);
