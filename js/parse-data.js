import { data } from '../data/cards.js';

const dataJson = JSON.parse(data);

const getCountBitsObj = (dataObj) => ({
  'seller_tactic': dataObj.seller.tactic.length,
  'buyer_tactic': dataObj.buyer.tactic.length,
  'national': dataObj.buyer.national_short.length,
  'situation': dataObj.seller.goal.length
});

const toBits = (num) => Math.ceil(Math.log2(num));

const generateSymbolCode = (len) => {
  const randomNum = Math.floor(Math.random() * len);
  const binaryNum = randomNum.toString(2).padStart(toBits(len), '0');
  return binaryNum;
};

const generateCode = (dataObj) => {
  const countBitsObj = getCountBitsObj(dataObj);
  const binaryCode = `${generateSymbolCode(countBitsObj['seller_tactic'])}${
    generateSymbolCode(countBitsObj['buyer_tactic'])}${
    generateSymbolCode(countBitsObj['national'])}${
    generateSymbolCode(countBitsObj['situation'])}`;
  return parseInt(binaryCode, 2).toString(8).padStart(4, '0');
};

export { dataJson, generateCode };
