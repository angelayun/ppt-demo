/**
 * 类式继承
 */
function SuperClass() {
    this.superValue = true
}
SuperClass.prototype.getSuperValue = function () {
    return this.superValue;
}
function SubClass() {
    this.subValue = false
}
//继承父类  子类的prototype被赋予父类实例
SubClass.prototype = new SuperClass()
SubClass.prototype.getSubValue = function () {
    return this.subValue;
}
//新创建的子类对象不仅仅可以访问父类原型上的属性和方法，同样也可访问从父类构造函数中复制的属性和方法 
var instance = new SubClass()
console.log(instance instanceof SuperClass)//true
console.log(instance instanceof SubClass)//true
console.log(SubClass instanceof SuperClass)//false
console.log(SubClass.prototype instanceof SuperClass)//true