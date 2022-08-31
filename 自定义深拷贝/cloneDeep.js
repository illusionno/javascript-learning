
function isObject(value) {
    return (value !== null) && typeof value === 'object' || typeof value === 'function'
}
function cloneDeep(orignValue) {
    if (!isObject(orignValue)) {
        return orignValue
    }

    // 对函数特殊处理, 返回的还是同一个函数
    if (typeof orignValue === 'function') {
        return orignValue
    }

    // Set处理
    if (orignValue instanceof Set) {
        return new Set([...orignValue])
    }

    // Map处理 
    // Map不处理好像也会拷贝到？
    if (orignValue instanceof Map) {
        return new Map([...orignValue])
    }

    // 如果value是symbol，则创建一个新的symbol
    if(typeof orignValue === 'symbol'){
        //Symbol.prototype.description 获取symbol 标识
        return Symbol(orignValue.description)
    }
    let newObj = Array.isArray(orignValue) ? [] : {}
    // for ...in 获取不到symbol属性
    for (let key in orignValue) {
        newObj[key] = cloneDeep(orignValue[key])
    }
    // 对symbol特殊处理
    // 返回一个数组，包含对象自身的所有 Symbol 属性的键名。
    let symbolKeys = Object.getOwnPropertySymbols(orignValue)
    for (let skey of symbolKeys) {
        newObj[skey] = cloneDeep(orignValue[skey])
    }
    return newObj
}