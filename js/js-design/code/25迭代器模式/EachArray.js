var eachArray = function (arr, fn) {
    var i = 0, len = arr.length;
    for (; i < len; i++) {
        //回调中第一项为索引  第二项为值
        if (fn.call(arr[i], i, arr[i]) === false)
            break
    }
}
//测试
for (var arr = [], i = 0; i < 5; arr[i++] = i);
eachArray(arr, function (i, d) {
    console.log(i, d)
})



var eachObject = function (obj, fn) {
    for (var i in obj) {
        if (fn.call(obj[i], i, obj[i]) === false)
            break
    }
}

//测试
var obj = {
    a: 23,
    b: 45,
    c: 67
}
eachObject(obj, function (i, d) {
    console.log(i, d)
})