var A = function (selector, context) {
    return new A.fn.init(selector, context)
}
A.fn = A.prototype = {
    constructor: A,
    length: 2,
    init: function (selector, context) {
        this.length = 0,
            context = context || document;
        //如果是id选择符，按位非将-1转化为0，转化为布尔值false   --这样写比简便多了
        if (~selector.indexOf('#')) {
            this[0] = document.getElementById(selector.slice(1))
            this.length = 1
        } else {
            var doms = context.getElementsByTagName(selector),
                i = 0,
                len = doms.length;
            for (; i < len; i++) {
                this[i] = doms[i]
            }
            this.length = len

        }
        this.context = context
        this.selector = selector
        return this;
    },
    size: function () {
        return this.length;
    },
    //原来加了下面这三个方法在控制台输出的就是数据类型的
    push: [].push,
    sort: [].sort,
    splice: [].splice
}
A.extend = A.fn.extend = function () {
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
A.fn.init.prototype = A.fn



var extendDemo = A.extend({ first: 1 }, { second: 2 }, { third: 3 })
console.log(extendDemo)
A.extend(A.fn,{version:'1.0'})
console.log(A('demo').version)
A.fn.extend({getVersion:function(){return this.version}})
console.log(A('demo').getVersion())
// var a = new A()
// console.log(a.size())
var demo = A('demo')
console.log(demo)
console.log(A('demo').size())
var news = A('li')
console.log(news)
console.log(demo)
console.log(A('news').length)
// A
// console.log(A.size())
//A函数中返回对象  解决了报错的问题
// console.log(A().size())