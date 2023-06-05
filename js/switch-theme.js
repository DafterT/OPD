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

import { setThemeToCookie, getThemeFromCookie } from './cookies.js';

const poliImageElement = document.querySelector('.title__img');

const setLightTheme = () => {
  document.body.removeAttribute('theme');
  poliImageElement.src = '/img/light_logo.svg';
  setThemeToCookie('light');
};

const setDarkTheme = () => {
  document.body.setAttribute('theme', 'dark');
  poliImageElement.src = '/img/dark_logo.svg';
  setThemeToCookie('dark');
};

const switchTheme = () => {
  if (document.body.attributes.theme) {
    setLightTheme();
  } else {
    setDarkTheme();
  }
};

const setThemeFromCookie = () => {
  if (getThemeFromCookie() === 'dark') {
    setDarkTheme();
  } else {
    setLightTheme();
  }
};

export { switchTheme, setThemeFromCookie };
