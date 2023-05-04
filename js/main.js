import { switchTheme } from './switch-theme.js';
import { startMain } from './main-menu.js';
import { generateCode } from './parse-data.js';
import { startGame } from './game-menu.js';
import { copyTextAndShowInfo } from './copy-text.js';

const themeButton = document.querySelector('.theme_button');
const textCodeCopyElemet = document.querySelector('.panel_seed');
const cardMenuCodeElement = document.querySelector('.room_id_game');

themeButton.addEventListener('click', switchTheme);
const code = generateCode();
textCodeCopyElemet.addEventListener('click', copyTextAndShowInfo(code));
cardMenuCodeElement.addEventListener('click', copyTextAndShowInfo(code));
startMain(code);
startGame(code);
