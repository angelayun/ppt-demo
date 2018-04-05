var InputStrategy = function () {
    var strategy = {
        notNull: function (value) {
            return /\s+/.test(value) ? '请输入内容' : ''
        },
        number: function (value) {
            return /^[0-9]+(\.[0-9]+)?$/.test(value) ? '' : '请输入数字'
        },
        phone: function (value) {
            return /^\d{3}\-\d{8}$|^\d{4}\-\d{7}$/.test(value) ? '' : '请输入正确的电话号码格式，如010-12345678或0123-1234567'
        }
    }
    return {
        //验证接口type算法value表单值
        check: function (type, value) {
            value = value.replace(/^\s+|\s$/g, '')
            return strategy[type] ? strategy[type](value) : '没有该类型的检测方法'
        },
        addStrategy: function (type, fn) {
            strategy[type] = fn
        }
    }
}()



InputStrategy.addStrategy('nickName', function (value) {
    // \w 只匹配单词字符
    return /^[a-zA-Z]\w{3,7}/.test(value) ? '' : '请输入4-8位昵称'
})

console.log(InputStrategy.check('nickName', 'ada'))