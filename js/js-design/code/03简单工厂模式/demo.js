
//简单工厂模式的理念就是创建对象,它的使用场合通常限制了在创建单一对象----@2创建一个新对象然后包装增强其属性和功能   创建的对象是一个新的个体

//工厂模式
function createBook(name, time, type) {
    //创建一个对象，并对对象拓展属性和方法
    var o = new Object();
    o.name = name;
    o.time = time;
    o.type = type;
    o.getName = function () {
        console.log(this.name)
    }
    return o;
}

//抽象共同点  对不同点进行针对话处理
function createPop(type,text){
    //创建一个对象，并对对象拓展属性和方法
    var o=new Object();
    o.content=text;
    o.show=function(){}
    if(type==='alert'){
        //警示框差异部分
    }
    if(type==='prompt'){
        //提示框差异部分
    }
    if(type==='confirm'){
        //确认框差异部分
    }
    return o;
}