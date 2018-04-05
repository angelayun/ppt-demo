var ResultState = function () {
    //判断结果保存在内部状态中
    var States = {
        //每种状态作为一种独立方法保存
        states0: function () {
            console.log('这是第0种情况')
        },
        states1: function () {
            console.log('这是第1种情况')
        },
        states2: function () {
            console.log('这是第2种情况')
        },
        states3: function () {
            console.log('这是第3种情况')
        },
    }
    //获取某一种状态并执行其对应的方法
    function show(result) {
        States['states' + result] && States['states' + result]()
    }
    return {
        //返回调用内部状态方法接口
        show: show
    }
}