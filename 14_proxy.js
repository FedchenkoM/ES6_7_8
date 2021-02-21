const validator = {
    get(target, prop) {
        return prop in target ? target[prop] : `Поля ${prop} в обьекте нет`
    },

    set(target, prop, value) {
        if (value.length > 2) {
            Reflect.set(target, prop, value)
        } else {
            console.log(`Длина должна быть больше 2 символов. Сейчас ${value.length}`)
        }
    }
}

const form = {
    name: 'tester',
    password: '12345'

}

// const formProxy = new Proxy(form, validator)

// console.log(formProxy.password)
// console.log(formProxy.name)
// console.log(formProxy['username'])

// formProxy.password = '12'

// console.log(formProxy)

function log(msg) {
    console.log('[Log]:', msg)
}

const proxy = new Proxy(log,{
    apply(target,thisArgs,argArray){
        if(argArray.length === 1) {
            Reflect.apply(target, thisArgs,argArray)
        } else {
            console.log('Количество аргументов не совпадает')
        }
    }
})

proxy('CUSTOM')
proxy('DFDFDFDFDF',2)