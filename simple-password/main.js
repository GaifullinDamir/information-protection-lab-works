
// ASCII eng-upper-case - 65-90
// ASCII rus-lower-case - 1072-1103

/*constants*/
const P = 0.00001, // P - вероятность подбора пароля злоумышленником.
    V = 4320, // V - скорость перебора пароля паролей злоумышленником (пароль/день).
    T = 10, // T - максимальный срок действия пароля.
    intervalEngUpper = [65, 90],
    intervalRusLower = [1072, 1103];

/*functions*/
function calculateA (intervalEngUpper, intervalRusLower) {
    return intervalEngUpper[1] - intervalEngUpper[0] + intervalRusLower[1] - intervalRusLower[0] + 2;
};

function calculateSL(P, V, T) {
    return Math.ceil(V * T / P);
};

function calculateL (A, SL) {
    var L = 1;
    while (!(A ** L >= SL)) {
        L++;
    };
    return L;
};

function getRandInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
};

const getSymbols = (firstASCII, lastASCII) => {
    var symbols = [];
    for (var i = firstASCII; i <= lastASCII; i++) {
        symbols.push(String.fromCharCode(i));
    };
    return symbols;
}

const generateAlphabet = (intervalEngUpper, inteintervalRusLowerval2) => {
    return  getSymbols(intervalEngUpper[0], intervalEngUpper[1]).
        concat(getSymbols(intervalRusLower[0], intervalRusLower[1]));
};

const generateAPassword = (passwordLength, alphabet) => {
    var password = '';
    for (var i = 0; i < passwordLength; i++) {
        password += alphabet[getRandInt(0, alphabet.length - 1)];
    }
    return password;
};

/*main*/
function main() {
    const A = calculateA(intervalEngUpper, intervalRusLower);
    const SL = calculateSL(P, V, T);
    const L = calculateL(A, SL);
    const alphabet = generateAlphabet(intervalEngUpper, intervalRusLower);
    const password = generateAPassword(L, alphabet);

    console.log(password);

};

main();