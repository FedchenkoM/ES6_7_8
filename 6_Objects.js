const cityField = 'city';
const job = 'frontend';


const person = {
    job,
    age: 26,
    name: "Irina",
    [cityField + Date.now()]: 'Saint-p',
    'country-live': 'Russia',
    print: () => 'person',
    toString: function () {
        return Object
            .keys(this)
            .filter(key => key !== 'toString')
            .map(key => this[key])
            .join('')
    }
}
// console.log(person.toString());
// console.log(person);

//Methods

const first = { a: 1 }
const second = { b: 2 }
// console.log(Object.is(20, 20))
const obj = Object.assign({}, first, { c: 2, d: 4 })
console.log(obj)

console.log(Object.entries(obj))
console.log(Object.keys(obj))
console.log(Object.values(obj))