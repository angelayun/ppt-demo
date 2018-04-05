var Waiter = function () {
    //等待对象容器
    var dfd = [],
        //成功回调方法容器
        doneArr = [],
        //失败回调方法容器
        failArr = [],
        slice = Array.prototype.slice,
        that = this;
    //监控对象类
    var Primise = function () {
        //监控对象解决成功/失败状态
        this.resolved = false;
        this.rejected = false;
    }
    Primise.prototype = {
        //解决成功
        resolve: function () {
            //设置当前监控对象解决成功
            this.resolved = true
            //如果没有监控对象则取消执行
            if (!dfd.length) return;
            for (var i = dfd.length - 1; i >= 0; i--) {
                //如果有任意一个监控对象没有被解决或者解决失败则返回
                if (dfd[i] && !dfd[i].resolved || dfd.rejected)
                    return;
                //清除监控对象
                dfd.splice(i, 1);
            }
            //执行解决成功回调方法
            _exec(doneArr)
        },
        //解决失败
        reject: function () {
            this.rejected = true
            if (!dfd.length) return;
            //清除所有监控对象
            dfd.splice(0)
            //执行解决失败回调方法
            _exec(failArr)
        }
    }
    //创建监控对象
    that.Deferred = function () {
        return new Primise()
    }
    //回调执行方法
    function _exec(arr) {
        var i=0,
        len=arr.length;
        for(;i<len;i++){
            try{
                arr[i]&&arr[i]()
            }catch
        }
     }
    //监控异步方法  参数  监控对象
    that.when = function () { }
    //解决成功回调函数添加方法
    that.done = function () { }
    //解决失败回调函数添加方法
    that.fail = function () { }
}