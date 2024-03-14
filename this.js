// function Car(make, model) {
//     this.make = make
//     this.model = model
// }

// class Car {
//     constructor(make, model) {
//         this.make = make
//         this.model = model
//     }
// }

// const car = new Car("Porsche", "Cayman S")

// console.log(car)

const firstObject = {
    name: "Tizio Caio",
    description: "whatever",
    getCapitalName: () => {
        console.log(this)
        // console.log(this.description.toUpperCase())
    }
}
const secondObject = {
    name: "Tizio Caio",
    description: "whatever",
    getCapitalName: function () {
        console.log(this)
        // console.log(this.description.toUpperCase())
    }
}


firstObject.getCapitalName()
secondObject.getCapitalName()