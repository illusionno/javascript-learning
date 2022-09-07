function Person(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
}
// 原型对象中提供公共方法
Person.prototype = {
    info: function () {
        //函数this和定义位置无关，指向函数的调用者
        console.log(`姓名：${this.name},年龄:${this.age}`);
    },
    eat: function () {
        console.log(`${this.name} 在吃东西~`);
    }
}
let p1 = new Person('lili', 12, '女')
let p2 = new Person('heri', 22, '男')

console.log(p1.__proto__ == Person.prototype); //true
console.log(p1.__proto__ == p2.__proto__); //true

console.log(p1.name);
p1.info()
p2.info()
