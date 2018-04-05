var FlyWeight = function () {
    var created = [];
    function create() {
        var dom = document.createElement('div')
        document.getElementById('container').appendChild(dom)
        created.push(dom)
        return dom
    }
    return {
        getDiv: function () {
            if (created.length < 5) {
                return create()
            } else {
                var div = created.shift()
                created.push(div)
                return div
            }
        }
    }
}