// 在函数内部创建对象并暴露该对象
function Person(name,age,sex){
    let p = {}
    p.name = name
    p.age = age
    p.sex = sex
    p.info = function(){
        console.log(`姓名：${name}，age:${age}`);
    }
    return p
}
let p1 = Person('lili',15,'女')
let p2 =  Person('hetty',20,'女')
console.log(p1,p2);