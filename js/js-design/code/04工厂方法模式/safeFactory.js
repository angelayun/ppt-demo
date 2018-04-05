//通过工厂方法模式可以创建多个类的实例，这样工厂方法对象在创建对象的方式也避免了使用者与对象类之间的耦合，用户不用关心创建该对象的具体类，只需调用工厂方法即可
//安全模式创建的工厂类
var Factory = function (type, content) {
    if (this instanceof Factory) {
        return new this[type](content)
    } else {
        return new Factory(type, content)
    }
}
// 工厂原型中设置创建所有类型数据对象的基类
Factory.prototype = {
    Java: function (content) { },
    JavaScript: function (content) { },
    UI: function (content) {
        this.content = content;
        (function (content) {
            var div = document.createElement('div');
            div.innerHTML = content;
            div.style.border = '1px solid red'
            document.getElementById('container').appendChild(div)
        })(content);
    },
    Php: function (content) { }
}


//下面是使用
var data = [
    { type: 'JavaScript', content: 'JavaScript哪家强' },
    { type: 'Java', content: 'Java哪家强' },
    { type: 'UI', content: 'UI哪家强' },
    { type: 'Php', content: 'Php哪家强' },
]
for (var i = 3; i >= 0; i--) {
    Factory(s[i].type, s[i].content)
}