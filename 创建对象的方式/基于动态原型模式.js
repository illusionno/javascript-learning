function Person(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex

    // 只在该方法不存在的情况下，才会将它添加到原型中
    if(typeof info !== 'function'){
        Person.prototype.info = function(){
            console.log(`姓名：${this.name},年龄:${this.age}`);
        }
    }
}