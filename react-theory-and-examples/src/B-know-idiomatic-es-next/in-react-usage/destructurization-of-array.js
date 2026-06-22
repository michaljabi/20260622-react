// Hipotetyczne zadanie:

/**
 * Napisz w JavaScript funkcję która zwraca 2 i więcej wartośći na `return`
 *
 *
 * SPOILER:
 * - zadanie nie do osiagnięcia
 */

// w JS nie istnieje taki syntax:

function returnTwo() {
  return (10, 20);
}

// Zapis jest paradoxalnie poprawny (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_operator)
// - ale nie zwróci tych 2 wartości !

// Na wyjściu będzie tylko - 20

// No ok, to co jakbyśmy jednak chcieli te 2 wartości

// Podejście 1 - obiekt
// Wpadamy na pomysł że możemy je przecież połączyć obiektem

function returnTwoAsObject() {
  return { a: 10, b: 20 };
}

// Ok, mamy te 2 wartości, ale .... musimy znać API.
// = wiedzieć, że `a` to 1wszy wynik
// natomiast `b` to 2gi wynik

// Podejście 2 - tablica
function returnTwoAsArray() {
  return [10, 20];
}

// Ok, return zadziała bo tablica to jeden obiekt, a ma w sobie 2 elementy

// I też można powiedzieć, że ok - ale trzeba się napracować teraz bo:

const result = returnTwoAsArray();
const first = result[0];
const second = result[1];

// czyli odnosimy się po indexach i w ten sposób - dostajemy 2 wartości

// Itnieje jednak nowoczesny zapis, który znacząco nam to ułatwia:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring

// Zobacz:
const [pointA, pointB] = returnTwoAsArray();

// teraz:
// pointA === 10
// pointB === 20

// Co więcej - można więcej
function returnEvenMore() {
  return [1, 2, 3, 4];
}

// I wybrać co się zbiera:
const [, , , third] = returnEvenMore();

console.log(third); // wyświetli - 4

// pomijamy tutaj zwracaną wartośc na 0, 1, 2 indeksie, bierzemy tylko trzeci!

// To jest używane w useState() z React:

function HelloWorld() {
  const [counter, setCounter] = useState(0);
}

// 💡 React nie chce naurzać nam nazwy przechowanego stanu oraz nazwy funkcji, która go updatuje !
/*
 Dzięki temu możliwe są np. takie zapisy, w jednym komponencie:
*/

 function StateSlices() {
    const [counter, setCounter] = useState(0);
    const [message, setMessage] = useState('');
    const [user, setUser] = useState({ name: 'Michał' });
    const [toolbox, setToolBox] = useState(['hammer', 'screwdriver']);
 }

// hipotetycznie można założyć, że pod spodem `useState` wygląda tak:
function useState(intialValue) {
  const updaterFn = (toSetValueOrCallback) => {
    if (typeof toSetValueOrCallback === "function") {
      intialValue = toSetValueOrCallback(intialValue);
    } else {
      intialValue = toSetValueOrCallback;
    }
    // nie mamy "re-render", 
    // więc zwróćmy tutaj aktualną wartość, dla sprawdzenia
    return intialValue;
  };

  return [intialValue, updaterFn];
}
