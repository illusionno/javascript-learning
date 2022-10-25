function Person(name, age, sex) {
    // this指向该构造函数生成的对象
    this.name = name
    this.age = age
    this.sex = sex
    this.info = function () {
        console.log(`姓名：${name}，age:${age}`);

    }
}
// 每创建一个对象，里面的方法都会分别创建
let p1 = new Person('lili',15,'女')
let p2 = new  Person('hetty',20,'女')
console.log(p1,p2);
// 获取p1的类型
console.log(p1.__proto__.constructor);

