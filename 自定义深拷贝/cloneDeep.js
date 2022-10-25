
function isObject(value) {
    return (value !== null) && typeof value === 'object' || typeof value === 'function'
}
// map 用来记录是否已经被拷贝过
//  处理循环引用时，将Map的创建放入参数中，避免每一次递归都会创建一个新Map
function cloneDeep(orignValue, map = new Map()) {
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
    if (typeof orignValue === 'symbol') {
        //Symbol.prototype.description 获取symbol 标识
        return Symbol(orignValue.description)
    }

    let newObj = Array.isArray(orignValue) ? [] : {}
    // 处理循环引用
    map.set(orignValue, newObj)
    if (map.has(orignValue)) {
        return orignValue
    }
    // for ...in 获取不到symbol属性
    for (let key in orignValue) {
        newObj[key] = cloneDeep(orignValue[key], map)
    }
    // 对symbol特殊处理
    // 返回一个数组，包含对象自身的所有 Symbol 属性的键名。
    let symbolKeys = Object.getOwnPropertySymbols(orignValue)
    for (let skey of symbolKeys) {
        newObj[skey] = cloneDeep(orignValue[skey], map)
    }
    return newObj
}