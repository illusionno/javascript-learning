function cloneDeep(originValue, map = new Map()) {
    // 原始值直接返回
    if (typeof originValue !== null && typeof originValue !== 'object' || typeof originValue !== 'function') {
        return originValue
    }
    // 函数
    if (typeof originValue === 'function') {
        return originValue
    }
    // Map,Set
    if(originValue instanceof Map){
        return new Map([...originValue])
    }
    if(originValue instanceof Set){
        return new Set([...originValue])
    }

    // 如果是symbol，创建一个新的symbol
    if(typeof originValue === 'symbol'){
        return Symbol(originValue.description)
    }
    let newObj = Array.isArray(originValue) ? [] : {}

    // 处理循环引用, map 用来记录是否已经被拷贝过
    if (map.has(originValue)) {
        return originValue
    }
    map.set(originValue, newObj)

    for (let key in originValue) {
        newObj[key] = cloneDeep2(originValue[key],map)
    }
    let symbolKeys = Object.getOwnPropertySymbols(originValue)
    for(let skey of symbolKeys){
        newObj[skey] = cloneDeep2(originValue[key],map)
    }
    return newObj
}