/**
 * 多继承
 */
Object.prototype.mix = function () {
    var i = 0,
        len = arguments.length,
        arg;
    for (; i < len; i++) {
        arg = arguments[i];
        for (var property in arg) {
            this[property] = arg[property]
        }
    }
}