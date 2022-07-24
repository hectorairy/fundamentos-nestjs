const myName = 'Hector';
const myAge = 24;

const suma = (a: number, b: number) => {
	return a + b;
};

suma(12, 6);

class Persona {
	// private age;
	// private name;

	// constructor(age: number, name: string) {
	// 	this.age = age;
	// 	this.name = name;
	// }

	constructor(private age: number, private name: string) {}

	getSummary() {
		return `my name is ${this.name}, ${this.age}`;
	}
}

const hector = new Persona(myAge, myName);

hector.getSummary();
