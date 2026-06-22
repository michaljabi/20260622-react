/**

 Po 2015 JS upraszcza sposób w który możemy połączyć 2 obiekty lub 2 tablice w jeden.
 Wykorzystując tablice możemy też w łatwy sposób przekazać parametry do funkcji
 Możemy także utworzyć funkcję posiadającą N argumentów.

 #Cel:
 Poznanie operatorów spread i rest na praktycznych przykładach

 */

// TABLICE:

const fruits = ['apple', 'banana', 'pear'];
const vegetables = ['carrot', 'onion'];

// Spread operator: Połączenie tablic owoców i warzyw w nową jednowymiarową tablicę
const combineWithSpread = [...fruits, ...vegetables];
console.log(combineWithSpread);

// Rest operator: teraz funkcja może mieć (1 + n) parametrów wywołania
function showRestArguments(first, ...rest) {
	console.log(first);
	console.log(rest);
}

// #1 Zadanie sprawdź działanie showRestArguments


// OBIEKTY:
const user = {
	name: 'Jacek',
	login: 'J4ck'
}

const superUser = {
	...user,
	isAdmin: true
}

console.log(superUser);

// #2 Co się stanie jeśli user posiadał by już pole isAdmin ?
