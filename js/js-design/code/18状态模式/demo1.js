var MarryState = function () {
    //内部状态私有变量
    var _currentState = {},
        //动作与状态方法映射
        states = {
            jump: function () {
                console.log('jump')
            },
            move: function () {
                console.log('move')
            },
            shoot: function () {
                console.log('shoot')
            },
            squat: function () {
                console.log('squat')
            }
        }
    //动作控制类
    var Action = {
        //改变状态方法
        changeState: function () {
            // 组合动作通过传递多个参数实现
            var arg = arguments
            // 重置内部状态
            _currentState = {}
            //如果有动作则添加动作
            if (arg.length) {
                //遍历动作
                for (var i = 0, len = arg.length; i < len; i++) {
                    //向内部状态中添加动作
                    _currentState[arg[i]] = true
                }
            }
            //返回动作控制类
            return this
        },
        goes: function () {
            console.log('触发一次动作')
            for (var i in _currentState) {
                states[i] && states[i]()
            }
            return this
        }
    }
    return {
        change: Action.changeState,
        goes: Action.goes
    }
}


MarryState().change('jump','shoot')
.goes()
.goes()
.change('shoot')
.goes()



//改变状态类的一个状态，就改变了状态对象的执行结构，看起来好像变了一个对象似的