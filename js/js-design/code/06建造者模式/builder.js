//创建一位人类
var Human = function (param) {
    this.skill = param && param.skill || '保密'
    this.hobby = param && param.hobby || '保密'
}
//人类原型方法
Human.prototype = {
    getSkill: function () {
        return this.skill
    },
    getHobby: function () {
        return this.hobby
    }
}
// 实例化姓名类
var Named = function (name) {
    var that = this;
    (function (name, that) {
        that.wholeName = name;
        if (name.indexOf(' ') > -1) {
            that.firstName = name.slice(0, name.indexOf(' '))
            that.secondName = name.slice(name.indexOf(' '))
        }
    })(name, that)
}
var Work = function (work) {
    var that = this;
    (function (work, that) {
        switch (work) {
            case 'code':
                that.work = '工程师'
                that.workDesc = '每天沉醉于编程'
                break;
            case 'UI':
            case 'UE':
                that.work = '设计师'
                that.workDesc = '设计更似一种艺术'
                break;
            case 'tech':
                that.work = '教师'
                that.workDesc = '分享也是一种快乐'
                break;
            default:
                that.work = work
                that.workDesc = '对不起，我们还不清楚您所选择职位的相关描述'
                break;
        }
    })(work, that)
}
//更换期望的职位
Work.prototype.changeWork = function (work) {
    this.work = work
}
//添加职位的描述
Work.prototype.changeDesc = function (sentence) {
    this.workDesc = sentence
}




//应聘建造者
var Person = function (name, work) {
    //创建应聘者缓存对象
    var _person = new Human()
    //创建应聘者姓名解析对象
    _person.name = new Named(name);
    //创建应聘者期望职位
    _person.work = new Work(work)
    return _person
}

//使用
var person = new Person('xiao ming', 'code')
console.log(person.name.firstName)
console.log(person.work.workDesc)
person.work.changeDesc('看一下我更改后的职位描述')
console.log(person.work.workDesc)


//总结：建造者模式中我们关心的是对象创建过程，通常将创建对象的类模块化，这样被创建的类的每一个模块都可以得到灵活的运用和高质量的复用
// 对于整体对象类的拆分无形中增加了结构的复杂性，因为如果对象粒度很小，或者模块间的复用率很低并且变动不大，最好还是要创建整体对象