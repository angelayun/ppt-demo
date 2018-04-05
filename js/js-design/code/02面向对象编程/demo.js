/**
 * 创建一个类
 */
var Book = function (id, bookname, price) {
    this.id = id
    this.bookname = bookname
    this.price = price
}
Book.prototype.display = function () {
    console.log('display')
}
//调用如下
var book = new Book(10, 'JavaScript设计模式', '50')
console.log(book.bookname)
console.log(book.display())

/**
 * 属性和方法封装
 */
var Book = function (id, name, price) {
    //私有属性
    var num = 1;
    //私有方法
    function checkId(id) { }
    //特权方法
    this.getName = function () { }
    this.getPrice = function () { }
    this.setName = function () { }
    this.setPrice = function () { }
    //对象公有属性
    this.id = id;
    //对象的公有方法
    this.copy = function () { }
    //构造器
    this.setName(name)
    this.setPrice(price)
}
//类静态属性--对象不能访问
Book.isChinese = true
//类静态公有方法--对象不能方法
Book.resetTime = function () { }
Book.prototype = {
    //公有属性
    isJSBook: false,
    //公有方法
    display: function () { }
}



/**
 * 利用闭包实现
 */
var Book = (function () {
    //静态私有变量
    var bookNum = 0;
    //静态私有方法
    function checkBook(name) { }
    //返回构造函数
    return function (newId, newName, newPrice) {
        //私有属性
        var name, price;
        //私有方法
        function checkId(id) { }
        this.getName = function () { }
        this.getPrice = function () { }
        this.setName = function () { }
        this.setPrice = function () { }
        //对象公有属性
        this.id = id;
        //对象的公有方法
        this.copy = function () { }
        bookNum++
        if (bookNum > 100) throw new Error('我们仅出版100本书')
        //构造器
        this.setName(name)
        this.setPrice(price)
    }
})()
Book.prototype = {
    //静态公有属性
    isJSBook: false,
    //静态公有方法
    display: function () { }
}


/**
 * 把上面闭包形式整合成一个整体
 */
var Book = (function () {
    //静态私有变量
    var bookNum = 0;
    //静态私有方法
    function checkBook(name) { }
    //返回构造函数
    function _book(newId, newName, newPrice) {
        //私有属性
        var name, price;
        //私有方法
        function checkId(id) { }
        this.getName = function () { }
        this.getPrice = function () { }
        this.setName = function () { }
        this.setPrice = function () { }
        //对象公有属性
        this.id = id;
        //对象的公有方法
        this.copy = function () { }
        bookNum++
        if (bookNum > 100) throw new Error('我们仅出版100本书')
        //构造器
        this.setName(name)
        this.setPrice(price)
    }
    _book.prototype = {
        //静态公有属性
        isJSBook: false,
        //静态公有方法
        display: function () { }
    }
    return _book
})()