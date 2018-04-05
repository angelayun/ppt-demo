let items = new Array(2)
console.log(items.length)//2
items = new Array("2")
console.log(items.length)//1

let items = Array.of(1, 2)
console.log(items.length)//2
console.log(items[0])//1

function translate() {
    return Array.from(arguments, (value) => value + 1)
}
let numbers = translate(1, 2, 3)
console.log(numbers) //2、3、4

let helper = {
    diff: 1,
    add(value) {
        return value + this.diff
    }
}
function translate() {
    return Array.from(arguments, helper.add, helper)
}
let numbers = translate(1, 2, 3)
console.log(numbers) //2、3、4


let numbers = {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
    }
}
let numbers2 = Array.from(numbers, value => value + 1)
console.log(numbers2) //2、3、4

let numbers = [25, 30, 35, 40, 45]
console.log(numbers.find(n => n > 35))//40
console.log(numbers.findIndex(n => n > 35))//3

let numbers = [1, 2, 3, 4]
numbers.copyWithin(2, 0, 1)
console.log(numbers)//1,2,1,4


let buffer = new ArrayBuffer(10)
let buffer2 = buffer.slice(4, 6)
console.log(buffer2.byteLength)//2

let buffer = new ArrayBuffer(10),
    view1 = new DataView(buffer),
    view2 = new DataView(buffer, 5, 2);
console.log(view1.buffer === buffer)//true
console.log(view2.byteOffset)//5
console.log(view2.byteLength)//2

let buffer = new ArrayBuffer(10),
    view = new DataView(buffer);
view.setInt8(0, 5)
view.setInt8(1, -1)
console.log(view.getInt8(0))//5

let buffer = new ArrayBuffer(10),
    view = new Int8Array(buffer);
console.log(view.byteLength)

let ints = new Int32Array(10);
console.log(ints.byteLength)//20
console.log(ints.length)//10

let ints1 = new Int16Array([25, 50]),
    ints2 = new Int32Array(ints1);
console.log(ints1.buffer === ints2.buffer)//false
console.log(ints1.length)//2
console.log(ints2.byteLength)//8
console.log(ints2.length)//2
console.log(ints2[0])//25
console.log(ints2[1])//50

console.log(Uint32Array.BYTES_PER_ELEMENT)

let ints = new Int16Array([25, 50]),
    intsArray = [...ints];
console.log(intsArray instanceof Array)//true
console.log(intsArray[0])//25


let ints = new Int16Array([25, 50])
console.log(ints instanceof Array)//false
console.log(Array.isArray(ints))//false


let ints = new Int16Array([25, 50]);
console.log(ints.length);//2
console.log(ints[0])//25
console.log(ints[1])//50
ints[2] = 5;
console.log(ints.length)//2
console.log(ints[2])//undefined

let ints = new Int16Array(['hi'])
console.log(ints.length)//1
console.log(ints[0])//0


let ints = new Int16Array(4);
ints.set([25, 50])
ints.set([75, 100], 2)
console.log(ints)//[25, 50, 75, 100]

let ints = new Int16Array([25, 50, 75, 100]),
    subInts = ints.subarray(1, 3);
console.log(subInts)//[50, 75]