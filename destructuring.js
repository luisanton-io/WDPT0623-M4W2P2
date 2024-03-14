// Destrutturazione sugli oggetti [object destructuring]

const car = {
    make: "Porsche",
    model: "Cayman S",
    year: 2020,
    plate: "R98713",
    variant: "GCC"
}

// const model = car.model
// const year = car.year
// const variant = car.variant

// destrutturiamo il valore dall'oggetto car
// possiamo immaginarlo come una "estrazione" del valore "variant"
// dall'oggetto car.
// "variant" diventa una variabile a sé

// const { variant } = car

// Qualora dovessimo sfortunatamente avere una variabile nel medesimo scope
// che non possiamo sovrascrivere...
const variant = ["GCC", "EURO", "AMERICAN"]

// possiamo in tal caso rinominare i valori destrutturati,
// con questa sintassi

const { variant: carVariant } = car

// ...questo è esattamente come scrivere:
// const carVariant = car.variant

// console.log(carVariant)


// Destrutturazione sugli array [array destructuring]
const fruits = ["🍌", "🍊", "🍎"]

// Possiamo andare a definire delle variabili
// utilizzando la destrutturazione su un array,
// ovvero con questa sintassi:
const [banana, orange, apple] = fruits

// console.log(banana, apple)

// Questo è esattamente come scrivere:
// const banana = fruits[0]
// const orange = fruits[1]
// const apple = fruits[2]

// ...andiamo a definire variabili rispettivamente con il contenuto
// al primo, secondo e terzo indice dell'array

// console.log(Object.keys(car))
// console.log(Object.values(car))
// console.log(Object.entries(car))

// for (const key in car) {
//     console.log(key, car[key])
// }

// console.log(Object.entries(car))
// Object.entries(car)
//     .forEach(([key, value], index) => {
//         // const [key, value] = keyAndValue // const [key, value] = [ 'make', 'Porsche' ]
//         console.log(index, key, value)
//     })

// Object spreading

const obj1 = {
    name: "John",
    age: 30
}

const obj2 = {
    name: "Rambo",
    gender: "M"
}

const obj3 = {
    ...obj1, // { name: 'John', age: 30 }
    ...obj2, // { name: 'Rambo', gender: 'M' }
    phone: "+1-555-1234"
}

// console.log(obj1)
// console.log(obj2)
console.log(obj3)

const dbUser = { name: 'Rambo', age: 30, gender: 'M', phone: '+1-555-1234' }

const dtoUser = {
    gender: 'F'
}

const newUser = {
    ...dbUser,
    ...dtoUser,
}

// console.log(newUser)

// Array spreading

const myString = "Hello World"

console.log([...myString])
const [firstChar, secondChar, thirdCharacter, ...allOtherCharacters] = [...myString]

// console.log(thirdCharacter) // ?
console.log(allOtherCharacters) // ?

// Parameters spreading
function sum(...numbers) {
    console.log(numbers)
    return numbers.reduce((a, b) => a + b)
}

console.log(sum(1, 2, 3))
console.log(sum(1, 2, 3, 45, 6, 7))

// .find
// Il metodo find è un filtro che restituisce il primo risultato

//               0  1  2  3  4  5
const numbers = [1, 2, 3, 4, 5, 6]

// Andiamo a "pescare" il primo numero pari
console.log(numbers.find(
    // Al solito, ci troviamo la funzione di callback da definire
    function (number) {
        // se la funzione restituisce true, allora .find restituisce questo numero
        return number % 2 === 0
    }
))

// .findIndex
console.log(numbers.findIndex(
    // Al solito, ci troviamo la funzione di callback da definire
    function (number) {
        // se la funzione restituisce true, allora .findIndex 
        // restituisce l'indice che siamo arrivati a controllare
        return number % 2 === 0
    }
))
// .includes
console.log(numbers.includes(6))

// .some
// .every