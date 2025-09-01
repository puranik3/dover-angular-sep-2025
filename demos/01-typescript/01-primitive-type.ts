// Primitive types
// initialize a variable -> type is inferred (type inference)
let x = 2;
let isMonsoon = true;
let greeting = 'Hello, world';

// null, undefined
let obj : any = null; // data type is "any"
// not a good practice to use "any" type
obj = [ 1, 2 ];
obj = true;
obj = {
    name: 'John',
    age: 32,
    celebrateBirthday() {
        ++this.age;
    }
};
obj.celebrateBirthday(); // this -> obj

let p : null = null;
p = 1;