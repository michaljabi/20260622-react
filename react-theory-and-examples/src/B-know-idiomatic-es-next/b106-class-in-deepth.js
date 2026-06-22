/**

 Ciąg dalszy o klasach

 #Cel:
 Poznanie możliwości klas, wykorzystanie konstruktora, dziedziczenie.
 Przypomnienie o własnościach i wykorzystaniu operatorów logicznych w JavaScript

 */

class Vehicle {
	name = 'My super Cool Vehicle'
}

class Helicopter extends Vehicle {

	constructor(name) {
		super();
		this.name = name || this.name;
	}
}

// #1 Zadanie:
// Przygotuj 2 instancje klasy Helicopter w jednej nadaj mu nazwę prze konstruktor - w drugiej nie.
// Wyjaśnij różnice i sprawdź pole name.

// #2 Zadanie:
// Czy w JavaScript można przeładowywać metody klas? lub konstruktor?
