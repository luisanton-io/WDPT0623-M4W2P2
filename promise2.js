
const promessaDiUnNumeroPariFra2Secondi = new Promise((resolve, reject) => {

    setTimeout(() => {
        const number = Math.round(Math.random() * 10)
        const isEven = number % 2 === 0

        if (isEven) {
            resolve(number)
        } else {
            reject(new Error("Number is not even"))
        }

        // resolve o reject non impedisce il proseguimento della funzione e quindi il resto viene eseguito
        console.log('test')
    }, 2000)

})

promessaDiUnNumeroPariFra2Secondi
    .then(
        function (macarena) {
            // certamente sarà un numero pari....
            console.log("Il numero è pari!!!", macarena)
        }
    )
    .catch(
        function (error) {
            console.error("Errore micidiale!!! Messaggio di errore: ", error.message)
        }
    )

