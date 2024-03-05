import rls from 'readline-sync';
import calculate from './calculate.js';
import utils from './utils/utils.js';
import consts from './utils/consts.js';

const {calculateA, calculateSL, calculateL} = calculate;
const {generateAlphabet, generatePasswords, printPasswords, strToInt} = utils;
const {P, V, T, intervalEngUpper, intervalRusLower} = consts;

function caseGeneratePasswords(L, alphabet) {
    var res = rls.question('Enter the number of passwords: ');
    res = strToInt(res);
    if (res > 0){
        printPasswords(L, generatePasswords(res, L, alphabet));
    } else {
        console.log('Incorrect input.');
    }
};

function workCycle(L, alphabet) {
    var run = true;
    while (run) {
        var answer = rls.question('0 - generate password/passwords;\n1 - exit.\ncommand: ');
        switch(answer) {
            case '0':
                caseGeneratePasswords(L, alphabet);
                break;
            case '1':
                run = false;
                break;
            default:
                console.log('Incorrect input.')
                break;
        }
    }
};

function init() {
    const A = calculateA(intervalEngUpper, intervalRusLower);
    const SL = calculateSL(P, V, T);
    const L = calculateL(A, SL);
    const alphabet = generateAlphabet(intervalEngUpper, intervalRusLower);
    return {L, alphabet};
};

function main() {
    const {L, alphabet} = init();
    workCycle(L, alphabet);
};

main();