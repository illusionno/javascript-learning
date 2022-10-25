let my_throttle = function (fn, interval, options = { leading: true, trailing: false, callback }) {
    // leading控制第一次是否执行, trailing最后一次是否执行
    let { leading, trailing ,callback} = options
    // 上一次事件触发时间
    let lastTime = 0
    let timer = null
    let _throttle = function (...args) {
        // 获取事件触发时的时间
        let nowTime = new Date().getTime()
        // leading
        if (lastTime === 0 && leading === false) lastTime = nowTime
        let remainTime = interval - (nowTime - lastTime)
        if (remainTime <= 0) {
            if (timer) {
                clearTimeout(timer)
                timer = null
            }
            let result = fn.apply(this, args)
            if (callback) callback(result)
            // 更新lastTime
            lastTime = nowTime
            // 结束方法
            return
        }
        // trailing
        if (trailing && !timer) {
            timer = setTimeout(() => {
                timer = null
                lastTime = trailing ? new Date().getTime() : 0
                let result = fn.apply(this, args)
                if (callback) callback(result)
            }, remainTime)
        }
    }
    // 取消功能
    _throttle.cancel = function () {
        if (timer) clearTimeout(timer)
        timer = null
        lastTime = 0
    }
    return _throttle

}