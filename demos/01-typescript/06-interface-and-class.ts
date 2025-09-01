// interface
interface IPerson {
    name: string,
    age: number,
    // void -> the function is not expected to return something
    celebrateBirthday: ( by : number ) => void // use undefined if the function SHOULD NOT return
}

// reason 1 - to give the type for object
const john : IPerson = {
    name: 'John',
    age: 32,
    celebrateBirthday( by : number ) {
        this.age += by;
        return this.age; // not expected to return something, but ok
    }
}

// reason 2 - to classes implement the public facing API defined by the interface
class Person implements IPerson {
    name!: string; // you tell TS that you will initialize it before you use it
    // age: number = 21;
    // age : number;
    // private email : string;

    // shortcut syntax for creating data members, and assigning values through the constructor (add public / private etc. to the constructor argument)
    constructor( public age : number, private email : string ) {
        // this.age = age;
        // this.email = email;
    }

    celebrateBirthday( by : number ) {
        this.age += by;
        return this.name; // is ok since void does not enforce no return
    }
}

const jane = new Person( 32, 'jane@gmail.com' );