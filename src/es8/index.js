//ES8

// Transformar un objeto en un arreglo

const data = {
    frontend: "Oscar",
    'backend': 'Isabel',
    design: "Ana",
}
// Entries
const entries = Object.entries(data)
console.log(entries)
console.log(entries.length)

// Values
const values = Object.values(data)
console.log(values)
console.log(values.length)

// padStart y padEnd
const string = "hello"
console.log(string.padStart(6, 'hi'))
console.log(string.padEnd(18, 'hola'))
console.log('texto de prueba'.padStart(25, "-"))

// Novedad en objetos
const obj = {
    nombre: "Franco",
}

// Async await
const helloWorld = () => {
    return new Promise ((resolve, reject) => {
        (false)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    })
}

const helloAsync = async () => {
    const hello = await helloWorld()
    console.log(hello)
}

helloAsync()

// Try y catch

const anotherFunction = async () => {
    try {
        const hello = await helloWorld()
        console.log(hello)
    } catch (error) {
        console.log(error)
    }
}

anotherFunction()