const newGameButton = document.querySelector('.new_game__button');
const connectButton = document.querySelector('.connect__button');
const mainMenuPanels = document.querySelectorAll('.main_menu__panel');

const toggleButton = (evt) => {
  panel = mainMenuPanels[Number(evt.target.dataset.id)];
  panel.style.maxHeight = panel.style.maxHeight ? null : `${panel.scrollHeight}px`;
}

newGameButton.addEventListener('click', toggleButton);
connectButton.addEventListener('click', toggleButton);