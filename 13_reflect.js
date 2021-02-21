class Student {
    constructor(name) {
        this.name = name
    }

    greed() {
        console.log(`Hello, my name is ${this.name}`)
    }
}

class ProtoStudent {
    university = 'Oxgford'
}

const student = Reflect.construct(Student, ['Igor'])

// console.log(student.__proto__ === ProtoStudent.prototype)

Reflect.apply(student.greed, { name: 'tester' }, [])
console.log(Reflect.ownKeys(student))

Reflect.preventExtensions(student)

student.age = 25

console.log(Reflect.isExtensible(student))

console.log(student)