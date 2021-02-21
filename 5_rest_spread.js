//Rest


// function average(a, b, ...args) {
//     return args.reduce((acc, i) => acc += i, 0) / args.length;
// }
// console.log(average(10, 20, 30, 40));

//Spread
// const array = [1,2,3,5,8,13]
// console.log(...array)
// console.log(Math.max(...array))
// console.log(Math.min(...array))
// console.log(Math.min.apply(null,array))

// const fib = [1,...array]
// console.log(fib)

//Destructuring

const array = [1, undefined, 3, 5, 8, 13]
// const [a, b = 42, ...c] = array
// console.log(a, b, c)

// const [a, , c] = array;
// console.log(a, c);

//Object

const address = {
    country: 'Russia',
    city: 'Moscow',
    // street:'Lenina',
    concat: function () {
        return `${this.country}, ${this.city}, ${this.street}`;
    }
}

// console.log(address.concat());

// const {city,country,street = 'Tverskaya',concat:addressConcat} = address
// // console.log(country);
// console.log(addressConcat.call(address));
// console.log(street);

// const { city, ...rest } = address;

// console.log(city)
// console.log(rest)

// const newAddress = { ...address, street: 'Tverskaya', code: 123 }
// console.log(newAddress)
