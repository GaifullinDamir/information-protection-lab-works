export function getRandInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
};

export function getSymbols(firstASCII, lastASCII) {
    var symbols = [];
    for (var i = firstASCII; i <= lastASCII; i++) {
        symbols.push(String.fromCharCode(i));
    };
    return symbols;
}

export function generateAlphabet(intervalEngUpper, intervalRusLower) {
    return  getSymbols(intervalEngUpper[0], intervalEngUpper[1]).
        concat(getSymbols(intervalRusLower[0], intervalRusLower[1]));
};

export function generatePassword(passwordLength, alphabet) {
    var password = '';
    for (var i = 0; i < passwordLength; i++) {
        password += alphabet[getRandInt(0, alphabet.length - 1)];
    }
    return password;
};

export function generatePasswords(passwordsQuantity, passwordLength, alphabet) {
    const passwords = [];
    for (var i = 0; i < passwordsQuantity; i++) {
        passwords.push(generatePassword(passwordLength, alphabet));
    }
    return passwords;
};

export function printResult(L, passwords) {
    console.log(
        `Рассчитанная длина пароля: ${L}\nПароли:`
    );
    passwords.forEach(password => {
        console.log(`${password}`);
    })
};