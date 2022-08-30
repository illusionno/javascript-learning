let my_throttle = function (fn, interval, options = { leading: true, trailing: false }) {
    // leading控制第一次是否执行, trailing最后一次是否执行
    let { leading, trailing } = options
    // 上一次事件触发时间
    let lastTime = 0
    let timer = null
    let _throttle = function (...args) {
        // 获取事件触发时的时间
        let nowTime = new Date().getTime()
        if (lastTime === 0 && leading === false) lastTime = nowTime
        let remainTime = interval - (nowTime - lastTime)
        if (remainTime <= 0) {
            if(timer){
                clearTimeout(timer)
                timer = null
            }
            fn.apply(this, args)
            // 更新lastTime
            lastTime = nowTime
            // 结束方法
            return 
        }
        if (trailing && !timer) {
            timer = setTimeout(() => {
            timer = null
            lastTime = trailing?new Date().getTime():0
            fn.apply(this, args)
            }, remainTime)
        }
    }
    return _throttle

}