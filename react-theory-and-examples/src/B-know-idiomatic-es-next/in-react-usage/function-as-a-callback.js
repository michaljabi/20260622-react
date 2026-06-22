//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//
// Najfajniejsze użycie tzw. arrow functions
// To "callbacks"

// Przykładowo:
document.body.addEventListener("click", () => {
  console.log("Hello");
});

// W uproszczonej postaci `arrow` zwraca to co ma po prawej bez koniecznosći pisania `return`
// Zobacz
const myMagicNumber = () => 78;
console.log(myMagicNumber());

// Jednak w React czasem chcemy zwrócić wartość Obiektową!
const mySample = () => ({ setup: "with ()" }); // Tutaj MUSZĄ BYĆ dodatkowe ( oraz ) !

// Inaczej interpreter pomyśli ze chodzi nam o `multiline` arrow function a {} to ciało funkcji
// zobacz:
const functionMultiline = () => {
  // komentarz
  const calc = 12 + 1;
  return calc; // w multiline arrow - musimy `return` jeśli zwracamy wynik !
};

// Inne przykłady w callbacks:

// Możemy też "predefiniować" zachowania jeśli wykorzystamy programowanie funkcyjne
// I funkcja - zwróci funkcję
function consoleSay(text) {
  return () => {
    console.log(text);
  };
}

// Teraz mamy "Factory function" dla naszego `callback`
// Zobacz, to samo ustawienie eventu co wyżej mogę zapisać tak:
document.body.addEventListener("click", consoleSay("Hello"));

// Takie predefiniowanie, za pomocą wykorzystania programowania funkcyjnego pozwala nam na kompozycję:
document.body.addEventListener("click", consoleSay("This"));
document.body.addEventListener("click", consoleSay("Is"));
document.body.addEventListener("click", consoleSay("It"));

// Jak to wykorzystać w REACT?
// Jeśli np. mamy formularz gdzie jest więcej niż `1` pole:

function SampleForm() {
  const saveData = {
    userName: "",
    lastName: "",
    email: "",
  }; //💡 UWAGA - nie używam `useState` żeby maxymalnie UPROŚCIĆ przykład i podkreślić kod na którym nam faktycznie zależy

  const handleFrom = (name) => (ev) => {
    const value = ev.target.value;
    saveData[name] = value;

    // zobacz, jeśli: name === 'userName'
    // to tutaj faktycznie mamy zapis:
    //  saveData['userName'] = value;
    // czyli dokładnie jakby w kodzie:
    //  saveData.userName = value;

    // Analogicznie dla pozostałych: `lastName` oraz `email` !
  };

  return (
    <>
      <input onInput={handleFrom("userName")} />
      <input onInput={handleFrom("lastName")} />
      <input onInput={handleFrom("email")} />
    </>
  );
}
