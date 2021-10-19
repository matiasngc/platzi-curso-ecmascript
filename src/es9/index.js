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
            ? resolve('Hello World')
            : reject(new Error("Test Error"))
    })
}