type Currency = number;

// type alias
let chequeAmount : Currency = 1000;

// type literals (use values as types), union operator
let feedback : 1 | 2 | 3 | 4 | 5 = 5;
// feeback = 6; // error
// feedback = -1; // error
feedback = 3;

let age : number | string = 'Twenty One';
age = 21;
age = true; // error