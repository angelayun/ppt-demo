//重写bind函数
function bind(fn, context) {
    var slice = Array.prototype.slice,
        //从第三个参数开始截取参数
        args = slice.call(arguments, 2);
    return function () {
        var addArgs = slice.call(arguments),
            allArgs = args.contact(addArgs);
        return fn.apply(context, allArgs)
    }
}