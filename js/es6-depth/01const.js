const person = {
  name: 'angela'
}
//可以修改对象属性的值
person.name = 'yun'
// 修改绑定则会抛出语法错误
person = {
  'name': 'Shining'
}

console.log(typeof value)
if (true) {
  let value = 'blue'
}

var funcs = []
for (const i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i)
  })
}
funcs.forEach(function (func) {
  func()
})

var funcs = []
for (var i = 0; i < 10; i++) {
  funcs.push((function (value) {
    return function () {
      console.log(value)
    }
  })(i))

}
funcs.forEach(function (func) {
  func()
})


var funcs = [],
  obj = {
    a: true,
    b: true,
    c: true
  }
for (const key in obj) {
  funcs.push(function () {
    console.log(key)
  })
}
funcs.forEach(function (func) {
  func()
})
var RegExp='hello'
console.log(window.RegExp)
var ncz='Hi'
console.log(window.ncz)
var Array='this is my test'
console.log(window.Array)
var aaa=new Array(3)

let RegExp='hello'
console.log(window.RegExp)
let ncz='Hi'
console.log(window.ncz)
let Array='this is my test'
console.log(window.Array)
let aaa=new Array(3)
console.log(aaa)

let RegExp='hello'
console.log(RegExp) //hello
console.log(window.RegExp===RegExp)//false

const ncz='hi'
console.log(ncz)
console.log("ncz" in window)