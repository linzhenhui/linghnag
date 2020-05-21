/**
 * 配置静态数据
 * 项目中静态不会变化的配置放这里。
 */
global.config = { // 常用配置
  mock: false // 是否开启mock数据
}

/**
 * ajax 上下文环境 配置
 * 在组件里面发情求 通过拼接完成
 * 例如：this.http.get({ url: global.apiUrl.fp + 'xxx' })
 */
global.apiUrl = {
}
