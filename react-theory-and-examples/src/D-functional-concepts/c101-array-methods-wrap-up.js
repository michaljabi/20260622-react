/**

 Podsumowanie używania metod tablicowych:
 Mutujące i niemutujące tablicę

 */

const myNumbersArray = [ 1, 2, 33, 44, 55, 3, 1 ];

// Iteracja elementów
[1,2,3,4,5].forEach(element => {});

// Mapowanie
// Transformacja elementów
const mapped = [1,2,3,4,5].map((nr) => 'Chapter #'+nr);

// Filtrowanie
// Zmiana ilości elementów
const oddNumbers = [1,2,3,4,5].filter((nr) => (nr%2));

// Sprawdzenie warunku
// Każdy element spełnia predykat
const allLowerThan10 = [1,2,3,4,5].every((nr) => nr < 10);

// "Redukcja" elementów
// Gdzie map i filter nie może tam przyda się reduce
const sumOfElements = myNumbersArray.reduce((acc, value) => acc + value);


// Metody mutujące tablicę:
const mutableArray = ['a','b','c','d'];

// dodanie elementu na koniec:
mutableArray.push('e');

// "wyjęcie" ostatniego elementu:
mutableArray.pop();

// dodanie elementu na początek:
mutableArray.unshift('x');

// "wyjęcie" pierwszego elementu:
mutableArray.shift();


// przeszukiwanie index'ów, elementów, inne...
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
