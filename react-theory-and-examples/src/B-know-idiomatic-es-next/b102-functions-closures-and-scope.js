/**
 "Jak to? Funkcja przyjmuje funkcję"

 #Cel:
 Utrwalenie podstawowych sposobów wykorzystywania funkcji w JavaScript.
 Uświadomienie sobie znaczenia JavaScript pod względem własności:
 "Functions first class citizens"

*/

/** > podstawowe użycie: Deklaracja + nazwa - wywołanie z nazwy */
function iAmDeclared() {
	return 'hello';
}

// iAmDeclared();

// #1 Zadanie:
/*
	udowodnij że wywołanie w tym przypadku może nastąpić przed lub po deklaracji.
	interpreter sobie z tym poradzi
	nasz kod zyskuje "re-używalności" ponieważ możemy odwoływać się do funkcji
	ile tylko razy chcemy i kiedy chcemy.
*/



/** > wywołanie po przez wskaźnik na funkcje anonimową */
const iAmAnonymous = function () {
	return 'anonymous'
}

// #2 Zadanie:
// udowodnij że wywołanie funkcji może nastąpić tylko po przez fakt istnienia wskaźnika
// dodatkowo - wykaż iż nie zadziała to przed przypisaniem (co w sumie jest logiczne :)


/** > przekazanie funkcji przez parametr innej funkcji */
function getCollection(callback) {
	callback([1, 2, 3, 4])
}

// #3 Zadanie:
// odbierz kolekcję numerów 1-4 z funkcji getCollection - nie ruszając jej składni!


/** > kompozycja funkcji w obiekcie (funkcja staje się metodą) */
const myFunctionsNamespace = {
	declared: iAmDeclared,
	anonymous: iAmAnonymous,
	withCollection: getCollection,
	other: function() {
		return 'from other!'
	}
}

// #4 Zadanie:
// sprawdź obiekt i udowodnij iż metody osadzone w nim - działają


/** > dostęp do zasięgu innej funkcji wewnątrz "mojej funkcji" */
function outerScope() {
	const outer = 'OUTER';

	function innerScope() {
		console.log(outer + ' INNER');
	}

	innerScope();
}

// #5 Zadanie:
// a) Zanim wywołasz outerScope - zastanów się co pokaże się na konsoli?
// b) Dlaczego tak się dzieje ?

/** > zwracanie funkcji po przez inną funkcję */
function hello() {
	const world = 'World!';
	return function () {
		return 'Hello ' + world;
	}
}

// #6 Zadanie:
// a) Wywołaj na konsoli "Hello World"
// b) Wyjaśnij jak to działa?
// c) Jak nazywane jest zjawisko możliwości dostępu do world i dlaczego w ogóle możemy to zrobić
