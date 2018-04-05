//惰性执行
var A = {
    on: function (dom, type, fn) {
        //内部对元素dom执行能力检测
        if (dom.addEventListener) {
            A.on = function (dom, type, fn) {
                dom.addEventListener(type, fn, false)
            }
        } else if (dom.attachEvent) {
            A.on = function (dom, type, fn) {
                dom.attachEvent('on' + type, fn)
            }
        } else {
            A.on = function (dom, type, fn) {
                dom['on' + type] = fn
            }
        }
        //原始函数在函数最末尾重新执行一遍来绑定事件
        A.on(dom, type, fn)
    }
}
//在文件加载后A.on方法还没能重新被定义，需等到某一元素绑定事件时，A.on才能被重定义
A.on(document.body,'click',function(){
    console.log('111')
})