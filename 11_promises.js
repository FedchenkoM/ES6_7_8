const promise = new Promise((resolve, reject) => {
    setTimeout(() => { resolve('success') }, 1000)
})

const delay = ms => new Promise((resolve, reject) => {
    setTimeout(() => { resolve(`Done ${ms}`) }, ms)
})

// delay(1000)
//     .then(data => delay(500))
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
//     .finally(() => console.log('finnaly'))

// async function asyncDelay(){
//     try {
//         const data = await delay(2000)
//     console.log(data)
//     } catch (e) {
//         console.log('error', e)
//     }
    
// } 

// asyncDelay()

// Promise.all([
//     delay(1000),
//     delay(1500),
//     delay(500)
// ]).then(data => console.log(data))

Promise.race([
    delay(1000),
    delay(1500),
    delay(500)
]).then(data => console.log(data))