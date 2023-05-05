const popupElement = document.querySelector('.popup');

const doAnimationPopup = () => {
  popupElement.classList.remove('enter_animation');
  popupElement.classList.add('slide_animation');
  popupElement.addEventListener('animationend', () => {
    setTimeout(() => {
      popupElement.classList.remove('slide_animation');
      popupElement.classList.add('enter_animation');
    }, 700);
  } , {once: true});
};

const copyTextAndShowInfo = (code) => () => {
  navigator.clipboard.writeText(code)
    .then(doAnimationPopup);
};

export { copyTextAndShowInfo };
