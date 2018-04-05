function sum(num1, num2) {
  return num1 + num2
}
//export default sum
export { sum as default }

export let color = 'red'
export default function (num1, num2) {
  return num1 + num2
}


import sum,{color} from './example.js'

export {sum as add } from './example.js'