import { switchTheme } from './switch-theme.js';
import { startMain, addCodeToMainScreen } from './main-menu.js';
import { generateCode, dataJson } from './parse-data.js';
import { startGame, addCodeToGameScreen } from './game-menu.js';

const themeButton = document.querySelector('.theme_button');
themeButton.addEventListener('click', switchTheme);

startMain();
startGame();

const code = generateCode(dataJson);
addCodeToMainScreen(code);
addCodeToGameScreen(code);
