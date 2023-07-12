let principalamount = 100;
let interestrate = 0.020;
let timeperiod = 6;
let compound = 12;
let compoundInterest = principalamount *( Math.pow((1 + interestrate/compound), (compound * timeperiod)));
let totalAmount = principalamount + compoundInterest;


console.log(`Compound Interest: ${compoundInterest.toFixed(2)}`);

interestrate = interestrate-=0.01;
compoundInterest = principalamount *( Math.pow((1 + interestrate/compound), (compound * timeperiod)));
compoundInterest = compoundInterest.toFixed(2)
console.log(`New Compound interest: ${compoundInterest.toFixed(2)}`);


let difference = compoundInterest - compoundInterest;
console.log(`Difference between compound interests is: ${difference.toFixed(2)}`)

compoundInterest = compoundInterest.toString();
console.log(`Number of cents in compound interest: ${compoundInterest.slice(5)}`);


console.log(`Total amount: ${totalAmount.toLocaleString("fr", {style: "currency", currency: "EUR",})}`)