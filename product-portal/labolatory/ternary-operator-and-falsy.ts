// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator

const isTruthy = 'sample'

console.log(isTruthy ? 'Hello' : 'Goodbye');

// Warto zapmiętać liste Faly values:
// https://developer.mozilla.org/en-US/docs/Glossary/Falsy
const isFalsy = NaN;

console.log(isFalsy ? 'Hello' : 'Goodbye');



// Pamiętaj że JS pod spodem określając Truthy / Falsy robi tak:
// opcja1:
console.log(Boolean('possible truthy?'))
// opcja2:
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
console.log(!!'possible truthy?')

// I JS używa tego w `if` - bo można tam wrzucić dowolną wartość

if(NaN) { 

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
    console.log('Nie wykonam się')
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line no-constant-condition
if({}) {
    console.log('Wykonam się')
}