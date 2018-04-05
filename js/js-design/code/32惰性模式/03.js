//跟01.js原理一样
//加载时不损失性能，但是第一次调用时损失性能
function createXHR() {
    if (typeof XMLHttpRequest !== 'undefinded') {
        createXHR = function () {
            return new XMLHttpRequest()
        }
    } else if (typeof ActiveXObject != 'undefined') {
        createXHR = function () { }
    } else {
        createXHR = function () {
            throw new Error('no xhr object available')
        }
    }
    return createXHR()
}