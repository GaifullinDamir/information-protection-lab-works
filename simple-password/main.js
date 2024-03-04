import readline from 'readline';
import {calculateA, calculateSL, calculateL} from './calculate.js';
import {generateAlphabet, generatePasswords, printResult} from './utils.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const P = 0.00001, // P - вероятность подбора пароля злоумышленником.
    V = 4320, // V - скорость перебора пароля паролей злоумышленником (пароль/день).
    T = 10, // T - максимальный срок действия пароля.
    intervalEngUpper = [65, 90], // Интервал ASCII-кода для латиницы в верхнем регистре. 
    intervalRusLower = [1072, 1103]; // Интервал ASCII-кода для кириллицы в нижнем регистре.

function numberInput(L, alphabet) {
    rl.question('Число паролей: ', (answer) => {
        if (!isNaN(answer)) {
            if(answer > 0) {
                const passwords = generatePasswords(Math.floor(+answer), L, alphabet);
                printResult(L, passwords);
            } else {
                console.log('Неверный ввод.')
            }
        } else {
            console.log('Неверный ввод.')
        }
        workCycle(L, alphabet);
    });
};

function workCycle(L, alphabet) {
    rl.question('0 - сгенерировать пароли;\n1 - выход.\nКоманда: ', (answer) => {
        switch(answer) {
            case '0':
                numberInput(L, alphabet);
                break;
            case '1':
                rl.close();
                break;
            default:
                console.log('Неверный ввод.')
                workCycle(L, alphabet);
                break;
        };
    });
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