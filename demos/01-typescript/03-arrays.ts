// arrays
// [ 1, "One" ]; // mixed data types in arrays are fine
let chequeAmounts1 : (string | number)[] = [ 1000, "Two Thousand" ];
let chequeAmounts2 : string | number[] = [ 1000, 2000 ];
chequeAmounts2 = "Three thousand";