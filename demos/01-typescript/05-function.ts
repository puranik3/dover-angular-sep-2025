// function type
// syntax 1
// return value data type is inferred
function sum( x : number, y : number ) {
    return x + y;
}

// syntax 2 - useful when you pass function as an argument...
// ...(to give the data type for the argument)
// arrow function (a function expression)
// in this case return type MUST be provided
type BinaryFunction = ( x : number, y : number ) => number;

const multiply : BinaryFunction = ( x, y ) => {
    return x * y;
};

function doSomething( fn : BinaryFunction ) {
    fn( 12, 13 );
}

doSomething( multiply )