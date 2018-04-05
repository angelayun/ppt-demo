/**
 * 原型式继承--借助原型prototype可以根据已有的对象创建一个新的对象
 */
function inheritObject(o) {
    //声明一个过渡函数对象
    function F() { }
    // 过渡对象的原型继承父对象
    F.prototype = o;
    // 返回过渡对象的一个实例，该实例的原型继承了父对象
    return new F()
}
//其实就是类式继承的一种封装，依旧存在着引用类型的属性被公用的问题

/**
 * 寄生组合式继承
 */
function inheritPrototype(subClass, superClass) {
    //复制一份父类的原型副本保存在变量中
    var p = inheritObject(superClass.prototype)
    // 修正因重写子类原型导致子类的constructor属性被修改
    p.constructor = subClass;
    // 设置子类的原型
    subClass.prototype = p;
}

//下面是测试用例
function SuperClass(name) {
    this.name = name
    this.corlors = ['red', 'blue', 'green']
}
SuperClass.prototype.getName = function () {
    console.log(this.name)
}
function SubClass(name, time) {
    //构造函数式继承父类name属性
    SuperClass.call(this, name)
    this.time = time
}
//寄生式继承父类原型
inheritPrototype(SubClass, SuperClass)
SubClass.prototype.getTime = function () {
    console.log(this.time)
}


//调用 
var instance1 = new SubClass('js book', 2014)
var instance2 = new SubClass('css book', 2013)
instance1.corlors.push('black')
console.log(instance1.corlors)
console.log(instance2.corlors)