var BaseLocalStorage = function (preId, timeSign) {
    //定义本地存储数据库前缀
    this.preId = preId
    //定义时间戳与存储数据之间的拼接符
    this.timeSign = timeSign || '|-|'
}

BaseLocalStorage.prototype = {
    //操作状态
    status: {
        SUCCESS: 0,
        FAILURE: 1,
        OVERFLOW: 2,
        TIMEOUT: 2
    },
    storage: localStorage || window.localStorage,
    //获取本地存储数据库数据真实字段
    getKey: function (key) {
        return this.preId + key;
    },
    //添加（修改）数据
    set: function (key, value, callback, time) {
        var status = this.status.SUCCESS,
            key = this.getKey(key);
        try {
            time = new Date(time).getTime() || time.getTime();
        } catch (e) {
            time = new Date().getTime() + 1000 * 60 * 60 * 24 * 31
        }
        try {
            this.storage.setItem(key, time + this.timeSign + value)
        } catch (e) {
            status = this.status.OVERFLOW
        }
        callback && callback.call(this, status, key, value)
    },
    get: function (key, callback) {
        var status = this.status.SUCCESS,
            key = this.getKey(key),
            value = null,
            //时间戳与存储数据之间的拼接符长度
            timeSignLen = this.timeSign.length,
            that = this,
            index,
            time,
            result;
        try {
            value = that.storage.getItem(key)
        } catch (e) {
            result = {
                status: that.status.FAILURE,
                value: null
            }
            callback && callback.call(this, result.status, result.value)
        }
        if (value) {
            index = value.indexOf(that.timeSign);
            time = +value.slice(0, index);
            //如果时间过期
            if (new Date(time).getTime() > new Date().getTime() || time == 0) {
                value = value.slice(index + timeSignLen)
            } else {
                value = null
                status = that.status.TIMEOUT
                that.remove(key)
            }
        } else {
            status = that.status.FAILURE
        }
        result = {
            status: status,
            value: value
        }
        callback && callback.call(this, result.status, result.value)
        return result
    },
    remove: function (key, callback) {
        var status = this.status.FAILURE,
            key = this.getKey(key),
            value = null;
        try {
            value = this.storage.getItem(key);
        } catch (e) { }
        if (value) {
            try {
                this.storage.removeItem(key);
                status = this.status.SUCCESS
            } catch (e) { }
        }
        callback && callback.call(this, status, status > 0 ? null : value.slice(value.indexOf(this.timeSign) + this.timeSign.length))
    }
}



var ls = new BaseLocalStorage('LS_')
ls.set('a','xiao ming',function(){console.log(arguments)})
ls.get('a',function(){console.log(arguments)})