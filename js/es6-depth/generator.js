function* g() {
  yield 1;
  console.log('throwing an exception')
  throw new Error('generator broke!')
  yield 2
  yield 3
}
function log(generator) {
  var v
  console.log('starting generator');
  try {
    v = generator.next()
    console.log('第一次运行next方法', v)
  } catch (err) {
    console.log('捕猎错误', err)
  }

  try {
    v = generator.next()
    console.log('第二次运行next方法', v)
  } catch (err) {
    console.log('捕猎错误', err)
  }

  try {
    v = generator.next()
    console.log('第三次运行next方法', v)
  } catch (err) {
    console.log('捕猎错误', err)
  }
}



var g = function* () {
  while (true) {
    try {
      yield
    } catch (e) {
      console.log(e)
      if (e != 'a') throw e
      console.log('内部捕获', e)
    }
  }
}
var i = g()
i.next();
try {
  throw new Error('a')
  throw new Error('b')
} catch (e) {
  console.log('外部捕获', e)
}