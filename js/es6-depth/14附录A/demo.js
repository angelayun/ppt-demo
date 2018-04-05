console.log(Number.isInteger(25))//true
console.log(Number.isInteger(25.0))//true
console.log(Number.isInteger(25.1))//false

let inside = Number.MAX_SAFE_INTEGER,
  outside = Number.MAX_SAFE_INTEGER + 1
//Number.MIN_SAFE_INTEGER表示整数范围的下限
console.log(Number.isInteger(inside))//true
console.log(Number.isSafeInteger(inside))//true

console.log(Number.isInteger(outside))//true
console.log(Number.isSafeInteger(outside))//false

let \u0061 = 'abc'
console.log(\u0061)//abc
console.log(a)//abc

//let \u{61} = 'abc'
//console.log(\u{61})//abc
//console.log(a)//abc

let person = {
  getGreeting() {
    return 'hello'
  }
}
let dog = {
  getGreeting() {
    return 'woof'
  }
}
let friend = {
  __proto__: person
}
console.log(friend.getGreeting())//hello
console.log(Object.getPrototypeOf(friend) === person)//true
console.log(friend.__proto__ === person)//true
friend.__proto__ = dog
console.log(friend.getGreeting())//woof
console.log(Object.getPrototypeOf(friend) === dog)//true
console.log(friend.__proto__ === dog)//true

