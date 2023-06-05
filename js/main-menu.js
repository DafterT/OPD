/* 
Copyright 2023 Солодовник Игорь Николаевич, Симоновский Даниил Леонидович, Козырев Даниил Владимирович, Ануфриева Виктория Дмитриевна

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { switchScreen } from './all-screens.js';
import { addCodeToGameScreen, showBuyer, showSeller, showWatcher } from './game-menu.js';
import { getMaxCodeDec, getCodeLen, getObjByCode } from './parse-data.js';
import { getInfoForReconnect, setInfoForReconnect } from './cookies.js';

const mainMenuFlexBox = document.querySelector('.main_menu');
const gameScreen = document.querySelector('.game_screen');
const mainMenuPanels = document.querySelectorAll('.main_menu__panel');
const panelButtons = mainMenuFlexBox.querySelectorAll('.panel_button');
const newGameButton = mainMenuFlexBox.querySelector('.new_game__button');
const connectButton = mainMenuFlexBox.querySelector('.connect__button');
const codeElement = mainMenuFlexBox.querySelector('.panel_seed');
const enteredCodeElement = mainMenuFlexBox.querySelector('.panel_input');
const reconnectButtonElement = mainMenuFlexBox.querySelector('.reconnect__button');

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

const getValidObjByCode = (code) => {
  const enteredCodeDec = parseInt(code, 8);
  if (!enteredCodeDec ||
    code.length !== getCodeLen() ||
    enteredCodeDec > getMaxCodeDec()) {
    return;
  }
  const objByCode = getObjByCode(code);
  return objByCode ? objByCode : null;
};

const onConnectButtonClick = (evt) => {
  const enteredCode = enteredCodeElement.value;
  const objByCode = getValidObjByCode(enteredCode);
  if (!objByCode) {
    return;
  }
  if (evt.target.dataset.id === 'buyer') {
    showBuyer(objByCode);
    setInfoForReconnect(enteredCode, 'b');
  } else {
    showSeller(objByCode);
    setInfoForReconnect(enteredCode, 's');
  }
  addCodeToGameScreen(enteredCode);
  switchScreen(mainMenuFlexBox, gameScreen, onSwitchScreen)();
};

const connectByCookie = () => {
  const reconnectInfo = getInfoForReconnect();
  if (!reconnectInfo) {
    return;
  }
  const newTime = Math.floor(((new Date()).getTime() - reconnectInfo.time) / 1000);
  if (newTime < 0) {
    return;
  }
  const objByCode = getValidObjByCode(reconnectInfo.code);
  if (!objByCode) {
    return;
  }
  switch (reconnectInfo.role) {
    case 'b':
      showBuyer(objByCode);
      break;
    case 's':
      showSeller(objByCode);
      break;
    default:
      showWatcher(objByCode, newTime);
  }
  addCodeToGameScreen(reconnectInfo.code);
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
    showWatcher(getObjByCode(code));
    setInfoForReconnect(code, 'w');
    switchScreen(mainMenuFlexBox, gameScreen, onSwitchScreen)();
  });

  panelButtons[1].addEventListener('click', onConnectButtonClick);

  panelButtons[2].addEventListener('click', onConnectButtonClick);

  reconnectButtonElement.addEventListener('click', connectByCookie);
};

export { startMain };
