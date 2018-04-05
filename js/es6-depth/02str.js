let txt = '𠮷'
console.log(txt.length)//2
console.log(/^.$/.test(txt))//false
console.log(txt.charAt(0))//未能返回合法字符串
console.log(txt.charAt(1))
console.log(txt.charCodeAt(0))//55362  --并不能正确的识别字符
console.log(txt.charCodeAt(1))//57271


let txt = '𠮷a'
console.log(txt.charCodeAt(0))//55362  --仅仅返回位置0处的第一个编码单元
console.log(txt.charCodeAt(1))//57271
console.log(txt.charCodeAt(2))//97

console.log(txt.codePointAt(0))//134071  --返回完整的码位，即使这个码位包含多个编码单元
console.log(txt.codePointAt(1))//57271
console.log(txt.codePointAt(2))//97

function is32Bit(c) {
  return c.codePointAt(0) > 0xFFFF
}
console.log(is32Bit('𠮷'))//true
console.log(is32Bit('a'))//false

console.log(String.fromCodePoint(134071))

let values = ["test", "demo", "compare", "sort"]
let normalized = values.map(function (txt) {
  return txt.normalize()
})
normalized.sort(function (first, second) {
  if (first < second) return -1
  else if (first === second) return 0
  else return 1
})

let values = ["test", "demo", "compare", "sort"]
values.sort(function (first, second) {
  // let firstNormalized = first.normalize(),
  //   secondNormalized = second.normalize();  //可以写成这种形式也可以写成如下这种形式
  let firstNormalized = first.normalize('NFC'),
    secondNormalized = second.normalize('NFC');
  if (firstNormalized < secondNormalized) return -1
  else if (firstNormalized === secondNormalized) return 0
  else return 1
})


let txt = '𠮷'
console.log(txt.length)//2
console.log(/^.$/.test(txt))//false
console.log(/^.$/u.test(txt))//true

"𠮷ab"
function codePointLength(txt) {
  let result = txt.match(/[\s\S]/gu)
  return result ? result.length : 0
}
console.log(codePointLength('abc'))//3
console.log(codePointLength('𠮷ab'))//3
console.log('𠮷ab'.length)//4

function hasRegExpU(params) {
  try {
    var pattern = new RegExp(".", "u")
    return true
  } catch (ex) {
    return false
  }
}


let msg = 'Hello world!'
console.log(msg.startsWith('Hello'))//true
console.log(msg.endsWith('!'))//true
console.log(msg.includes('o'))//true

console.log(msg.startsWith('o'))//false
console.log(msg.endsWith('world!'))//true
console.log(msg.includes('x'))//false

console.log(msg.startsWith('o', 4))//true--从字符串Hello中的o开始
console.log(msg.endsWith('o', 8))//true--字符串的位置是12减去8之后还余下4
console.log(msg.includes('o', 8))//false--从字符串world中的r开始匹配

let demo = 'this is test'
console.log(demo.indexOf(/test/))
console.log(demo.includes(/test/))


console.log('X'.repeat(5))//XXXXX

let text = 'hello1 hello2 hello3',
  pattern = /hello\d\s?/,
  result = pattern.exec(text),
  globalPattern = /hello\d\s?/g,
  glogbalResult = globalPattern.exec(text),
  stickyPattern = /hello\d\s?/y,
  stickyResult = stickyPattern.exec(text);

console.log(result[0])//hello1
console.log(glogbalResult[0])//hello1
console.log(stickyResult[0])//hello1
pattern.lastIndex = 1
globalPattern.lastIndex = 1
stickyPattern.lastIndex = 1
result = pattern.exec(text)
glogbalResult = globalPattern.exec(text)
stickyResult = stickyPattern.exec(text)
console.log(result[0])//hello1
console.log(glogbalResult[0])//hello2
console.log(stickyResult[0])//报错



let text = 'hello1 hello2 hello3',
  pattern = /hello\d\s?/,
  result = pattern.exec(text),
  globalPattern = /hello\d\s?/g,
  glogbalResult = globalPattern.exec(text),
  stickyPattern = /hello\d\s?/y,
  stickyResult = stickyPattern.exec(text);

console.log(result[0])//hello1
console.log(glogbalResult[0])//hello1
console.log(stickyResult[0])//hello1
console.log(pattern.lastIndex)//0
console.log(globalPattern.lastIndex)//7
console.log(stickyPattern.lastIndex)//7
result = pattern.exec(text)
glogbalResult = globalPattern.exec(text)
stickyResult = stickyPattern.exec(text)
console.log(result[0])//hello1
console.log(glogbalResult[0])//hello2
console.log(stickyResult[0])//hello2
console.log(pattern.lastIndex)//0
console.log(globalPattern.lastIndex)//14
console.log(stickyPattern.lastIndex)//14


let pattern = /hello\d/y
console.log(pattern.sticky)//true

var re1 = /ab/i,
  re2 = new RegExp(re1);
var re1 = /ab/i,
  re2 = new RegExp(re1, "g")
console.log(re1)//   /ab/i
console.log(re2)//   /ab/g
console.log(re1.test('ab'))//true
console.log(re2.test('ab'))//true
console.log(re1.test('AB'))//true
console.log(re2.test('AB'))//false

let re = /ab/g
console.log(re.source)// ab
console.log(re.flags)// g   --ES新增的属性

var message = 'Multiline\
string'
console.log(message)

let msg = `Multiline
string`
console.log(msg)
console.log(msg.length)
let message = `Multiline
             string`
console.log(message)
console.log(message.length)


let count = 10,
  price = 2.5,
  message = `${count} items cost $${(count * price).toFixed(2)}.`
//10 items cost $ 25.00.

let name = 'angela',
  message = `Hello,${`
    my name is ${name}`
    }`
console.log(message)

let msg1 = `Multiline\nstirng`,
  msg2 = String.raw`Multiline\nstring`
console.log(msg1)
console.log(msg2)
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()