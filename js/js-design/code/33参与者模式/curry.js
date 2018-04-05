function curry(fn) {
    var slice = [].slice
    //第二个参数开始截取
    var args = slice.call(arguments, 1)
    return function () {
        debugger
        //将参数（类数组）转化成数组
        var addArgs = slice.call(arguments),
            allArgs = args.concat(addArgs);
        return fn.apply(null, allArgs)
    }
}

function add(num1, num2) {
    return num1 + num2
}
var add5 = curry(add, 5)
console.log(add5(7))