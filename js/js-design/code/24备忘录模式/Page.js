//显示某页逻辑
function showPage(page, data) { }
var Page = function () {
    var cache = {}
    return function (page, fn) {
        if (cache[page]) {
            showPage(page, cache[page])
            //执行成功回调函数
            fn & fn()
        } else {
            $.post('url', { page: page }, function (res) {
                if (res.errNo == 0) {
                    //显示该页数据
                    showPage(page, res.data)
                    //将该页数据放入缓存中
                    cache[page] = res.data
                    fn && fn()
                }
            })
        }
    }
}