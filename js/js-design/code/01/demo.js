function checkName() { }
function checkEmail() { }
function checkPassword() { }

//函数的另一种形式
var checkName = function () { }
var checkEmail = function () { }
var checkPassword = function () { }

//用对象收编变量
var CheckObject = {
    checkName: function () { },
    checkEmail: function () { },
    checkPassword: function () { }
}
//对象的另一种形式
var CheckObject = function () { }
CheckObject.checkName = function () { }
CheckObject.checkEmail = function () { }
CheckObject.checkPassword = function () { }
//上面这种方式new CheckObject 出来的对象访问不到checkName等方法

//改进之后的写法是
var CheckObject = function () {
    return {
        checkName: function () { },
        checkEmail: function () { },
        checkPassword: function () { }
    }
}
// 上面这样应该如下使用
var a = CheckObject()
a.checkEmail()


//如果想要每次都返回一个新对象，也可以写成如下所示：
var CheckObject = function () {
    this.checkName = function () { }
    this.checkEmail = function () { }
    this.checkPassword = function () { }
}
//不过  使用的时候就应该这样写了
var a = new CheckObject();
a.checkEmail()

//上面的方式新创建的对象每次都需要对类的this上的属性进行复制
var CheckObject = function () { }
CheckObject.prototype.checkName = function () { }
CheckObject.prototype.checkEmail = function () { }
CheckObject.prototype.checkPassword = function () { }
//简化一点的方式可以如下：  其实下面这种方法与前面方法并不等价，因为它会覆盖掉之前对prototype对象赋值的方法
var CheckObject = function () { }
CheckObject.prototype = {
    checkName: function () { },
    checkEmail: function () { },
    checkPassword: function () { }
}
//调用如下
var a = new CheckObject()
a.checkName()
a.checkEmail()
a.checkPassword()

//如果是方便链式调用的话，上面的方式可以这样
var CheckObject = function () { }
CheckObject.prototype = {
    checkName: function () { return this },
    checkEmail: function () { return this },
    checkPassword: function () { return this }
}
//所以调用就可以这样了
var a = new CheckObject()
a.checkName().checkEmail().checkPassword()

//当然我们可以直接在函数原型链上添加方法
Function.prototype.checkEmail = function () { }
//使用的时候可以有如下两种方式
//第一种 
var f = function () { }
f.checkEmail()
//第二种
var f = new Function()
f.checkEmail()

//把 Function.prototype.checkEmail  这种方式抽象出来
Function.prototype.addMethod = function (name, fn) {
    this[name] = fn
    //如果这里返回this  就可以链式调用  
    return this
}
var methods = new Function();
methods.addMethod('checkName', function () { })
//链式调用如下
methods.addMethod('checkEmail', function () {
    //这里的return this 是方便调用可以链式
    return this
}).addMethod('checkPassword', function () {
    return this
})
methods.checkName()
methods.checkEmail().checkPassword()

//换一种方式使用方法
Function.prototype.addMethod = function (name, fn) {
    this.prototype[name] = fn
    return this
}
var methods = function () { }
methods.addMethod('checkName', function () {
    return this
}).addMethod('checkEmail', function () {
    return this;
})
//使用的时候需要new才能使用
var m = new methods()
m.checkEmail()
