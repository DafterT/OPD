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
