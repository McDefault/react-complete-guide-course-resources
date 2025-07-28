// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string | string[];

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

// Type Alias (class object)

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: 'Max',
  age: 32,
};

// person = {
//   isEmployee: true
// };

let people: Person[];

// Type inference

let course = 'React - The Complete Guide'; // implicitly made 'string' type without type specification

course = 12341; // resulting in error and bypassing fall-back 'any' type specification

// Type union - multiple types

let course_union: string | number = 'React - The Complete Guide';

course_union = 12341;

// Functions & types

// Function parameter type specification

function add(a: number, b: number) {
  return a + b;
}

// Function return type specification

function remove(a: any, b: any): string {
  return a + b;
}

// Function without return (void)

function print(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) { // Type of array and value is the same
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd')

// updatedArray[0].split('');