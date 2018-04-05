var Iterator = function (items, container) {
    var container = container && document.getElementById(container) || document,
        items = container.getElementsByTagName(items),
        length = items.length,
        index = 0;
    var splice = [].splice;
    return {
        first: function () {
            index = 0
            return items[index]
        },
        second: function () {
            index = length - 1
            return items[index]
        },
        pre: function () {
            if (--index > 0)
                return items[index]
            else {
                index = 0
                return null
            }
        },
        next: function () {
            if (++index < length) {
                return items[index]
            } else {
                index = length - 1
                return null
            }
        },
        get: function (num) {
            index = num >= 0 ? num % length : num % length + length
            return items[index]
        },
        dealEach: function (fn) {
            var args = splice.call(arguments, 1)
            for (var i = 0; i < length; i++) {
                fn.apply(items[i], args)
            }
        },
        dealItem: function (num, fn) {
            //对元素执行回调函数  第三个参数开始为回调函数中参数
            fn.apply(this.get(num), splice.call(arguments, 2))
        },
        exclusive: function (num, allFn, numFn) {
            //对所有元素执行回调函数
            this.dealEach(allFn)
            //如果num类型为数组则分别处理数组中每一个元素
            if (Object.prototype.toString.call(num) === '[object Array]') {
                for (var i = 0, len = num.length; i < len; i++) {
                    this.dealItem(num[i], numFn)
                }
            } else {
                this.dealItem(num, numFn)
            }
        }
    }
}


var demo = new Iterator('li', 'container')
console.log(demo.first())
console.log(demo.pre())
console.log(demo.next())
console.log(demo.get(2000))
demo.dealEach(function (text, color) {
    this.innerHTML = text;
    this.style.background = color
}, 'test', 'pink')

demo.exclusive([2, 3], function () {
    this.innerHTML = '被排除的'
    this.style.background = 'green'
}, function () {
    this.innerHTML = '选中的'
    this.style.background = 'red'
})