/**

 Domyślne wartości dla parametrów w funkcji

 #Cel:
 Poznanie kolejnych "standardów" w językach wysokopoziomowych,
 które po 2015 roku zostały wprowadzone do JavaScript

 */


function callMyGrandpa(name, phoneNo = '111-223-222', device = 'Motorola') {
	console.log('Grab', device, 'dial', phoneNo, 'call', name)
}

callMyGrandpa('Józef');
callMyGrandpa('Staszek', '0000-1202917');
callMyGrandpa('Zbyszek', '+48 601-284-212', 'Xiaomi');


// #1 Zadanie:
// Jak zrobić wywołanie: Grab MyPhone dial 111-223-222 call MyGrandpa
// Gdzie tylko środkowy parametr ma przyjąć wartość domyślną.

// #2 Zadanie:
// Co jeśli któryś z parametrów będzie null'em ?

// #3 Zadanie:
// Wróć do destructuring'u - zauważ iż tam też można wykorzystać wartości domyślne
