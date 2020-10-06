// jshint esversion:6
const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0'
};

function decode(expr) {
    let resultStr = "";
    let str = ('0000000000' + expr).substring(-10);
    let strArr = str.match( /.{10}/g);

    for (let i=1; i < strArr.length; i++) {
        let letter = strArr[i];
        letter = letter.replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-').replace("**********", " ");
        resultStr += MORSE_TABLE[letter];
    }

    return resultStr.replace(/undefined/g, " ");
}

module.exports = {
    decode
}