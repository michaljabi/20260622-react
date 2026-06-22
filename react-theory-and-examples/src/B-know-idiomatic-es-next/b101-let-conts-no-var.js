/**
 Nowe sposoby deklarowania zmiennych (i stałych): let, const

 Po 2015 dostajemy zasięg leksykalny zmiennych i 2 słowa kluczowe
 używamy let i const zamiast var

 Sprawdzenie, czy przeglądarka rozpoznaje te słowa kluczowe:
 @see {@link https://caniuse.com/#search=let}
 @see {@link https://caniuse.com/#search=const}

 Jeśli nie, pozostaje nam użycie transpilera (z czego i tak korzystamy przy dużych projektach):
 @see {@link https://babeljs.io/}

 #Cel:
 Osiągniecie zasięgu leksykalnego.
 Faworyzowanie const — wtedy nie można ponownie przypisać zmiennej (możemy czuć się bezpieczniej).
 */

let x = 1;
x++;
console.log('My ex is:', x);

const y = 100;
console.log('Hello I\'m', y, 'I cannot be reassigned');


// Zadanie:

// #1 spróbuj przypisać inną wartość do y, co się stanie?

// #2 przetestuj zasięg leksykalny używając bloków {  }, porównaj z var

// #3 wykaż, że typ złożony przypisany do const nie jest "immutable" po prostu nie można const przypisać ponownie

