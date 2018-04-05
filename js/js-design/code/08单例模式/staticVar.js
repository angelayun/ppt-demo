var Conf = (function () {
    //私有变量
    var conf = {
        MAX_NUM: 100,
        MIN_NUM: 1,
        COUNT: 1000
    }
    //返回取值器对象
    return {
        get(name) {
            return conf[name] || null
        }
    }
})()


//使用
var count=Conf.get('COUNT')