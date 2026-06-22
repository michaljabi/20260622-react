/**

 Skrócone zapisy pól i metod w obiektach

 #Cel:
 Poznanie nowej składni. Która upraszcza zapis obiektu.
 Często przydaje się w JS do "składania" obiektów z różnych zmiennych / stałych.
 */

// Bardzo często w JS zdarzają nam się takie operacje

const gender = 'female';

const userAnna  = {name: 'Anna',  gender: gender};
const userPaula = {name: 'Paula', gender: gender};

// Dla wygody w 2015 wprowadzono tzw. shorthand syntax dla pól obiektu
// Oznacza to, że jeśli nazwa Twojego pola w obiekcie i zmiennej, która chcesz tam przypisać - są takie same, możesz zapisać to w postaci skróconej:

const myUser = {name: 'Katarzyna', gender};

// UWAGA! W scope musisz posiadać dokładnie tak nazwaną
// zmienną/stałą jak nazwa pola, które chcesz mieć w obiekcie
// TO czy zmienna jest funkcją/obiektem/typem prostym/tablicą
// nie ma znaczenia. Zostanie wpisane do obiektu jako klucz — wartość.

// #1 Zadanie
// w console.log() wrzuć kilka obiektów z polem takim jak:
const greetings = 'Hello!';

/** Shorthand wprowadzony zostaje do zapisu deklaracji metod obiektu: */

// Dawniej mogliśmy zadeklarować funkcję w obiekcie w ten sposób:

const myObject = {
	myFunction: function() {
		console.log('some function logic!')
	}
}

// Teraz możemy to zrobić dużo prościej:

const my2ndObject = {
	myFunction() {
		console.log('some function logic!')
	}
}

// #2 Zadanie:
// a) Dodaj do my2ndObject metodę "sayMyName" zwracającą 'TwojeImię!'
// b) Dodaj kolejną pustą metodę "empty"



