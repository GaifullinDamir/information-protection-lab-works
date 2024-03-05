function getRandInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function getSymbols(firstASCII, lastASCII) {
    var symbols = [];
    for (var i = firstASCII; i <= lastASCII; i++) {
        symbols.push(String.fromCharCode(i));
    };
    return symbols;
}

function generateAlphabet(...intervals) {
    return intervals.reduce(
        (alphabet, interval) => alphabet.concat(getSymbols(interval[0], interval[1])), []);
};

function generatePassword(passwordLength, alphabet) {
    var password = '';
    for (var i = 0; i < passwordLength; i++) {
        password += alphabet[getRandInt(0, alphabet.length - 1)];
    }
    return password;
};

function generatePasswords(passwordsQuantity, passwordLength, alphabet) {
    var passwords = [];
    for (var i = 0; i < passwordsQuantity; i++) {
        passwords.push(generatePassword(passwordLength, alphabet));
    }
    return passwords;
};

function printPasswords(L, passwords) {
    console.log(
        `Calculated password length (L): ${L}\nPasswords:`
    );
    passwords.forEach(password => {
        console.log(`${password}`);
    })
};

function checkStrIsInt(data) {
    return !isNaN(data) && Number.isInteger(+data);
};

function strToInt(data) {
    return checkStrIsInt(data) ? +data : 0;
};

export default {
    getRandInt, getSymbols, generateAlphabet, generatePassword, generatePasswords, printPasswords, checkStrIsInt, strToInt
}