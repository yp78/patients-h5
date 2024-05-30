// stores统一导出
import { createPinia } from 'pinia'
// 数据持久化
import persist from 'pinia-plugin-persistedstate'

// 创建pinia实例
const pinia = createPinia()
//使用pinia插件
pinia.use(persist)
//导出pinia实例，给main使用
export default pinia
// export * from './stores/user'
