/**

 # Zadanie:
 1. Sprawdź działanie template stringów w konsoli
 2. Zobacz jak template string radzi sobie z formatowaniem i wieloma liniami tekstu
 3. Serializuj i sprawdź wynik z multiline template string'a przy użyciu JSON.stringify()

 #Cel:
 Poznanie sposobów radzenia sobie z multiline string oraz interpolacją tekstu.
 Różne — dziwne, ale poprawne z punktu widzenia zapisy, pokazują nowe możliwości języka,
 które okażą się później pomocne przy pisaniu aplikacji React.
 */

const cooler = 'Super-Freezer-2025';
const cost = 2300;

// dawniej "klejonka":
const cool = 'This is my ' + cooler + ' - you can buy it for ' + cost + 'zł';

// teraz  template-strings:
const templateCool = `This is my ${cooler} - you can buy it for ${cost}zł`;

const interpolate = 'official suit';
console.log(`
  
  My
  multi-lined console.log is wearing an ${interpolate} !
  
`);

// Rozwiązanie



/**
 * Interpolacja a kod JavaScript
 *
 * W tym układzie interpolować możesz te rzeczy które ewaluują (obliczają) się w JS dając wynik.
 * Rozważ następujące, poprawne z pkt. widzenia JS przykłady:
 *
 * */

function sum2Numbers(x, y) {
	return x + y;
}

console.log(`Suma wynosi: ${sum2Numbers(15, 4) + 1 + 1}`)

const showName = true
console.log(`Hello ${ showName ? 'John !' : 'stranger' } `)
console.log(`Hello ${ showName && 'John !' } `)

console.log(`Classical empty object toString will be: ${ {} } `)

console.log(`IIFE inside: ${ (function(){ return '?o_O?'})() } `)
