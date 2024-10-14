/** fuctions */
const sum = (a: number, b: number): number => {
    return a + b;
};

let ret = sum(1, 2);
// let ret = sum(1,"2")

// console.log(ret);

/**
 * Create a function with 2 parameters
 * - number and an aliase of a string and number
 * return a string or a number as sum or concat;
 */
type StringNumber = string | number;

const sumOrConcat = (a: number, b: StringNumber): StringNumber => {
    // type guard
    // if (typeof b === "string") return a + b + "";
    // return a + b;
    return typeof b === 'string' ? a + b + '' : a + b;
};

type TwoNumbers = (a: number, b: number) => number;

// const add: TwoNumbers = (c, d) => {
//   if (d > 10) return -1;
//   return c;
// };

const multi: TwoNumbers = (x, y) => {
    return x * y;
};

/** default params */
const addDefault = (a: number, b: number = 5): number => {
    return a + b;
};
// addDefault(1,4)

/** optional params */
const addOpional = (a: number, b?: number): number => {
    // if(typeof b === undefined) return a
    return a + (b || 0);
};

/** never type */
const errorMessage = (message: string): never => {
    throw new Error(message);
};

const numberOrString = (value: number | string | string[] | undefined): string => {
    if (typeof value === 'string') return 'this is a string';
    if (typeof value === 'number') return 'this is a number';
    return errorMessage('this should be only a string or a number');
};

const infinite = (): never => {
    while (true) {}
};

const log = (message: string): void => {
    console.log(message);
};

/** function overload */
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number | string, b: number | string): number | string {
    if (typeof a === 'string' && typeof b === 'string') return a + b + '';
    if (typeof a === 'number' && typeof b === 'number') return a + b;
    return -1;
}

// add(1,2)
// add("a","b")
// add(1,"a")

/** Assertions or Casting */
/** use as keyword */
/** have info that ts don't know
 * telling ts what is the type
 */

/** example aliases */
// type One = string;
// type Two = string | number;
// type There = "hello";

/** convert to more or less specific */
// let a: One = "Hi";
// /** less specific */
// let b = a as Two;
// b = "9";
// /** more specific */
// let c = a as There;
// console.log("c=>", c);
// c = "hello"
// console.log("c=>", c);

/** angle brackets - not tsx */
// let d = <Two | One>1

/** Dom Elements */

// const myImg = document.querySelector("img")!;
// myImg.src = "http://......jpg";

// const img = document.querySelector("img") as HTMLImageElement;
// if (img) {
// img.src = "";
// }

// const input = <HTMLInputElement>document.querySelector("input");
// input.value = 'abc'
// input.type

// const year = <HTMLSpanElement>document.getElementById('year'); // as HTMLSpanElement
// const thisYear: string = new Date().getFullYear().toString();
// year ? year.textContent = thisYear : ''

/** Classes
 * access modifiers:
 * public - anywhere
 * protected - within the class and subclass
 * private - within the class
 */

class User {
    public name: string;
    private age: number;
    protected active: boolean;

    constructor(name: string, age: number, active: boolean) {
        this.name = name;
        this.age = age;
        this.active = active;
    }

    getAge() {
        return `My age is ${this.age}`;
    }
    getActive() {
        return `Am I active? ${this.active}`;
    }
    setAge(age: number) {
        this.age = age;
    }
}

// let user1 = new User("John", 25, true);
// user1.setAge(35);
// console.log(user1.getAge());
// console.log(user1.getActive());
// console.log(user1.name);

class Student extends User {
    // public gender: string
    constructor(name: string, age: number, active: boolean, public gender: string) {
        super(name, age, active);
    }

    getStudentAge() {
        return `Student age is ${this.getAge()}`;
    }
    getStudentActive() {
        return `Is student active? ${this.active}`;
    }
}

let stud1 = new Student('Anne', 22, true, 'f');

// console.log(stud1.gender);
// console.log(stud1.getStudentActive())
// console.log(stud1.getStudentAge())

interface UserI {
    name: string;
    age: number;
    active: boolean;
    getAge(): number;
}

class Users implements UserI {
    constructor(public name: string, public age: number, public active: boolean) {}
    getAge(): number {
        return this.age;
    }
}

// class Students extends Users {

// }

/** static method */

class UserStatic {
    static count: number = 0;

    static getCount(): number {
        return UserStatic.count;
    }

    public id: number;
    public name: string;
    constructor(name: string) {
        this.name = name;
        this.id = ++UserStatic.count;
    }
}

const user1 = new UserStatic('John');
const user2 = new UserStatic('Marry');
const user3 = new UserStatic('Anne');

console.log(user1.name, user1.id, UserStatic.getCount());
console.log(user2.name, user2.id, UserStatic.count);
console.log(user3.name, user3.id, UserStatic.count);
