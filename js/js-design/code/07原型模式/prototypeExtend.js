//基于已经存在的模板对象霵克隆出新对象的模式--这里仅仅是浅复制，可根据需求自己实现深复制
function prototypeExtend() {
    var F = function () { },//缓存类，为实例化返回对象临时创建
        args = arguments,//模板对象参数序列
        i = 0,
        len = args.length;
    for (; i < len; i++) {
        //遍历每个模板对象中的属性
        for (var j in args[i]) {
            //将这些属性复制到缓存类原型中
            F.prototype[j] = args[i][j]
        }
    }
    return new F();
}