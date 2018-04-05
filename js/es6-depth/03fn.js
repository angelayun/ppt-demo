function makeRequst(url, timeout, callback) {
  timeout = timeout || 2000;
  callback = callback || function () { }
}

function makeRequst(url, timeout, callback) {
  timeout = (typeof timeout !== 'undefined') ? timeout : 2000;
  callback = (typeof callback !== 'undefined') ? callback : function () { }
}

function makeRequst(url, timeout = 2000, callback) {

}

function mixArgs(first, second) {
  console.log(first === arguments[0])//true
  console.log(second === arguments[1])//true
  first = 'c'
  second = 'd'
  console.log(first === arguments[0])//true
  console.log(second === arguments[1])//true
}
mixArgs('a', 'b')


function mixArgs(first, second) {
  'use strict'
  console.log(first === arguments[0])//true
  console.log(second === arguments[1])//true
  first = 'c'
  second = 'd'
  console.log(first === arguments[0])//false
  console.log(second === arguments[1])//false
}
mixArgs('a', 'b')

function mixArgs(first, second = 'b') {
  console.log(first === arguments[0])//true
  console.log(second === arguments[1])//false
  first = 'c'
  second = 'd'
  console.log(first === arguments[0])//false
  console.log(second === arguments[1])//false
}
mixArgs('a')

function getValue(value) {
  return value + 5
}
function add(first, second = getValue(first)) {
  return first + second
}
console.log(add(1))//7

function pick(obj, ...keys) {
  let result = Object.create(null)
  for (let i = 0, len = keys.length; i < len; i++) {
    result[keys[i]] = object[keys[i]]
  }
  return result
}

let obj = {
  //Uncaught SyntaxError: Setter function argument must not be a rest parameter
  set name(...value) {
    console.log(value)
  }
}

function checkArgs(...args) {
  console.log(args.length)
  console.log(arguments.length)
  console.log(args[0], arguments[0])
  console.log(args[1], arguments[1])
}
checkArgs('a', 'b')

var add = new Function("first", "second=first", "return first+second")
console.log(add(1))//2

var pickFirst = new Function("...args", "return args[0]")
console.log(pickFirst(1, 2))//1

console.log(Math.max(11, 2, 3, 12, 43, 904, 3543, 43))
let values = [11, 2, 3, 12, 43, 904, 3543, 43]
console.log(Math.max.apply(Math, values))

let values = [11, 2, 3, 12, 43, 904, 3543, 43]
console.log(Math.max(...values))

let values = [-11, -2, -3, -12]
console.log(Math.max(...values, 0))

function doSomething() { }
console.log(doSomething.name)//doSomething

var doSome = function doSomeElse() { }
var person = {
  get firstName() { return 'angela' },
  sayName: function () { }
}
console.log(doSome.name)//doSomeElse
console.log(person.sayName.name)//sayName
console.log(person.firstName.name)//undefined

var doThing = function () { }
console.log(doThing.bind().name)//bound doThing
console.log((new Function()).name)//anonymous

function person(name) {
  this.name = name
}
var p = new person('angela')
var notaPerson = person('angela')
console.log(p)
console.log(notaPerson)

function Person(name) {
  if (this instanceof Person) {
    this.name = name
  } else {
    throw new Error('必须通过new关键字来调用')
  }
}
var person = new Person('angela')
var notAPerson = Person.call(person, 'Shing')//这样对于函数本身是无法区分是通过Person.Call、Apply还是new调用得到的实例

function Person(name) {
  //或者typeof new.target===Person
  console.log(new.target)
  if (typeof new.target !== 'undefined') {
    this.name = name
  } else {
    throw new Error('必须通过new关键字来调用')
  }
}
function AnotherPerson(name) {
  Person.call(this, name)
}
var person = new Person('angela')
var notAPerson = new AnotherPerson(person, 'Shing')//抛出错误

'use strict'
if (true) {
  console.log(typeof doSomeThing)  //function
  doSomeThing()//----------
  function doSomeThing() {
    console.log('----------')
  }
}
console.log(typeof doSomeThing) //function

let sum = (num1, num2) => num1 + num2
//相当于
let sum = function (num1, num2) {
  return num1 + num2
}

function factorial(n) {
  if (n <= 1) {
    return 1
  } else {
    //无法优化，必须在返回后执行乘法操作
    return n * factorial(n - 1)
  }
}

function factorial(n, p = 1) {
  if (n <= 1)
    return 1 * p
  else {
    let result = n * p;
    //优化后
    return factorial(n - 1, result)
  }
}