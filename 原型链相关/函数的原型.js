function a(){}
// 函数原型的constructor指向该函数本身
console.log(a.prototype.constructor);
// 获取函数名
console.log(a.prototype.constructor.name);
// 修改函数原型的constructor
Object.defineProperty(a.prototype,'constructor',{
    enumerable:true,
    configurable:true,
    writable:true,
    value:a
})
// 在原型对象中添加公共的属性和方法
a.prototype = {
    name:'lili',
    age:20,
    info:function(){
        console.log(`${this.name}和${this.age}`);
    }
}
let aa = new a()
console.log(aa.name);
console.log('1',Object.getOwnPropertyDescriptors(Object.prototype));
console.log('2',Object.prototype);