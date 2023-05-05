const cookieMessage = document.querySelector('.messages_cookies');
const closeCookieMessage = cookieMessage.querySelector('.messages_cookies-close');

const getCookie = (key) => {
  const matches = document.cookie.match(new RegExp(`(^| )${  key  }=([^;^,]+)`));
  return matches ? decodeURIComponent(matches[2]) : undefined;
};

const setCookie = (key, param, ttl=31536000 /* 1 год */) => {
  document.cookie = `${key}=${param}, max-age=${ttl}`;
};

const startCookieInfo = () => {
  if (getCookie('messages_cookies')) {
    return;
  }
  cookieMessage.classList.remove('hidden');
  closeCookieMessage.addEventListener('click', (evt) => {
    evt.preventDefault();
    cookieMessage.classList.add('hidden');
    setCookie('messages_cookies', 'true');
  });
};

const getThemeFromCookie = () => {
  const theme = getCookie('theme');
  if (!theme || theme === 'dark') {
    return 'dark';
  }
  return 'light';
};

const setThemeToCookie = (theme) => {
  setCookie('theme', theme);
};

export { startCookieInfo, getThemeFromCookie, setThemeToCookie };
