// typy proste, przekazywane przez wartości
console.log(1 === 1);

// lista typów prostych - warto zapamiętać (tylko 7!)
// https://developer.mozilla.org/en-US/docs/Glossary/Primitive

// WSZYSTKO reszta = Typ Obiektowy

// typy obiektowe - przekazywane przez referencje
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line no-constant-binary-expression
console.log({} === {}) // {} to tzw. Literał Obiektowy

// to to samo co:
// eslint-disable-next-line no-constant-binary-expression
console.log(new Object() === new Object()); 

// lub tak, dla Array:
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line no-constant-binary-expression
console.log([] === []) // [] to tzw. Literał tablicowy

// to to samo co:
// eslint-disable-next-line @typescript-eslint/no-array-constructor, no-constant-binary-expression
console.log(new Array() === new Array())

// Wniosek
// Tworzymy 2 inne obiekty w pamięci, więc nie będą nigdy równe!

// Tutaj np. będziemy mieli 2 tzw. Referencje do tego samego obiektu w pamieci:
const user = {name : 'Michał'};

const user2 = user; // To nie jest KLONOWANIE obiektu (nie mamy 2 w pamięci). 
// 
// Jest jeden obiekt, do którego "prowadzą" 2 referencje:
console.log(user === user2);