import { switchScreen } from './all-screens.js';

const mainMenuFlexBox = document.querySelector('.main_menu');
const gameScreen = document.querySelector('.game_screen');
const backButton = document.querySelector('.card_menu__button');
const codeElement = gameScreen.querySelector('.card_menu_code');

const addCodeToGameScreen = (code) => {
  codeElement.textContent = code;
};

const startGame = () => {
  backButton.addEventListener('click', switchScreen(gameScreen, mainMenuFlexBox,
    () => gameScreen.querySelector('.player_cards').remove()
  ));
};

const addBuyerData = (buyerElement, dataObj) => {
  buyerElement.querySelector('.tactic_name').textContent = dataObj['buyer']['tactic']['title'];
  buyerElement.querySelector('.tactic').textContent = dataObj['buyer']['tactic']['text'];
  buyerElement.querySelector('.goal').textContent = dataObj['buyer']['goal'];
  buyerElement.querySelector('.national_short').textContent = dataObj['buyer']['national_short'];
};

const addSellerData = (sellerElement, dataObj) => {
  sellerElement.querySelector('.tactic').textContent = dataObj['seller']['tactic'];
  sellerElement.querySelector('.goal').textContent = dataObj['seller']['goal'];
  sellerElement.querySelector('.national_name').textContent = dataObj['seller']['national_all']['name'];
  sellerElement.querySelector('.national_all').textContent = dataObj['seller']['national_all']['text'];
};

const addWatcherData = (watcherElement, dataObj) => {
  watcherElement.querySelector('.start_situation').textContent = dataObj['both']['start_situation'];
};

const showBuyer = (dataObj) => {
  const buyerElement = document.querySelector('#buyer_template').content.querySelector('.card_container').cloneNode(true);
  addBuyerData(buyerElement, dataObj);
  gameScreen.prepend(buyerElement);
};

const showSeller = (dataObj) => {
  const sellerElement = document.querySelector('#seller_template').content.querySelector('.card_container').cloneNode(true);
  addSellerData(sellerElement, dataObj);
  gameScreen.prepend(sellerElement);
};

const showWatcher = (dataObj) => {
  const watcherElement = document.querySelector('#watcher_template').content.querySelector('.watcher').cloneNode(true);
  addBuyerData(watcherElement.querySelector('.buyer'), dataObj);
  addSellerData(watcherElement.querySelector('.seller'), dataObj);
  addWatcherData(watcherElement.querySelector('.watcher'), dataObj);
  gameScreen.prepend(watcherElement);
};

export { startGame, addCodeToGameScreen, showBuyer, showSeller, showWatcher };
