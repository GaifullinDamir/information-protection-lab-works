export default {
    P : 0.00001, // P - вероятность подбора пароля злоумышленником.
    V : 4320, // V - скорость перебора пароля паролей злоумышленником (пароль/день).
    T : 10, // T - максимальный срок действия пароля.
    intervalEngUpper : [65, 90], // Интервал ASCII-кода для латиницы в верхнем регистре. 
    intervalRusLower : [1072, 1103] // Интервал ASCII-кода для кириллицы в нижнем регистре.
};