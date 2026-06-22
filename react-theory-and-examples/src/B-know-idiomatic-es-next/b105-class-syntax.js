/**

 Deklarowanie klas w JavaScript - dawniej i dzisiaj.

 #Cel:
 Poznanie składni z class. Przypominającej formą i zapisem to co znamy z języków obiektowych (C#, Java - etc...)
 Zrozumienie iż jest to tylko lukier składniowy.
 */

// Osiągnięcie właściwości podobnych do klas przed 2015:
function OldCar() {
	this.brand = 'Audi';
	this.model = 'A8';
	this.sayHi = function() {
		return `Hello from ${this.brand}! I'm model ${this.model}`
	}
}


// Podstawowa składnia klasy w ES6:
class Car {

	constructor() {
		this.brand = 'Audi';
		this.model = 'A8';
	}

	sayHi() {
		return `Hello from ${this.brand}! I'm model ${this.model}`
	}
}

// #1 Zadanie: zrób instancje i sprawdź metodę sayHi !

class CarFromTheFuture {

	// Określanie pól nie w konstruktorze
	brand = 'Audi';
	model = 'A8';
	static wheels = 4

	sayHi() {
		return `Hello from ${this.brand}! I'm model ${this.model}`
	}

	static somethingStatic() {
		console.log('Method can be static since 2015 (ES6)')
	}
}

// #2 Zadanie: zrób instancje CarFromTheFuture i sprawdź metodę sayHi !
// b) wywołaj metodę statyczną somethingStatic()


// #3 Jak dodać statyczne pola do klas OldCar / Car ? i jak się do nich odwoływać

// #4 Przekopiuj i sprawdź w przykłady w babel REPL: https://babeljs.io/repl
