let varA = 'A';
let varB = 'B';
let varC = 'C';
let varTemporaria;

varTemporaria = varA;
varA = varB;
varB = varC;
varC = varTemporaria;

console.log(varA, varB, varC);
