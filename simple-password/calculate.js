export function calculateA (intervalEngUpper, intervalRusLower) {
    return intervalEngUpper[1] - intervalEngUpper[0] + intervalRusLower[1] - intervalRusLower[0] + 2;
};

export function calculateSL(P, V, T) {
    return Math.ceil(V * T / P);
};

export function calculateL (A, SL) {
    var L = 1;
    while (!(A ** L >= SL)) {
        L++;
    };
    return L;
};