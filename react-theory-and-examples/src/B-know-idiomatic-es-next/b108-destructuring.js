/**

 Destrukturalizacja obiektów i tablic w JavaScript

 #Cel:
 Poznanie sposobu "destrukturalizacji" (rozbrajania) obiektów i tablic.
 Uproszczenie dostępu do kolejnych "poziomów" zagnieżdżenia w środku obiektu.
 (obiekt w obiekcie... w obiekcie...w... itd. itd.)
 Sposób alias'owania rozbrojonych zmiennych.

 */

	// Dawniej:
 const simpleExampleObject = { hello: 'World', goodbye: 'Universe', user: { name: 'Michal' }  }

 const hello = simpleExampleObject.hello;
 console.log(hello)

 // Teraz:
 const { goodbye } = simpleExampleObject;
 console.log(goodbye)

 // Można również:
 const { user: {name} } = simpleExampleObject;
 console.log(name);


 // W tablicach nie mają znaczenia nazwy zmiennych (mogą być dowolne):

 // Dawniej
 const fruits = ['apple', 'banana', 'mango', 'cherry'];

 const banana = fruits[1];
 console.log(banana);

 // Teraz:
 const [myApple, myBanana] = fruits;
 console.log(myApple);
 console.log(myBanana);

 // Można również:
 const [, onlyBanana] = fruits;
 console.log(onlyBanana);


// Rozbrajanie obiektów i tablic w praktycznym użyciu
const inDoorAPI = {
 fridge: {
  manufacturer: 'Samsung',
  model: 'Cooler 291263',
  doors: 3,
  deFrost: true,
  content: ['eggs', 'ham', 'cheese', 'orange juice']
 }
};

// Uwaga: wykonując zadania uprość proces "wyciągania" zmiennych,
//        stosując zapis "const {} = inDoorAPI.fridge" i wtedy "rozbrajaj"

// #1 Zadanie:
// Wyodrębnij producenta ( manufacturer ) i pokaż na konsoli



// #2 Zadanie:
// Wyodrębnij nieistniejące pole - jaką przyjmie wartość?



// #3 Zadanie:
// Wyciągnij ser z lodówki :) (popatrz na content w inDoorAPI.fridge)



// #4 Zadanie:
// Zobacz iż destrukturalizacji można użyć w argumentach funkcji.
// Zrefaktoryzuj poniższy kod aby można było łatwiej dostać się do isAdmin, userName


function logIn(params) {
  console.log(params.isAdmin);
  console.log(params.userName);
}
// Odkomentuj aby potwierdzić poprawność działania
// logIn({userName: 'Admin', isAdmin: true})
