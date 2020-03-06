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
    '-----':  '0',
};

function decode(expr) {
    let arrCode = [];
    let result = [];
    let arrStr;


    for(let i = 0; i < expr.length; i+=10){
        arrCode.push(expr.slice(i,i + 10));
    }



    for(let prop in MORSE_TABLE){
        arrStr = prop.split("");
        for(let i = 0; i < arrStr.length; i++){
            if(arrStr[i] == "."){
                arrStr[i] = 10;
            }else if (arrStr[i] == '-'){
                arrStr[i] = 11;
            }

            if(arrStr.length < 5 ){
                arrStr.unshift("00");
            }
        }
        arrStr = arrStr.join("");
        MORSE_TABLE[arrStr] = MORSE_TABLE[prop];
    }
    for(let i = 0; i < arrCode.length; i++){
        for (let prop in MORSE_TABLE) {
            
            if(arrCode[i] == prop){
                result.push(MORSE_TABLE[prop]);
               
            }
        }
        if(arrCode[i] == "**********"){
            result.push(" ");
        }
    }
    return result.join("");
}
module.exports = {
    decode
};



