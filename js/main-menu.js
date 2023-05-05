import { switchScreen } from './all-screens.js';
import { addCodeToGameScreen } from './game-menu.js';
import { getMaxCodeDec, getCodeLen, getObjByCode } from './parse-data.js';

const mainMenuFlexBox = document.querySelector('.main_menu');
const gameScreen = document.querySelector('.game_screen');
const mainMenuPanels = document.querySelectorAll('.main_menu__panel');
const panelButtons = mainMenuFlexBox.querySelectorAll('.panel_button');
const newGameButton = mainMenuFlexBox.querySelector('.new_game__button');
const connectButton = mainMenuFlexBox.querySelector('.connect__button');
const codeElement = mainMenuFlexBox.querySelector('.panel_seed');
const enteredCodeElement = mainMenuFlexBox.querySelector('.panel_input');

const handleResize = () => {
  const flexBoxHeight = mainMenuFlexBox.scrollHeight;
  const screenHeight = mainMenuFlexBox.clientHeight;
  mainMenuFlexBox.style.justifyContent = flexBoxHeight > screenHeight ? 'flex-start' : 'center';
};

const toggleMainButton = (evt) => {
  const panel = mainMenuPanels[Number(evt.target.dataset.id)];
  panel.style.maxHeight = panel.style.maxHeight ? null : `${panel.scrollHeight}px`;
  setTimeout(handleResize, 150);
};

const addCodeToMainScreen = (code) => {
  codeElement.textContent = code;
};

const onSwitchScreen = () => {
  mainMenuPanels.forEach((panel) => { panel.style.maxHeight = null; });
  enteredCodeElement.value = '';
};

const onConnectButtonClick = (evt) => {
  const enteredCode = enteredCodeElement.value;
  const enteredCodeDec = parseInt(enteredCode, 8);
  if (!enteredCodeDec ||
    enteredCode.length !== getCodeLen() ||
    enteredCodeDec > getMaxCodeDec()) {
    return;
  }
  const objByCode = getObjByCode(enteredCode);
  if (!objByCode) {
    return;
  }
  if (evt.target.dataset.id === 'buyer') {
    // TODO Заполнить ячейками покупателя
  } else {
    // TODO Заполнить ячейками продавца
  }
  addCodeToGameScreen(enteredCode);
  switchScreen(mainMenuFlexBox, gameScreen, onSwitchScreen)();
};

const resizeObserver = new ResizeObserver(handleResize);

const startMain = (code) => {
  addCodeToMainScreen(code);
  newGameButton.addEventListener('click', toggleMainButton);
  connectButton.addEventListener('click', toggleMainButton);

  resizeObserver.observe(mainMenuFlexBox);

  panelButtons[0].addEventListener('click', () => {
    addCodeToGameScreen(code);
    // TODO Заполнить ячейками наблюдателя (функция из game-menu)
    switchScreen(mainMenuFlexBox, gameScreen, onSwitchScreen)();
  });

  panelButtons[1].addEventListener('click', onConnectButtonClick);

  panelButtons[2].addEventListener('click', onConnectButtonClick);
};

export { startMain };
