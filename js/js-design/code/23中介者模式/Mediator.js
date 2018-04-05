var Mediator = function () {
    var _msg = {};
    return {
        register: function (type, action) {
            if (_msg[type])
                _msg[type].push(action)
            else {
                _msg[type] = [action]
            }
        },
        send: function (type) {
            if (_msg[type]) {
                for (var i = 0, len = _msg[type].length; i < len; i++) {
                    _msg[type][i] && _msg[type][i]()
                }
            }
        }
    }
}()


Mediator.register('demo',function(){
    console.log('first')
})
Mediator.register('demo',function(){
    console.log('second')
})
Mediator.send('demo')