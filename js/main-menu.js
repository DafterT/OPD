import { switchScreen } from "./all-screens.js";

const mainMenuFlexBox = document.querySelector('.main_menu');
const gameScreen = document.querySelector('.game_screen');
const mainMenuPanels = document.querySelectorAll('.main_menu__panel');
const panelButtons = mainMenuFlexBox.querySelectorAll('.panel_button');
const newGameButton = mainMenuFlexBox.querySelector('.new_game__button');
const connectButton = mainMenuFlexBox.querySelector('.connect__button');

const toggleMainButton = (evt) => {
    const panel = mainMenuPanels[Number(evt.target.dataset.id)];
    panel.style.maxHeight = panel.style.maxHeight ? null : `${panel.scrollHeight}px`;
}

const handleResize = () => {
    const flexBoxHeight = mainMenuFlexBox.scrollHeight;
    const screenHeight = mainMenuFlexBox.clientHeight;
    mainMenuFlexBox.style.justifyContent = flexBoxHeight > screenHeight ? 'flex-start' : 'center';
};

const startMain = () => {
    newGameButton.addEventListener('click', toggleMainButton);
    connectButton.addEventListener('click', toggleMainButton);
    new ResizeObserver(() => handleResize).observe(mainMenuFlexBox);

    panelButtons.forEach((button) => {
        button.addEventListener('click', switchScreen(mainMenuFlexBox, gameScreen));
    });
}

export { startMain };
