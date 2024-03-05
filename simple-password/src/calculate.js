/*Вычисление A (мощность алфовита)*/
function calculateA (...intervals) {
    return intervals.reduce((result, interval) => result + interval[1] - interval[0] + 1, 1);
};

/*Вычисление SL (нижняя граница чисола всевозможных паролей)*/
function calculateSL(P, V, T) {
    return Math.ceil(V * T / P);
};

/*Вычисление L (длина пароля)*/
function calculateL (A, SL) {
    var L = 1;
    while (!(A ** L >= SL)) {
        L++;
    };
    return L;
};

export default {
    calculateA, calculateSL, calculateL
};