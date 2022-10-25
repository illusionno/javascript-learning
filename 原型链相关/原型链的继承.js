function Person() {
    this.name = 'LILI'
    this.friends = []
}
function Student() {

}
// 子类构造函数的原型对象指向父类构造函数创建的对象
Student.prototype = new Person()

Student.prototype.info = function () {
    console.log(this.name);
}
let s1 = new Student()
let s2 = new Student()
s1.info()
s1.name = 'hhh'
// 修改基本数据类型，不会相互影响
console.log(s1.name);
console.log(s2.name);

// 修改引用数据类型，会影响，指向同一处内存空间
s1.friends.push('aa')
console.log(s1.friends);
console.log(s2.friends);
