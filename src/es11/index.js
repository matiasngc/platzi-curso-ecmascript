//1er. novedad
const button = document.getElementById('btn')

button.addEventListener('click', async function() {
    const module = await import('./file.js')
    module.hello()
})

//2da. novedad
const aBigNumber = 789789789789789n
const anotherBigNumber = BigInt(789789789789789)

console.log(aBigNumber)
console.log(anotherBigNumber)

//3ra. novedad
const promise1 = new Promise((resolve, reject) => reject('reject'))
const promise2 = new Promise((resolve, reject) => resolve('resolve 1'))
const promise3 = new Promise((resolve, reject) => resolve('resolve 2'))

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response))

//4ta. novedad
console.log(window)
console.log(globalThis)

//5ta. novedad
const fooo = undefined ?? 'default string'
//también funciona con null.
console.log(fooo)

//6ta. novedad
const user = {}
console.log(user?.profile?.email)

if (user?.profile?.email) {
    console.log('email')
} else {
    console.log('fail')
}