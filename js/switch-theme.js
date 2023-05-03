const poliImageElement = document.querySelector('.title__img');

const switchTheme = () => {
    if (document.body.attributes.theme) {
        document.body.removeAttribute('theme');
        poliImageElement.src = '/img/light_logo.svg';
    } else {
        document.body.setAttribute('theme', 'dark');
        poliImageElement.src = '/img/dark_logo.svg'
    }
}

export { switchTheme };
