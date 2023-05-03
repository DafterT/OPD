import { switchTheme } from "./switch-theme.js";
import { startMain } from "./main-menu.js";
import { switchScreen } from "./all-screens.js";

const mainMenuFlexBox = document.querySelector('.main_menu');
const gameScreen = document.querySelector('.game_screen');
const backButton = document.querySelector('.card_menu__button');
const themeButton = document.querySelector('.theme_button');

themeButton.addEventListener('click', switchTheme);
startMain();

backButton.addEventListener('click', switchScreen(gameScreen, mainMenuFlexBox));
