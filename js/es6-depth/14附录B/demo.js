let result = 5 ** 2
console.log(result) //25
console.log(result === Math.pow(5, 2)) //trueA

let result = 2 * 5 ** 2
console.log(result)//50

let result =-5** 2//语法错误
let result = -(5 ** 2)//可以这样包裹
let result = (-5) ** 2//也可以这样包裹

let values = [1, 2, 3]
console.log(values.includes(1))//true
console.log(values.includes(0))//false
console.log(values.includes(1, 2))//false


let values = [1, NaN, 2]
console.log(values.indexOf(NaN))//-1
console.log(values.includes(NaN))//true

let values = [1, +0, 2]
console.log(values.indexOf(-0))//-1
console.log(values.includes(-0))//false

function okay(first, second) {
  "use strict"
  return first
}
//这里抛出语法错误
function notOkay1(first, second = first) {
  "use strict"
  return first
}