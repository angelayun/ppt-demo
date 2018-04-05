var bindEvent = function (dom, type, fn) {
    if (dom.addEventListener) {
        dom.addEventListener(type, fn, false)
    } else if (dom.attachEvent) {
        dom.attachEvent('on' + type, fn)
    } else {
        dom['on' + type] = fn
    }
}

function bindIEEvent(dom, type, fn, data) {
    var data = data || {}
    dom.attachEvent('on' + type, function (e) {
        fn.call(dom, e, data)
    })
}

var demo = document.getElementById('news')
/*
bindEvent(demo, 'click', function () {
    this.style.background = 'red'
})*/

bindIEEvent(demo, 'click', function () {
    this.style.background = 'red'
})

bindIEEvent(demo, 'click', function (e, d) {
    document.getElementById('demo').innerHTML = e.type + d.text + this.tagName
}, { text: 'this is demo' })