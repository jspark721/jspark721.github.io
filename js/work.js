const buttons = document.querySelectorAll('.project');
const overlay = document.getElementById('overlay');
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

  if(overlay.classList.contains('open')){
    document.body.classList.add("noscroll");
    document.querySelector('.about-nav').style.zIndex = "-1";
  }
}

function close() {
  overlay.classList.remove('open');
  document.body.classList.remove("noscroll");
}

buttons.forEach(button => button.addEventListener('click', open));
overlay.addEventListener('click', close);
