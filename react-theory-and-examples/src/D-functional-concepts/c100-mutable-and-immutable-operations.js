/**

 Dalsze koncepcje programowania funkcyjnego, z których będziemy korzystać w React

 #Cel:
 Poznanie / przypomnienie: mutujących i niemutujących operacji na tablicach.

 Brak mutacji danych ma znaczenie w kontekście "wykrywania zmian" przez Reacta.
 Ponieważ może on na podstawie stanu określić czy dany obiekt wymaga re-renderowania (czy mam aktualizować DOM?).

 Tak samo będziemy korzystać z tych metod w Redux

 */

	// DODAWANIE ELEMENTÓW
	// Rozważmy przykład:
  const numbers = [1, 2, 3, 4];
  const otherNumbers = numbers;
  // Dodajmy liczbę:
  numbers.push(5)
  // Dane zostały zmutowane:
  console.log(numbers === otherNumbers)

	// #1 Zadanie:
  // Jak utworzyć nową tablicę tak aby nie mutować poprzedniej i dodać do niej 5?
	const myNumbers = [1, 2, 3, 4];
	const myOtherNumbers = [];


  // MODYFIKOWANIE ELEMENTÓW
	// Rozważmy przykład:
	const letters = ['a', 'b', 'c'];
	for(let x = 0; x < letters.length; x++) {
		letters[x] = letters[x].toUpperCase();
	}
	// tablica jest "zmutowana"
  console.log(letters)

	// #2 Zadanie:
  // Jak utworzyć nową tablicę ze zmodyfikowanymi elementami?
	const myLetters = ['a', 'b', 'c'];
	const myUpperLetters = [];


	// USUWANIE ELEMENTÓW
	// Rozważmy przykład:
	const fruits = ['apple', 'banana', 'mango', 'cherry'];
	fruits.pop();
	// tablica jest "zmutowana"
	console.log(fruits)

	// #3 Zadanie:
	// Jak pozbyć się ostatniego elementu nie mutując tablicy
	const myFruits = ['apple', 'banana', 'mango', 'cherry'];
	const myFruitsWithoutCherry = [];
