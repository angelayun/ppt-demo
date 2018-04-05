//这个辅助函数  先暂时这样
function extend() {
    var i = 1,
        len = arguments.length,
        target = arguments[0],
        j;
    if (i == len) {
        target = this;
        i--;
    }
    for (; i < len; i++) {
        for (j in arguments[i]) {
            target[j] = arguments[i][j]
        }
    }
    return target
}

var throttle = function () {
    //获取第一个参数
    var isClear = arguments[0], fn, params;
    //如果第一个参数是boolean类型那第一个参数则表示是否清除计时器
    if (typeof isClear === 'boolean') {
        fn = arguments[1]
        //函数的计时器句柄存在则清除
        fn._throttleID && clearTimeout(fn._throttleID)
    } else {
        debugger
        //第一个参数为函数
        fn = isClear;
        //第二个参数为执行时的函数
        params = arguments[1];
        var p = extend({
            context: null,//执行函数执行时的作用域
            args: [],//执行函数执行时的相关参数
            time: 300//执行函数延迟执行的时间
        }, params)
        //清除执行函数计时器句柄
        arguments.callee(true, fn)
        fn._throttleID = setTimeout(function () {
            fn.apply(p.context, p.args)
        }, p.time);
    }
}