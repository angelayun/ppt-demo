var A = {
    common: {},
    client: {
        user: {
            userName: 'angelayun',
            uid: '123456'
        }
    },
    //服务器端数据
    server: {}
}
//同步变量迭代取值器
AGetter = function (key) {
    if (!A) return undefined;
    var result = A,
        key = key.split('.');
    for (var i = 0, len = key.length; i < len; i++) {
        if (result[key[i]] !== undefined) {
            result = result[key[i]]
        } else {
            return undefined
        }
    }
    return result
}

console.log(AGetter('client.user.userName'))



//同步变量迭代赋值器
ASetter = function (key, val) {
    if (!A) return undefined;
    var result = A,
        key = key.split('.');
    for (var i = 0, len = key.length; i < len; i++) {
        if (result[key[i]] === undefined) {
            result[key[i]] = {}
        }
        if (!(result[key[i]] instanceof Object)) {
            throw new Error('A.') + key.splice(0, i + 1).join('.') + ' is not object';
            return false
        }
        result = result[key[i]]
    }
    return result[key[i]] = val
}

// console.log(ASetter('client.module.news.sports','on'))
console.log(ASetter('client.user.userName.sports','on'))