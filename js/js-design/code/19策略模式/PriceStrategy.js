//价格策略对象
var PriceStrategy = function () {
    //内部算法对象
    var strategy = {
        //100返30
        return30: function (price) {
            return +price + parseInt(price / 100) * 30
        },
        //100返50
        return50: function (price) {
            return +price + parseInt(price / 100) * 50
        },
        //9折
        percent90: function (price) {//JS在处理小数乘除法有bug，故运算前转化为整数
            return price * 100 * 90 / 10000;
        },
        //8折
        percent90: function (price) {
            return price * 100 * 80 / 10000;
        },
        //5折
        percent90: function (price) {
            return price * 100 * 50 / 10000;
        }
    }
    return function (algorithm, price) {
        return strategy[algorithm] && strategy[algorithm](price)
    }
}()


var price = PriceStrategy('return50', '314.67')
console.log(price)