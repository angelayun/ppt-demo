var Book = function (title, time, type) {
    //判断执行过程中this是否是当前对象--如果是则说明是用new创建的
    if (this instanceof Book) {
        this.time = title
        this.time = time
        this.type = type
    } else {
        return new Book(title, time, type)
    }

}
