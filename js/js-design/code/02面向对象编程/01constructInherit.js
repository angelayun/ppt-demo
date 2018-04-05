/**
 * 构造函数继承
 */
function SuperClass(id) {
    //引用类型公有属性
    this.books = ['JavaScript', 'html', 'css']
    //值类型公有属性
    this.id = id
}
SuperClass.prototype.showBooks = function () {
    console.log(this.books)
}
function SubClass(id) {
    //继承父类
    SuperClass.call(this, id)
}


var instance1 = new SubClass(10)
var instance2 = new SubClass(11)
instance1.books.push('设计模式')
console.log(instance1.showBooks())
console.log(instance2.showBooks())

//由于构造函数继承是没有涉及原型prototype的，所以父类的原型方法自然不会被子类继承