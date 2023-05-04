import { data } from '../data/cards.js'

const getJson = () => JSON.parse(data);

const toBits = (num) => Math.ceil(Math.log2(num));

const getCountBitsObj = (data) => {
    return { 
        'seller_tactic': data.seller.tactic.length,
        'buyer_tactic': data.buyer.tactic.length,
        'national': data.buyer.national_short.length,
        'situation': data.seller.goal.length
    }
}

const generateSymbolCode = (len) => {
    const randomNum = Math.floor(Math.random() * len);
    const binaryNum = randomNum.toString(2).padStart(toBits(len), '0');
    return binaryNum;
}

const generateCode = (data) => {
    const countBitsObj = getCountBitsObj(data);
    const binaryCode = `${generateSymbolCode(countBitsObj['seller_tactic'])}${generateSymbolCode(countBitsObj['buyer_tactic'])}${generateSymbolCode(countBitsObj['national'])}${generateSymbolCode(countBitsObj['situation'])}`; 
    return parseInt(binaryCode, 2).toString(8).padStart(4, '0');
}

export { getJson, generateCode };
