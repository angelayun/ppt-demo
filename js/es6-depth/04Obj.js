function createPerson(name, age) {
  return {
    name,
    age
  }
}

var person = {
  name: 'angela',
  sayName() {
    console.log(this.name)
  }
}

var person = {},
  lastName = 'last name';
person["first name"] = 'Li'
person[lastName] = 'yun hua'


let lastName = 'last name';
var person = {
  "first name": 'Li',
  [lastName]: 'yun hua'
}

var suffix = 'name'
var person = {
  ['first ' + suffix]: 'Li',
  ['last ' + suffix]: 'yun hua'
}

var receiver = {},
  supplier = {
    get name() {
      return "file.js"
    }
  }
Object.assign(receiver, supplier)
var desc = Object.getOwnPropertyDescriptor(receiver, "name")
console.log(desc.value)//file.js
console.log(desc.get)//undefined

'use strict'
var person = {
  name: 'lisa',
  name: 'angela'
}
console.log(person.name)//angela

var obj = {
  a: 1,
  0: 1,
  c: 1,
  2: 1,
  b: 1,
  1: 1
}
obj.d = 1
console.log(Object.getOwnPropertyNames(obj).join(''))//012acbd

var person = {
  getGreeting() {
    return 'hello'
  }
}
var dog = {
  getGreeting() {
    return 'woof'
  }
}
let friend = Object.create(person)
console.log(friend.getGreeting())//hello
console.log(Object.getPrototypeOf(friend) === person)//true
Object.setPrototypeOf(friend, dog)
console.log(friend.getGreeting())//woof
console.log(Object.getPrototypeOf(friend) === dog)//true

var person = {
  getGreeting() {
    return 'hello'
  }
}
var dog = {
  getGreeting() {
    return 'woof'
  }
}
var friend = {
  getGreeting() {
    return Object.getPrototypeOf(this).getGreeting.call(this) + ",hi!";
  }
}
Object.setPrototypeOf(friend, person)
console.log(friend.getGreeting())//hello,hi!
console.log(Object.getPrototypeOf(friend) === person)//true
Object.setPrototypeOf(friend, dog)
console.log(friend.getGreeting())//woof,hi!
console.log(Object.getPrototypeOf(friend) === dog)//true


var person = {
  getGreeting() {
    return 'hello'
  }
}
var friend = {
  getGreeting() {
    return Object.getPrototypeOf(this).getGreeting.call(this) + ",hi!";
  }
}
Object.setPrototypeOf(friend, person)
var relative = Object.create(friend)
console.log(person.getGreeting())//hello
console.log(friend.getGreeting())//hello,hi!
console.log(relative.getGreeting())// 报错 Uncaught RangeError: Maximum call stack size exceeded



var person = {
  // 是方法
  getGreeting() {
    return 'hello'
  }
}
function shareGreeting(params) {
  return 'Hi!'
}
var friend = {
  getGreeting() {
    return super.getGreeting.call(this) + ",hi!";
  }
}
Object.setPrototypeOf(friend, person)
var relative = Object.create(friend)
console.log(person.getGreeting())//hello
console.log(friend.getGreeting())//hello,hi!
console.log(relative.getGreeting())// hello,hi


console.log(Object.getPrototypeOf(friend) === person)//true
Object.setPrototypeOf(friend, dog)
console.log(friend.getGreeting())//woof,hi!
console.log(Object.getPrototypeOf(friend) === dog)//true


console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()