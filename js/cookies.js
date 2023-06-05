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

const cookieMessage = document.querySelector('.messages_cookies');
const closeCookieMessage = cookieMessage.querySelector('.messages_cookies-close');

const ttlCookie = {
  'info': 31536000, // 1 год
  'reconnect': 259200 // 3 дня
};

const getCookie = (key) => {
  const matches = document.cookie.match(new RegExp(`(^| )${  key  }=([^;]+)`));
  return matches ? decodeURIComponent(matches[2]) : undefined;
};

const setCookie = (key, param, ttl) => {
  document.cookie = `${key}=${param}; max-age=${ttl}`;
};

const startCookieInfo = () => {
  if (getCookie('messages_cookies')) {
    return;
  }
  cookieMessage.classList.remove('hidden');
  closeCookieMessage.addEventListener('click', (evt) => {
    evt.preventDefault();
    cookieMessage.classList.add('hidden');
    setCookie('messages_cookies', 'true', ttlCookie.info);
  });
};

const getThemeFromCookie = () => {
  const theme = getCookie('theme');
  return (!theme || theme === 'dark')? 'dark': 'light';
};

const setThemeToCookie = (theme) => {
  setCookie('theme', theme, ttlCookie.info);
};

const setInfoForReconnect = (code, role) => {
  setCookie('code', code.toString(), ttlCookie.reconnect);
  setCookie('time', (new Date()).getTime(), ttlCookie.reconnect);
  setCookie('role', role, ttlCookie.reconnect);
};

const getInfoForReconnect = () => {
  const code = getCookie('code');
  const time = getCookie('time');
  const role = getCookie('role');
  if (!code || !time || !role) {
    return null;
  }
  return {
    'code': code,
    'time': parseInt(time, 10),
    'role': role
  };
};

export { startCookieInfo, getThemeFromCookie, setThemeToCookie, setInfoForReconnect, getInfoForReconnect };
