const switchScreenAnimation = (from, to) => () => {
  from.classList.add('hidden');
  to.classList.remove('hidden');
  from.classList.remove('hide_animation');
  to.classList.add('appear_animation');
};

const switchScreen = (from, to) => () => {
  from.classList.remove('appear_animation');
  from.classList.add('hide_animation');
  from.addEventListener('animationend', switchScreenAnimation(from, to), {once : true});
};

export { switchScreen };
