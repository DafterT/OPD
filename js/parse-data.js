import { data } from '../data/cards.js';

const dataJson = JSON.parse(data);

const getCountObj = () => ({
  'seller_tactic': dataJson.seller.tactic.length,
  'buyer_tactic': dataJson.buyer.tactic.length,
  'national': dataJson.buyer.national_short.length,
  'situation': dataJson.seller.goal.length
});

const toBits = (num) => Math.ceil(Math.log2(num));

const getCodeLen = () => {
  let length = 0;
  Object.entries(getCountObj()).forEach(([, value]) => {
    length += toBits(value);
  });
  return Math.ceil(length / 3);
};

const generateSymbolCode = (len) => {
  const randomNum = Math.floor(Math.random() * len);
  const binaryNum = randomNum.toString(2).padStart(toBits(len), '0');
  return binaryNum;
};

const generateCode = () => {
  const countObj = getCountObj(dataJson);
  const binaryCode = `${generateSymbolCode(countObj['seller_tactic'])}${
    generateSymbolCode(countObj['buyer_tactic'])}${
    generateSymbolCode(countObj['national'])}${
    generateSymbolCode(countObj['situation'])}`;
  return parseInt(binaryCode, 2).toString(8).padStart(getCodeLen(), '0');
};

const getMaxCodeDec = () => {
  const countObj = getCountObj(dataJson);
  const binaryCode = `${(countObj['seller_tactic'] - 1).toString(2)}${
    (countObj['buyer_tactic'] - 1).toString(2)}${
    (countObj['national'] - 1).toString(2)}${
    (countObj['situation'] - 1).toString(2)}`;
  return parseInt(binaryCode, 2);
};

export { generateCode, getMaxCodeDec, getCodeLen };
