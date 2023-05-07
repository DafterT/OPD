import { switchTheme, setThemeFromCookie } from './switch-theme.js';
import { startMain } from './main-menu.js';
import { generateCode, getData } from './parse-data.js';
import { startGame } from './game-menu.js';
import { copyTextAndShowInfo } from './copy-text.js';
import { startCookieInfo } from './cookies.js';

const themeButton = document.querySelector('.theme_button');
const textCodeCopyElement = document.querySelector('.panel_seed');
const cardMenuCodeElement = document.querySelector('.room_id_game');
const errorMessage = document.querySelector('.error_connect ');

getData(() => {
  const code = generateCode();
  textCodeCopyElement.addEventListener('click', copyTextAndShowInfo(code));
  cardMenuCodeElement.addEventListener('click', copyTextAndShowInfo(code));
  startMain(code);
  startGame(code);
  themeButton.addEventListener('click', switchTheme);
  startCookieInfo();
  setTimeout(setThemeFromCookie, 100);
}, () => {
  errorMessage.classList.remove('hidden');
});
