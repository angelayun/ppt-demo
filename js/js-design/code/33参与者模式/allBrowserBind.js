if (Function.prototype.bind === undefined) {
    Function.prototype.bind = function (context) {
        var slice = Array.prototype.slice,
            args = slice.call(arguments, 1),
            that = this;
        return function () {
            var addArgs = slice.call(arguments),
                allArgs = args.concat(addArgs);
            return that.apply(context, allArgs)
        }
    }
}