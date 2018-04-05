let firstName = Symbol()
let person = {}
person[firstName] = "angela"
console.log(person[firstName])

let symbol = Symbol('this is test description')
console.log(typeof symbol)//symbol


let uid = Symbol.for('uid')
let object = {
  [uid]: '12345'
}
console.log(object[uid])//12345
console.log(uid)//Symbol(uid)
let uid2 = Symbol.for('uid')
console.log(uid === uid2)//true
console.log(object[uid2])//12345
console.log(uid2)//Symbol(uid)


let uid = Symbol.for('uid')
console.log(Symbol.keyFor(uid))//uid
let uid2 = Symbol.for('uid')
console.log(Symbol.keyFor(uid2))//uid
let uid3 = Symbol('uid')
console.log(Symbol.keyFor(uid3))//undefined

let uid = Symbol.for('uid')
let desc = uid + ""//报错  Uncaught TypeError: Cannot convert a Symbol value to a string

let uid = Symbol.for('uid')
let desc = uid / 1//报错  Uncaught TypeError: Cannot convert a Symbol value to a number

let uid = Symbol.for('uid')
let desc = String(uid)
console.log(desc)//Symbol(uid)



let uid = Symbol.for('uid')
let object = {
  [uid]: '12345'
}
let symbols = Object.getOwnPropertySymbols(object)

let obj = []
//obj instanceof Array //下面一句代码与此句功能等价
Array[Symbol.hasInstance](obj)//true 

function SpecialNumber() { }
Object.defineProperty(SpecialNumber, Symbol.hasInstance, {
  value: function (v) {
    return (v instanceof Number) && (v >= 1 && v <= 100)
  }
})
var two = new Number(2),
  zero = new Number(0);
console.log(two instanceof SpecialNumber)//true
console.log(zero instanceof SpecialNumber)//false
Symbol.isConcatSpreadable

let c1 = ['red', 'green'],
  c2 = c1.concat(['blue', 'black'], 'yellow')
console.log(c2)//["red", "green", "blue", "black", "yello"]
["red", "green", ["blue", "black"], "yellow"]

let collection = {
  0: 'hello',
  1: 'world',
  2: 'demo',
  3: 'test',
  length: 4
}
let msg = ['Hi'].concat(collection)
console.log(msg)

Symbol.match, Symbol.replace, Symbol.search, Symbol.split

let hasLenOf10 = {
  [Symbol.match](v) {
    return v.length === 10 ? [v.substring(0, 10)] : null
  },
  [Symbol.replace](v, replacement) {
    return v.length === 10 ? replacement + v.substring(10) : v;
  },
  [Symbol.search](v) {
    return v.length === 10 ? 0 : -1
  },
  [Symbol.split](v) {
    return v.length === 10 ? ["", ""] : [v]
  }
}
let msg1 = 'Hello world',
  msg2 = 'Hello John';
console.log(msg1.match(hasLenOf10))//null
console.log(msg2.match(hasLenOf10))//[Hello John]
console.log(msg1.replace(hasLenOf10))//Hello world
console.log(msg2.replace(hasLenOf10))//undefined
console.log(msg1.search(hasLenOf10))//-1
console.log(msg2.search(hasLenOf10))//0
console.log(msg1.split(hasLenOf10))//["Hello world"]
console.log(msg2.split(hasLenOf10))//["",""]

Symbol.toPrimitive

function Temperature(degree) {
  this.degree = degree
}
Temperature.prototype[Symbol.toPrimitive] = function (hint) {
  switch (hint) {
    case "string":
      return this.degree + '\u00b0';
    case "number":
      return this.degree;
    case "default":
      return this.degree + " degrees"
  }
}
var freezing = new Temperature(32)
console.log(freezing + "!")//32 degrees!
console.log(freezing / 2)//16
console.log(String(freezing))//32°


Symbol.toStringTag
function isArray(value) {
  return Object.prototype.toString.call(value) === "[object Array]"
}

function Person(name) {
  this.name = name
}
Person.prototype[Symbol.toStringTag] = "Person"
Person.prototype.toString = function () {
  return this.name
}
var me = new Person('angela')
console.log(me.toString())//angela
console.log(Object.prototype.toString.call(me))//[object Person]
console.log()
console.log()
console.log()
console.log()
console.log()