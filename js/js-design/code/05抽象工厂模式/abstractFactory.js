//(备注:该模式创建出来的结果不是一个真实的对象实例，而是一个类簇，它制定的类的结构)
//抽象工厂方法
var VehicleFactory = function (subType, superType) {
    //判断抽象工厂中是否有该抽象类
    if (typeof VehicleFactory[superType] === 'function') {
        //缓存类
        function F() { }
        //继承父类属性和方法
        F.prototype = new VehicleFactory[superType]()
        //将子类contrunctor指向子类
        subType.constructor = subType
        //子类原型继承“父类”实例
        subType.prototype = new F()
    } else {
        throw new Error('未创建该抽象类')
    }
}

//小汽车抽象类
VehicleFactory.Car = function () {
    this.type = 'car'
}
VehicleFactory.Car.prototype = {
    getPrice: function () {
        return new Error('抽象方法不能被调用')
    },
    getSpeed: function () {
        return new Error('抽象方法不能被调用')
    }
}

//公交车抽象类
VehicleFactory.Bus = function () {
    this.type = 'bus'
}
VehicleFactory.Bus.prototype = {
    getPrice: function () {
        return new Error('抽象方法不能被调用')
    },
    getSpeed: function () {
        return new Error('抽象方法不能被调用')
    }
}

//货车抽象类
VehicleFactory.Truck = function () {
    this.type = 'truck'
}
VehicleFactory.Truck.prototype = {
    getPrice: function () {
        return new Error('抽象方法不能被调用')
    },
    getSpeed: function () {
        return new Error('抽象方法不能被调用')
    }
}


//抽象与实现
//宝马汽车子类
var BMW = function (price, speed) {
    this.price = price
    this.speed = speed
}
//抽象工厂实现对Car抽象类的继承
VehicleFactory(BMW,'Car')
BMW.prototype.getPrice = function () {
    return this.price
}
BMW.prototype.getSpeed = function () {
    return this.speed
}
//兰博基尼汽车子类
var Lamborghini = function (price, speed) {
    this.price = price
    this.speed = speed
}
VehicleFactory(Lamborghini,'Car')
//抽象工厂实现对Car抽象类的继承
Lamborghini.prototype.getPrice = function () {
    return this.price
}
Lamborghini.prototype.getSpeed = function () {
    return this.speed
}


//测试用例
var bmw=new BMW(100000,1000)
console.log(bmw.getPrice())
console.log(bmw.type)