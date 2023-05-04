import { switchScreen } from './all-screens.js';

const mainMenuFlexBox = document.querySelector('.main_menu');
const gameScreen = document.querySelector('.game_screen');
const backButton = document.querySelector('.card_menu__button');
const codeElement = gameScreen.querySelector('.card_menu_code');

const addCodeToGameScreen = (code) => {
  codeElement.textContent = code;
};

const startGame = () => {
  backButton.addEventListener('click', switchScreen(gameScreen, mainMenuFlexBox));
};

export { startGame, addCodeToGameScreen };
