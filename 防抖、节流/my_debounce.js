function my_debounce(fn, delay, immediate = false, callback) {
    // 保存上一次的定时器对象
    let timer = null
    // 记录是否立即执行过
    let isInvoke = false
    let _debounce = function (...args) {
        // 清空上一次定时器
        if (timer) clearTimeout(timer)
        if (immediate && !isInvoke) {
            let result = fn.apply(this, args)
            // 将执行的函数结果返回出去
            if (callback) callback(result)
            isInvoke = true
        } else {
            timer = setTimeout(() => {
                // 执行外部传入的函数
                // 绑定this和参数
                let result = fn.apply(this, args)
                if (callback) callback(result)
                // 等过段时间后再执行函数又恢复立即执行
                isInvoke = false
            }, delay)

        }
    }
    // 添加取消功能
    _debounce.cancel = function () {
        if (timer) clearTimeout(timer)
        // 重置
        timer = null
        isInvoke = false
    }
    return _debounce
}