/**
 * 组合式继承
 */
function SuperClass(id) {
    //引用类型公有属性
    this.books = ['JavaScript', 'html', 'css']
    //值类型公有属性
    this.id = id
}
SuperClass.prototype.getName = function () {
    console.log(this.name)
}
function SubClass(name, time) {
    //构造函数式继承父类name属性
    SuperClass.call(this, name)
    this.time = time
}
//类式继承 子类原型继承父类
SubClass.prototype = new SuperClass()
SubClass.prototype.getTime = function () {
    console.log(this.time)
}
//不足之处：在使用构造函数继承时执行了一遍父类的构造函数，而在实现子类原型的链式继承时又调用了一遍父类构造函数，因为父类构造函数被调用了两遍