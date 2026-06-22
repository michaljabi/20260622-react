/**

 Nowa własność (po 2015) - arrow functions

 #Cel:
 Poznanie / przypomnienie zapisu funkcji arrow w JavaScript
 Sprawdzenie jej własności i różnych sposobów zapisu.

 */

/** Uwaga 1: Arrow function ZAWSZE jest anonimowa */
// Podstawowe znaczenie ma dla nas możliwość skróconego zapisu arrow function

const hello = () => 'Cześć'
const greetings = name => `Witaj ${name} !`
const manyArguments = (a, b) => a + b

// Jeśli wyrażenie posiada "wynik" (ewaluuje się) i można je zapisać w jednej linii - to wtedy
// słowo return jest  dodane "implicit" (niejawnie) - nie trzeba go zapisywać a wynik działania funkcji jest tym
// co będzie ona zwracać.

// #1 Zadanie:
// spróbuj wywołać i odebrać wynik od powyższych funkcji arrow

/** Uwaga 2: Arrow function może być zapisane rozwlekle (multiline) */

const multilineComputation = name => {
	 const nameToUpper = name.toUpperCase();
	 const luckyNumber = Math.floor(Math.random() * 100);
	 return `Hello ${nameToUpper} your lucky number is ${luckyNumber}`
}

// #2 Zadanie:
// Rozwiń funkcję multilineComputation i dodaj do niej dodatkowy argument luckyNumber
// tak aby jego wartość przychodziła (z zewnątrz) - co trzeba zmienić w powyższej funkcji

///--------///
// Co do jednej linii:
// Można również zwrócić tablicę lub obiekt. Mamy jednak do rozwiązania problem z obiektem
// Obiekt zapisujemy tak: {} a tak samo definiujemy miejsce "ciała" definicji funkcji. => {}
const returnEmptyArray = () => [];
const returnEmptyObject = () => ({});

// Pamiętasz funkcje, która zwraca funkcję? Możliwy i poprawny będzie również taki zapis:
const helloWorld = (world) => () => 'Hello ' + world;

// #3 Zadanie:
// Sprawdź działanie i wywołaj helloWorld oraz powyższe funkcje arrow ([] i {})

/** Uwaga 3: Arrow function nie "gubi kontekstu".
 * Słowo this wskazywać będzie na ten obiekt, na który wskazuje w momencie deklaracji arrow function
 * Dlatego Arrow Function doskonale nadaje się do callbacków
 * */

class Cat {

	constructor(name) {
		this.name = name;
	}

	meow() {
		function run() {
			console.log(`Miaaau, tutaj: ${this.name}`)
		}
		run();
	}

	arrowMeow() {
		const run = () => {
			console.log(`Miaaau, tutaj: ${this.name}`)
		}
		run();
	}
}


// #4 Zadanie:
// Porównaj wywołania meow oraz arrowMeow - dlaczego tak się dzieje
