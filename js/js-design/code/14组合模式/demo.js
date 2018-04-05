//在虚拟类的构造函数中定义两个特权变量时因为后面所有的继承子类都要声明这两个变量，为了简化子类我们也可以将这些公有的变量提前声明在父类中
var News = function () {
    //子组件容器
    this.children = []
    //当前组件元素
    this.element = null
}
News.prototype = {
    init: function () {
        throw new Error('请重写你的方法')
    },
    add: function () {
        throw new Error('请重写你的方法')
    },
    getElement: function () {
        throw new Error('请重写你的方法')
    }
}

var Container = function (id, parent) {
    News.call(this)
    this.id = id
    this.parent = parent
    this.init()
}
inheritPrototype(Container, News)
Container.prototype.init = function () {
    this.element = document.createElement('ul')
    this.element.id = this.id
    this.element.className = 'new-container'
}
Container.prototype.add = function (child) {
    this.children.push(child)
    this.element.appendChild(child.getElement())
    return this
}
Container.prototype.getElement = function () {
    return this.element
}
Container.prototype.show = function () {
    debugger
    this.parent.appendChild(this.element)
}


var Item = function (className) {
    News.call(this)
    this.className = className || ''
    this.init()
}
inheritPrototype(Item, News)
Item.prototype.init = function () {
    this.element = document.createElement('li')
    this.element.className = this.className
}
Item.prototype.add = function (child) {
    this.children.push(child)
    this.element.appendChild(child.getElement())
    return this
}
Item.prototype.getElement = function () {
    return this.element
}


var NewsGroup = function (className) {
    News.call(this)
    this.className = className || ''
    this.init()
}
inheritPrototype(NewsGroup, News)
NewsGroup.prototype.init = function () {
    this.element = document.createElement('div')
    this.element.className = this.className
}
NewsGroup.prototype.add = function (child) {
    this.children.push(child)
    this.element.appendChild(child.getElement())
    return this
}
NewsGroup.prototype.getElement = function () {
    return this.element
}


var ImageNews = function (url, href, className) {
    News.call(this)
    this.url = url || ''
    this.href = href || '#'
    this.className = className || 'normal'
    this.init()
}
inheritPrototype(ImageNews, News)
ImageNews.prototype.init = function () {
    this.element = document.createElement('a')
    var img = new Image()
    img.src = this.url
    this.element.appendChild(img)
    this.element.className = 'image-news ' + this.className
    this.element.href = this.href
}
ImageNews.prototype.add = function () { }
ImageNews.prototype.getElement = function () {
    return this.element
}

var IconNews = function (text, href, type) {
    News.call(this)
    this.text = text || ''
    this.href = href || '#'
    this.type = type || 'video'
    this.init()
}
inheritPrototype(IconNews, News)
IconNews.prototype.init = function () {
    this.element = document.createElement('a')
    this.element.innerHTML = this.text
    this.element.className = 'icon ' + this.className
    this.element.href = this.href
}
IconNews.prototype.add = function () { }
IconNews.prototype.getElement = function () {
    return this.element
}



var EasyNews = function (text, href) {
    News.call(this)
    this.text = text || ''
    this.href = href || '#'
    this.init()
}
inheritPrototype(EasyNews, News)
EasyNews.prototype.init = function () {
    this.element = document.createElement('a')
    this.element.innerHTML = this.text
    this.element.className = 'text'
    this.element.href = this.href
}
EasyNews.prototype.add = function () { }
EasyNews.prototype.getElement = function () {
    return this.element
}



var TypeNews = function (text, href, type, pos) {
    News.call(this)
    this.text = text || ''
    this.href = href || '#'
    this.type = type || ''
    this.pos = pos || 'left'
    this.init()
}
inheritPrototype(TypeNews, News)
TypeNews.prototype.init = function () {
    this.element = document.createElement('a')
    if (this.pos === 'left') {
        this.element.innerHTML = '[' + this.type + ']' + this.text
    } else {
        this.element.innerHTML = this.text + '[' + this.type + ']'
    }
    this.element.className = 'text'
    this.element.href = this.href
}
TypeNews.prototype.add = function () { }
TypeNews.prototype.getElement = function () {
    return this.element
}

/*
var news1 = new Container('news', document)
news1.add(
    new Item('normal').add(
        new IconNews('梅西不拿金球也伟大', '#', 'video')
    )
).add(
    new Item('normal').add(
        new IconNews('保护强国强队用意明显', '#', 'live')
    )
    ).add(
    new Item('normal').add(
        new NewsGroup('has-img').add(
            new ImageNews('img/1.jpg', '#', 'small')
        ).add(
            new EasyNews('从240胖子成功变型男', '#')
            ).add(
            new EasyNews('五在雷人跑步机', '#')
            )
    )
    ).add(
    new Item('normal').add(
        new TypeNews('AK47不愿为费城打球', '', 'NBA', 'left')
    )
    ).add(
    new Item('normal').add(
        new TypeNews('火炮飚6三分创新高', '', 'CBA', 'right')
    )
    ).show()*/

var news1 = new Container('news', document)
var aaa = new IconNews('梅西不拿金球也伟大', '#', 'video')

news1.add(aaa

).show()