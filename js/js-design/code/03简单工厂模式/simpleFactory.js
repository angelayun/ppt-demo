
var BasketBall = function () {
    this.intro = '篮球盛行于美国'
}
BasketBall.prototype = {
    getMember: function () {
        console.log('每个队伍需要5名队员')
    },
    getBallSize: function () {
        console.log('篮球很大')
    }
}


var FootBall = function () {
    this.intro = '足球在世界范围内很流行'
}
FootBall.prototype = {
    getMember: function () {
        console.log('每个队伍需要11名队员')
    },
    getBallSize: function () {
        console.log('足球很大')
    }
}

var Tennis = function () {
    this.intro = '每年有很多网球系列赛'
}
Tennis.prototype = {
    getMember: function () {
        console.log('每个队伍需要1名队员')
    },
    getBallSize: function () {
        console.log('网球很小')
    }
}


//其它人不需要关注创建这些对象到底依赖于哪个基类，只需要知道这个函数--这个函数被称为工厂函数，这个模式被叫做简单工厂模式
var SportFactory = function (name) {
    //@1通过类实例化对象创建---通过类创建的对象，如果这些类继承同一个父类，那么他们的父类原型上的方法是可以公用的
    switch (name) {
        case 'NBA':
            return new BasketBall();
        case 'wordCup':
            return new FootBall();
        case 'FrenchOpen':
            return new Tennis();
    }
}