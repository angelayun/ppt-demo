let target = {
    name: 'target'
}
let proxy = new Proxy(target, {
    /**
     * 
     * 
     * @param {any} trapTarget 用于接收属性（代理的目标）的对象
     * @param {any} key 要写入的属性键
     * @param {any} value 被写入的属性的值
     * @param {any} receiver 操作发生的对象（通常是代理）
     */
    set(trapTarget, key, value, receiver) {
        if (!trapTarget.hasOwnProperty(key)) {
            if (isNaN(value)) {
                throw new TypeError('属性必须是数字')
            }
        }
        return Reflect.set(trapTarget, key, value, receiver)
    }
})
proxy.count = 1;
console.log(proxy.count)//1
console.log(target.count)//1

proxy.name = 'proxy'
console.log(proxy.name)//proxy
console.log(target.name)//proxy

proxy.anthorName = 'test'// 抛错


let proxy = new Proxy({}, {
    get(trapTarget, key, receiver) {
        if (!(key in receiver)) {
            throw new TypeError('属性' + key + '不存在')
        }
        return Reflect.get(trapTarget, key, receiver)
    }
})
proxy.name = 'proxy'
console.log(proxy.name)//proxy
console.log(proxy.nme)//抛出错误


let target = {
    name: 'target',
    value: 42
}
let proxy = new Proxy(target, {
    has(trapTarget, key) {
        if (key === 'value') {
            return false
        }
        return Reflect.has(trapTarget, key)
    }
})
console.log('value' in proxy)//false
console.log('name' in proxy)//true
console.log('toString' in proxy)//true


let target = {
    name: 'target',
    value: 42
}
let proxy = new Proxy(target, {
    deleteProperty(trapTarget, key) {
        if (key === 'value') {
            return false
        }
        return Reflect.deleteProperty(trapTarget, key)
    }
})
console.log('value' in proxy)//true
let result1 = delete proxy.value
console.log(result1)//false
console.log('value' in proxy)//true
//尝试删除不可配置属性name 如果没有使用代理则会返回false并且删除不成功
console.log('name' in proxy)//true
let result2 = delete proxy.name;
console.log(result2)//true
console.log('name' in proxy)//false


let target = {}
let proxy = new Proxy(target, {
    getPrototypeOf(trapTarget) {
        //必须返回对象或null，只要返回的是值类型必将导致运行时错误
        return null;
    },
    setPrototypeOf(trapTarget, proto) {
        // 如果操作失败则返回false  如果setPrototypeOf返回了任何不是false的值，那么Object.setPrototypeOf便设置成功
        return false
    }
})
let targetProto = Object.getPrototypeOf(target);
let proxyProto = Object.getPrototypeOf(proxy)
console.log(targetProto === Object.prototype)//true
console.log(proxyProto === Object.prototype)//false
Object.setPrototypeOf(target, {})//成功
Object.setPrototypeOf(proxy, {})//抛出错误



let target = {}
let proxy = new Proxy(target, {
    getPrototypeOf(trapTarget) {
        return Reflect.getPrototypeOf(trapTarget);
    },
    setPrototypeOf(trapTarget, proto) {
        return Reflect.setPrototypeOf(trapTarget, proto)
    }
})
let targetProto = Object.getPrototypeOf(target);
let proxyProto = Object.getPrototypeOf(proxy)
console.log(targetProto === Object.prototype)//true
console.log(proxyProto === Object.prototype)//true
Object.setPrototypeOf(target, {})//成功
Object.setPrototypeOf(proxy, {})//成功

let result = Object.getPrototypeOf(1)
console.log(result === Number.prototype)//true
Reflect.getPrototypeOf(1)//抛出错误


let target = {}
let proxy = new Proxy(target, {
    isExtensible(trapTarget) {
        return Reflect.isExtensible(trapTarget)
    },
    preventExtensions(trapTarget) {
        return Reflect.preventExtensions(trapTarget)
    }
})
console.log(Object.isExtensible(target))//true
console.log(Object.isExtensible(proxy))//true
Object.preventExtensions(proxy)
console.log(Object.isExtensible(target))//false
console.log(Object.isExtensible(proxy))//false



let target = {}
let proxy = new Proxy(target, {
    isExtensible(trapTarget) {
        return Reflect.isExtensible(trapTarget)
    },
    preventExtensions(trapTarget) {
        return false
    }
})
console.log(Object.isExtensible(target))//true
console.log(Object.isExtensible(proxy))//true
Object.preventExtensions(proxy)
console.log(Object.isExtensible(target))//true//书上说这里会返回true，可是我自己运行的时候就已经抛出错误了
console.log(Object.isExtensible(proxy))//true

let result1 = Object.isExtensible(2)
console.log(result1)//false
let result2 = Reflect.isExtensible(2)

let result1 = Object.preventExtensions(2)
console.log(result1)//2
let target = {}
let result2 = Reflect.preventExtensions(target)
console.log(result2)//true
let result3 = Reflect.preventExtensions(3)///抛出错误

let proxy = new Proxy({}, {
    defineProperty(trapTarget, key, descriptor) {
        if (typeof key === 'symbol') {
            return false
        }
        return Reflect.defineProperty(trapTarget, key, descriptor)
    }
})
Object.defineProperty(proxy, 'name', {
    value: 'proxy'
})
console.log(proxy.name)//proxy
let nameSymbol = Symbol('name')
//抛错
Object.defineProperty(proxy, nameSymbol, {
    value: 'proxy'
})



let proxy = new Proxy({}, {
    defineProperty(trapTarget, key, descriptor) {
        console.log(descriptor)
        console.log(descriptor.value)
        console.log(descriptor.name)
        return Reflect.defineProperty(trapTarget, key, descriptor)
    }
})
Object.defineProperty(proxy, 'name', {
    value: 'proxy',
    name: 'custom'
})


let proxy = new Proxy({}, {
    getOwnPropertyDescriptor(trapTarget, key) {
        //在返回的对象中使用不被允许的属性则会抛出一个错误
        return {
            name: 'proxy'
        }
    }
})
let descriptor = Object.getOwnPropertyDescriptor(proxy, 'name')


let target = {}
let result1 = Object.defineProperty(target, 'name', { value: 'target' })
console.log(target === result1)//true
let result2 = Reflect.defineProperty(target, 'name', { value: 'refelct' })
console.log(result2)//false


let proxy = new Proxy({}, {
    ownKeys(trapTarget) {
        return Reflect.ownKeys(trapTarget).filter(key => {
            return typeof key !== 'string' || key[0] !== "_"
        })
    }
})
let nameSymbol = Symbol('name')
proxy.name = 'proxy'
proxy._name = 'private'
proxy[nameSymbol] = 'symbol'

let names = Object.getOwnPropertyNames(proxy),
    keys = Object.keys(proxy),
    symbols = Object.getOwnPropertySymbols(proxy)
console.log(names)//["name"]
console.log(keys)//["name"]
console.log(symbols)//[Symbol(name)]



let target = function () { return 42; },
    proxy = new Proxy(target, {
        apply: function (trapTarget, thisArg, argumentList) {
            return Reflect.apply(trapTarget, thisArg, argumentList)
        },
        construct: function (trapTarget, argumentList) {
            return Reflect.construct(trapTarget, argumentList)
        }
    });
//一个目标是函数的代理看起来也像是一个函数
console.log(typeof proxy)//function
console.log(proxy())//42
let instance = new proxy();
console.log(instance instanceof proxy)//true
console.log(instance instanceof target)//true

function sum(...values) {
    return values.reduce((pre, cur) => pre + cur, 0)
}
let sumProxy = new Proxy(sum, {
    apply: function (trapTarget, thisArg, argumentList) {
        argumentList.forEach(arg => {
            if (typeof arg !== 'number') {
                throw new TypeError('所有参数必须是数字。')
            }
        });
        return Reflect.apply(trapTarget, thisArg, argumentList)
    },
    construct: function (trapTarget, argumentList) {
        throw new TypeError('该函数不可通过new来调用')
    }
})
console.log(sumProxy(1, 2, 3, 4, 5))//15
console.log(sumProxy(1, 2, '3', 4, 5))//抛出错误
let result = new sumProxy()//抛出错误

function Numbers(...values) {
    this.values = values
}
let NumberProxy = new Proxy(Numbers, {
    apply: function (trapTarget, thisArg, argumentList) {
        throw new TypeError('该函数必须通过new来调用')
    },
    construct: function (trapTarget, argumentList) {
        argumentList.forEach(arg => {
            if (typeof arg !== 'number') {
                throw new TypeError('所有参数必须是数字')
            }
        })
        return Reflect.construct(trapTarget, argumentList)
    }
})
let instance = new NumberProxy(12, 3, 4, 8)
console.log(instance.values)// [12, 3, 4, 8]
NumberProxy(1, 2, 3, 4)//报错


function Numbers(...values) {
    if (typeof new.target === 'undefined') {
        throw new TypeError('该函数必须通过new来调用')
    }
    this.values = values
}
let NumberProxy = new Proxy(Numbers, {
    apply: function (trapTarget, thisArg, argumentList) {
        return Reflect.construct(trapTarget, argumentList)
    }
})
let instance = NumberProxy(1, 2, 3, 4)
console.log(instance.values)//[1,2,3,4]

class AbstractNumbers {
    constructor(...values) {
        if (new.target === AbstractNumbers) {
            throw new TypeError('此函数必须被继承')
        }
        this.values = values
    }
}
class Numbers extends AbstractNumbers { }
let instance = new Numbers(1, 2, 3, 4, 5)
console.log(instance.values)//[1, 2, 3, 4, 5]
new AbstractNumbers(1, 2, 3, 4, 5)//报错  此函数必须被继承


class AbstractNumbers {
    constructor(...values) {
        if (new.target === AbstractNumbers) {
            throw new TypeError('此函数必须被继承')
        }
        this.values = values
    }
}
let AbstractNumbersProxy = new Proxy(AbstractNumbers, {
    construct: function (trapTarget, argumentList) {
        return Reflect.construct(trapTarget, argumentList, function () { })
    }
})
let instance = new AbstractNumbersProxy(1, 2, 3, 4)
console.log(instance.values)//[1, 2, 3, 4]

class Person {
    constructor(name) {
        this.name = name;
    }
}
let PersonProxy = new Proxy(Person, {
    apply: function (trapTarget, thisArg, argumentList) {
        return new trapTarget(...argumentList)
    }
})
let me = PersonProxy('angela')
console.log(me.name)//angela
console.log(me instanceof Person)//true
console.log(me instanceof PersonProxy)//true


let target = {
    name: 'target'
}
let { proxy, revoke } = Proxy.revocable(target, {})
console.log(proxy.name)//traget
revoke()
console.log(proxy.name)//报错


function toUint32(value) {
    return Math.floor(Math.abs(Number(value))) % Math.pow(2, 32)
}
function isArrayIndex(key) {
    let numericKey = toUint32(key)
    return String(numericKey) == key && numericKey < (Math.pow(2, 32) - 1)
}
function createMyArray(length = 0) {
    return new Proxy({ length }, {
        set(trapTarget, key, value) {
            let currentLength = Reflect.get(trapTarget, 'length')
            if (isArrayIndex(key)) {
                let numericKey = Number(key)
                if (numericKey >= currentLength) {
                    Reflect.set(trapTarget, 'length', numericKey + 1)
                }
            } else if (key === 'length') {
                if (value < currentLength) {
                    for (let index = currentLength - 1; index >= value; index--) {
                        Reflect.deleteProperty(trapTarget, index)
                    }
                }
            }
            Reflect.set(trapTarget, key, value)
        }
    })
}
let colors = createMyArray(3)
colors[0] = 'red'
colors[1] = 'green'
colors[2] = 'blue'
console.log(colors.length)//3
colors[3] = 'black'
console.log(colors[3])//black
console.log(colors.length)//4
colors.length = 1
console.log(colors)//{0: "red", length: 1}


let target = {}
let thing = Object.create(new Proxy(target, {
    /**
     * 
     * 
     * @param {any} trapTarget  原型对象
     * @param {any} key 
     * @param {any} receiver 实例对象
     */
    get(trapTarget, key, receiver) {
        throw new ReferenceError(`${key} doesn't exist`)
    }
}))
thing.name = 'thing'
console.log(thing.name)//thing
let unknown = thing.unknown//抛出错误

let target = {}
let thing = Object.create(new Proxy(target, {
    set(trapTarget, key, value, receiver) {
        return Reflect.set(trapTarget, key, value, receiver)
    }
}))
console.log(thing.hasOwnProperty('name'))
//触发set代理陷阱
thing.name = 'thing'
console.log(thing.name)
console.log(thing.hasOwnProperty('name'))
//不触发set代理陷阱
thing.name = 'boo'
console.log(thing.name)//boo

let target = {}
let thing = Object.create(new Proxy(target, {
    has(trapTarget, key) {
        return Reflect.has(trapTarget, key)
    }
}))
//触发has代理陷阱
console.log('name' in thing)//false
thing.name = 'thing'
//不触发has代理陷阱
console.log('name' in thing)//true

function NoSuchProperty() { }
NoSuchProperty.prototype = new Proxy({}, {
    get(trapTarget, key, receiver) {
        throw new ReferenceError(`${key} doesn't exist`)
    }
})
let thing = new NoSuchProperty()
//在get代理陷阱中抛出错误
let result = thing.name


function NoSuchProperty() { }
NoSuchProperty.prototype = new Proxy({}, {
    get(trapTarget, key, receiver) {
        throw new ReferenceError(`${key} doesn't exist`)
    }
})
class Square extends NoSuchProperty {
    constructor(length, width) {
        super()
        this.length = length;
        this.width = width
    }
}
let shape = new Square(2, 6)
let area1 = shape.length * shape.width
console.log(area1)
let area2 = shape.length * shape.wdth