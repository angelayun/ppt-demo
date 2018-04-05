function bind(fn, context) {
    return function () {
        return fn.apply(context, arguments)
    }
}

// var demoObj={
//     title:'这是一个测试例子'
// }
// function demoFn(){
//     console.log(this.title)
// }
// var bindFn=bind(demoFn,demoObj)
// bindFn()
// demoFn()


var btn = document.getElementsByTagName('button')[0]
function demoFn() {
    console.log(arguments, this)
}
var bindFn = bind(demoFn, btn)
// var bindFn = bind(demoFn)
btn.addEventListener('click', bindFn)