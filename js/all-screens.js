const switchScreenAnimation = (from, to, cb) => () => {
  from.classList.add('hidden');
  to.classList.remove('hidden');
  from.classList.remove('hide_animation');
  to.classList.add('appear_animation');
  cb();
};

const switchScreen = (from, to, cb) => () => {
  from.classList.remove('appear_animation');
  from.classList.add('hide_animation');
  from.addEventListener('animationend', switchScreenAnimation(from, to, cb), {once : true});
};

export { switchScreen };
