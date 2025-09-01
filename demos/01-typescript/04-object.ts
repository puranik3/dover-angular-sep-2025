// objects
// Can you create an object without explicitly defining a class?
// const means you cannot reassign the variable


const john = {
    name: 'John',
    age: 32
};

// john = {
//     name: 'Jonathan',
//     age: 33
// };

john.age = 34; // properties can be assigned (even if object is const)

type Person = {
    name: string,
    readonly age: number,
    spouse?: string // optional property
};

let jane : Person;
let mark : Person;

jane = {
    name: 'Jane',
    age: 28,
    // spouse: 'John' // may or may not have spouse - it is ok
};

jane.age = 29; // error - age is readonly

export {}