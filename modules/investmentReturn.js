// modules/investmentReturn.js
//U61753810
export function calculateInvestmentReturn(principal, rate, n, t) {
    return principal * Math.pow(1 + rate / n, n * t);
}
