var { type, name };
let { type, name }
const { type, name }


let node = {
  type: 'Identifier',
  name: 'angela'
}
let { type, name } = node


let node = {
  type: 'Identifier',
  name: 'angela'
},
  type = 'demo',
  name = 1;
({ type, name } = node)



let node = {
  type: 'Identifier',
  name: 'angela'
},
  type = 'demo',
  name = 1;
function outputInfo(value) {
  console.log(value === node)
}
outputInfo({ type, name } = node)//true


let node = {
  type: 'Identifier',
  name: 'angela'
}
let { type, name, value = true } = node


let node = {
  type: 'Identifier'
}
let { type: localType, name: localName = "angela" } = node
console.log(localType)//Identifier
console.log(localName)//angela

let { loc: { } } = node


let colors = ['red', 'green', 'blue']
let [, , thirdColor] = colors

let colors = ['red', 'green', 'blue'],
  firstColor = 'black',
  secondColor = 'purple';
[firstColor, secondColor] = colors

let a = 1,
  b = 2;
[a, b] = [b, a]


let colors = ['red', 'green', 'blue'];
let [firstColor, ...restColors] = colors

let colors = ['red', 'green', 'blue'];
let cloneColors = colors.concat() //["red", "green", "blue"]

let colors = ['red', 'green', 'blue'];
let [...cloneColors] = colors //["red", "green", "blue"]

function setCookie(name, value, { secure, path, domain, expires }) {

}
setCookie("type", "js", { secure: true, expires: 6000 })

const setCookieDefaults = {
  secure: false,
  path: "/",
  domain: "example.com",
  expires: new Date(Date.now() + 360000000)

}
function setCookie(name, value,
  { secure = setCookieDefaults.secure,
    path = setCookieDefaults.path,
    domain = setCookieDefaults.domain,
    expires = setCookieDefaults.expires }) {
}
setCookie("type", "js")