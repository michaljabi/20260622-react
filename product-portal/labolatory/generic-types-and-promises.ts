// Generic types:
const myArray: Array<number> = [];

// sexowny zapis:
const myArray2: number[] = [];

// Wniosek:
// Zapis generyczny z Array, natywny w TS ma lukier składniowy [].



function giveMeNumber() {
    return 2;
}

console.log(giveMeNumber());

// Promise:
function giveMeNumber2() {
    return Promise.resolve(3)
}

// async / await (lukier składniowy dla Promise)
console.log(await giveMeNumber2())

// przed 2017:
giveMeNumber2().then(value => {
    console.log(value);
})


async function giveMeNumber50() {
    return 50;
}


// PO co promise ??


async function giveMeMyMoney(password = '') {
    if(password !== '3456') {
        throw new Error('WRONG password!')
    }
    return 50;
}


giveMeMyMoney('3456')
    .then((money) => {
        console.log('Odebrane pieniądze', money)
        return `odbierasz ${money}`
    })
    .then((v) => {
        console.log(v);
    })
    .catch((err) => {
        console.log(err.message)
    })

// Analogia w async await
try {
    const money = await giveMeMyMoney('34563');
    console.log('Odebrane pieniądze', money)
    console.log('Odebrane pieniądze', money)
} catch (e) {
      console.log(e.message)
}

// porównaj do array chaining....
// ;[1,2,3].map((e) => e * 2).filter(() => true).map(() => ).fil