// main.js
import { calculateInterest } from './modules/interestRate.js';
import { calculateLoanPayment } from './modules/loanPayment.js';
import { calculateInvestmentReturn } from './modules/investmentReturn.js';

window.calculateInterest = function() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);
    
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        alert("Please enter valid numbers");
        return;
    }
    
    const interest = calculateInterest(principal, rate, time);
    document.getElementById('interest-result').innerText = `Interest: ${interest}`;
}

window.calculateLoanPayment = function() {
    const principal = parseFloat(document.getElementById('loan-principal').value);
    const rate = parseFloat(document.getElementById('loan-rate').value);
    const n = parseFloat(document.getElementById('loan-n').value);
    
    if (isNaN(principal) || isNaN(rate) || isNaN(n)) {
        alert("Please enter valid numbers");
        return;
    }
    
    const payment = calculateLoanPayment(principal, rate, n);
    document.getElementById('loan-result').innerText = `Monthly Payment: ${payment}`;
}

window.calculateInvestmentReturn = function() {
    const principal = parseFloat(document.getElementById('invest-principal').value);
    const rate = parseFloat(document.getElementById('invest-rate').value);
    const n = parseFloat(document.getElementById('invest-n').value);
    const t = parseFloat(document.getElementById('invest-t').value);
    
    if (isNaN(principal) || isNaN(rate) || isNaN(n) || isNaN(t)) {
        alert("Please enter valid numbers");
        return;
    }
    
    const futureValue = calculateInvestmentReturn(principal, rate, n, t);
    document.getElementById('investment-result').innerText = `Future Value: ${futureValue}`;
}
