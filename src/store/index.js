// 入口文件
import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'

// 在控制台打印你修改过得日志
import createLogger from 'vuex/dist/logger'

// 注册插件
Vue.use(Vuex)

// 开启调试。检测你的修改是否来自于mutations
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    strict: debug,
    // 插件
    plugins: debug ? [createLogger()] : []
})