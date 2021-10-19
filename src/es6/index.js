//NOVEDADES DE ES6 (año 2015)

// 1) Parámetros por defecto
function newFunction (name, age, country) {
    var name = name || "Carlos"
    var age = age || 19
    var country = country || "MX"
    console.log(name, age, country)
}

//es6
function newFunction2 (name = "Carlos", age = 19, country = 'MX') {
    console.log(name, age, country)
}

// 2) Template string
let hello = "Hello"
let world = "World"
let epicPhrase = hello + " " + world
console.log(epicPhrase)
//con es6..
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)

// 3) Salto de línea
let textoDePrueba = "Este es un simple texto de prueba.\n" + "No tiene nada de especial."

let textoDePrueba2 = `Otro texto de prueba.
Nada de especial tampoco.
`
console.log(textoDePrueba)
console.log(textoDePrueba2)

// 4) Destructuring
let person = {
    name: 'Carlos',
    'age': 19,
    'country': 'MX' 
}
console.log(person.name, person.age)
//es6..
let {name, age} = person
console.log(name, age)

// 5)
let team1 = ['Fernando', 'Carlos', "Federico"]
let team2 = ["Gabriel", 'Paula', "Micaela"]
let education = ['David', ...team1, ...team2]
console.log(education)

// 6) Scope de let
{
    var globalVar = "Global Var"
}
{
    let globalLet = "Global Let"
    console.log(globalLet)
    
}
console.log(globalVar)

// 7) NO se puede "pisar" el valor de una variable declarada con const.
const a = "b"
a = 'a'
console.log(a)

var b = "a"
b = "b"
console.log(b)

// 8) Parámetros en objetos.

let nombre = "Pablo"
let edad = 44
//es5
obj = {
    nombre: nombre,
    edad: edad
}
//es6
obj2 = {
    nombre,
    edad
}
console.log(obj)
console.log(obj2)

// 9) Arrow functions
const names = [
    {
        nombre: "Carla",
        edad: 26
    },
    {
        nombre: 'Fernanda',
        edad: 22
    }
]
//con función anónima
let listOfNames = names.map(function (item) {
    console.log(item.nombre)
})
//with es6..
let listOfNames2 = names.map(item => console.log(item.nombre))

const listOfNames3 = (nombre, edad, pais) => {
    // aquí va el código de la arrow function..
}

const listOfNames4 = nombre => {
    // si sólo empleamos un parámetro no hace falta poner paréntesis..
}

const square = num => {
    return num * num
}
console.log(square(4))

// 10) Promesas
const helloPromise = () => {
    return new Promise ((resolve, reject) => {
        if (true) {
            resolve("Hey!")
        } else {
            reject('Ups!!')
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log("hola"))
    .catch(error => console.log(error))

// 11) Clases

class calculator {
    constructor() {
        this.valueA = 0
        this.valueB = 0
    }
    sum(valueA, valueB) {
        this.valueA = valueA
        this.valueB = valueB
        return this.valueA + this.valueB
    }
}

const calc = new calculator()
console.log(calc.sum(3,6))

// 12) Módulos
import { hello } from './module'
hello()

// 13) Generators
function* helloWorld() {
    if (true) {
        yield 'Hello, '
    }
    if (true) {
        yield "World"
    }
}

const generatorHello = helloWorld()
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value) //undefined
