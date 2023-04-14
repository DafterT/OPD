const newGameButton = document.querySelector('.new_game__button');
const connectButton = document.querySelector('.connect__button');
const mainMenuPanels = document.querySelectorAll('.main_menu__panel');
const mainMenuFlexBox = document.querySelector('.main_menu');
const panelButtons = document.querySelectorAll('.panel_button');
const gameScreen = document.querySelector('.game_screen');
const backButton = document.querySelector('.card_menu__button');

const toggleButton = (evt) => {
  panel = mainMenuPanels[Number(evt.target.dataset.id)];
  panel.style.maxHeight = panel.style.maxHeight ? null : `${panel.scrollHeight}px`;
}

newGameButton.addEventListener('click', toggleButton);
connectButton.addEventListener('click', toggleButton);

const handleResize = () => {
  const flexBoxHeight = mainMenuFlexBox.scrollHeight;
  const screenHeight = mainMenuFlexBox.clientHeight;
  mainMenuFlexBox.style.justifyContent = flexBoxHeight > screenHeight ? 'flex-start' : 'center';
};

new ResizeObserver(() => {
  handleResize();
}).observe(mainMenuFlexBox);

const switchScreenAnimation = (from, to) => {
  return () => {
    from.classList.add('hidden');
    to.classList.remove('hidden');
    from.classList.remove('hide_animation')
    to.classList.add('appear_animation');
  }
};

const switchScreen = (from, to) => {
  return () => {
    from.classList.remove('appear_animation')
    from.classList.add('hide_animation');
    from.addEventListener('animationend', switchScreenAnimation(from, to), {once : true});
  }
}

panelButtons.forEach((button) => {
  button.addEventListener('click', switchScreen(mainMenuFlexBox, gameScreen));
});

backButton.addEventListener('click', switchScreen(gameScreen, mainMenuFlexBox));