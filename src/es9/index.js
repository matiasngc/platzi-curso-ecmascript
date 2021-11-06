// 1er novedad
const obj = {
    nombre: 'Felipe',
    'edad': 10,
    pais: "Colombia"
}

let {nombre, ...all} = obj
console.log(obj)
console.log(nombre)
console.log(nombre, all)
console.log(all)

// 2da novedad: Fusionar objetos
const obj1 = {
    nombre: "Ana",
    edad: 24
}

const obj2 = {
    ...obj1,
    pais: 'Ecuador'
}
console.log(obj2)

// 3ra novedad
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 2000)
            : reject(new Error("Test Error"))
    })
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log("Finalizó"))

//4ta novedad
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2020-02-11')
const year = match[1]
const month = match[2]
const day = match[3]
console.log(match)
console.log(year, month, day)