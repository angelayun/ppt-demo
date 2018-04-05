function createIterator(items) {
  var i = 0
  return {
    next: function () {
      var done = i >= items.length
      var value = !done ? items[i++] : undefined
      return {
        done: done,
        value: value
      }
    }
  }
}
var iterator = createIterator([1, 2, 3])
console.log(iterator.next())


function* createIterator() {
  yield 1
  yield 2
  yield 3
}
let iterator = createIterator()
console.log(iterator.next())




function* createIterator(items) {
  for (let i = 0; i < items.length; i++) {
    yield items[i]
  }
}
let iterator = createIterator([1, 2, 3])
console.log(iterator.next())


function* createIterator(items) {
  items.forEach(function (element) {
    yield itemsm + 1
  });
}
let iterator = createIterator([1, 2, 3])
console.log(iterator.next())


let values = [1, 2, 3]
let iterator = values[Symbol.iterator]()
console.log(iterator.next())

function isIterable(obj) {
  return typeof obj[Symbol.iterator] === "function"
}
console.log(isIterable([1, 2, 3]))


let collection = {
  items: [],
  *[Symbol.iterator]() {
    for (let item of this.items) {
      yield item
    }
  }
}
collection.items.push(1)
collection.items.push(2)
collection.items.push(3)

for (let x of collection) {
  console.log(x)
}

let tracking = new Set([123, 456, 789])
//与调用tracking.values方法相同
for (let num of tracking) {
  console.log(num)
}

let divs = document.getElementsByTagName('div')
for (let div of divs) {
  console.log(div)
}

let one = [1, 2, 3]
let two = [100, 101, 102]
let all = [0, ...one, ...two]
console.log(all)//[0, 1, 2, 3, 100, 101, 102]


function* createIterator() {
  let first = yield 1
  let second = yield first + 2//4+2
  yield second + 3//5+3
}
let iterator = createIterator()
console.log(iterator.next())
console.log(iterator.next(4))
console.log(iterator.next(5))
console.log(iterator.next())


function* createIterator() {
  let first = yield 1
  let second
  try {
    second = yield first + 2
  } catch (error) {
    second = 6
  }
  yield second + 3
}
let iterator = createIterator()
console.log(iterator.next())//{value: 1, done: false}
console.log(iterator.next(4)) //{value: 6, done: false}
console.log(iterator.throw(new Error('Boom')))//{value: 9, done: false}
console.log(iterator.next())//{value: undefined, done: true}


function* createIterator() {
  yield 1
  return;
  yield 2
  yield 3
}
let iterator = createIterator()
console.log(iterator.next())//{value: 1, done: false}
console.log(iterator.next())//{value: undefined, done: true}


function* createIterator() {
  yield 1
  return 42
}
let iterator = createIterator()
console.log(iterator.next())//{value: 1, done: false}
console.log(iterator.next())//{value: 42, done: true}
console.log(iterator.next())//{value: undefined, done: true}

function run(taskDef) {
  let task = taskDef()
  let result = task.next()
  function step() {
    if (!result.done) {
      result = task.next(result.value)
      step()
    }
  }
  step()
}
run(function* () {
  let value = yield 1
  console.log(value)
  value = yield value + 3
  console.log(value)
})





function run(taskDef) {
  //创建一个无使用限制的迭代器
  let task = taskDef()
  // 开始执行任务
  let result = task.next()
  // 循环调用next函数
  function step() {
    // 如果任务未完成则继续执行
    if (!result.done) {
      if (typeof result.value === 'function') {
        result.value(function (err, data) {
          if (err) {
            result = task.throw(err)
            return;
          }
          result = task.next(data)
          step()
        })
      } else {
        result = task.next(result.value)
        step()
      }
    }
  }
  // 开始执行迭代任务
  step()
}

let fs = require('fs')
function readFile(fileName) {
  return function (callback) {
    fs.readFile(fileName, callback)
  }
}
run(function* () {
  let contents = yield readFile('config.json')
  doSomethingWith(contents)
  console.log('hello')
})