import { switchScreen } from './all-screens.js';
import { addCodeToGameScreen } from './game-menu.js';

const mainMenuFlexBox = document.querySelector('.main_menu');
const gameScreen = document.querySelector('.game_screen');
const mainMenuPanels = document.querySelectorAll('.main_menu__panel');
const panelButtons = mainMenuFlexBox.querySelectorAll('.panel_button');
const newGameButton = mainMenuFlexBox.querySelector('.new_game__button');
const connectButton = mainMenuFlexBox.querySelector('.connect__button');
const codeElement = mainMenuFlexBox.querySelector('.panel_seed');
const enteredCodeElement = mainMenuFlexBox.querySelector('.panel_input');

const toggleMainButton = (evt) => {
  const panel = mainMenuPanels[Number(evt.target.dataset.id)];
  panel.style.maxHeight = panel.style.maxHeight ? null : `${panel.scrollHeight}px`;
};

const handleResize = () => {
  const flexBoxHeight = mainMenuFlexBox.scrollHeight;
  const screenHeight = mainMenuFlexBox.clientHeight;
  mainMenuFlexBox.style.justifyContent = flexBoxHeight > screenHeight ? 'flex-start' : 'center';
};

const addCodeToMainScreen = (code) => {
  codeElement.textContent = code;
};

const onSwitchScreen = () => {
  mainMenuPanels.forEach((panel) => { panel.style.maxHeight = null; });
  enteredCodeElement.value = '';
};

const startMain = (code) => {
  addCodeToMainScreen(code);

  newGameButton.addEventListener('click', toggleMainButton);
  connectButton.addEventListener('click', toggleMainButton);
  new ResizeObserver(() => handleResize).observe(mainMenuFlexBox);

  panelButtons[0].addEventListener('click', () => {
    switchScreen(mainMenuFlexBox, gameScreen, onSwitchScreen)();
    addCodeToGameScreen(code);
  });

  panelButtons[1].addEventListener('click', () => {
    const enteredCode = enteredCodeElement.value;
    switchScreen(mainMenuFlexBox, gameScreen, onSwitchScreen)();
    // TODO Валидация
    addCodeToGameScreen(enteredCode);
  });

  panelButtons[2].addEventListener('click', () => {
    const enteredCode = enteredCodeElement.value;
    switchScreen(mainMenuFlexBox, gameScreen, onSwitchScreen)();
    // TODO Валидация
    addCodeToGameScreen(enteredCode);
  });
};

export { startMain };
