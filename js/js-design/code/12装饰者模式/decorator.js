//装饰者
var decorator = function (input, fn) {
    //获取事件源 
    var input = document.getElementById(input)
    // 若事件源已经绑定事件
    if (typeof input.onclick === 'function') {
        //缓存事件源原有回调函数
        var oldClickFn = input.onclick
        //为事件源定义新的事件
        input.onclick = function () {
            oldClickFn()
            fn()
        }
    } else {
        input.onclick = fn
    }
}