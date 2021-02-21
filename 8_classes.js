class Person {
    type = 'human'

    constructor(name) {
        this.name = name
    }
    greet(){
        console.log(this.name + 'say hello!')
    }
}

// const max = new Person('Max') 

// console.log(max)
// console.log(max.type)

// console.log(max.__proto__ === Person.prototype);

class Programmer extends Person {
    constructor(name,job){
        super(name)

        this._job = job 
    }

    get job(){
        return this._job.toUpperCase()
    }
    set job(job){
        if (job.length < 2) {
            console.log('validation error')
        }
        else {this._job = job}
        
    }

    greet(){
        super.greet()
        console.log('Rewriten')
    }

}

const frontend = new Programmer('Max','Frontend')

// console.log(frontend.job);
frontend.job = 'backend'

// console.log(frontend.job);

//Static

class Util {
    static average(...args){
        return args.reduce((acc,i) => acc += i, 0) / args.length
    }
}

const res = Util.average(1,1,2,3,5,8);
console.log(res)

// const util = new Util();

// console.log(util.average(1,1,2,3,5,8))
