import { useUserStore } from '@/stores/user'
import router from '@/router'
import axios from 'axios'
//vant 请提示
import { Toast } from 'vant'
import type { Data } from '../types/request'

//1.新axios实例，基础配置
const baseURL = 'https://consult-api.itheima.net/'
const instance = axios.create({
  baseURL,
  timeout: 10000
})
// 2. 请求拦截器，携带token
instance.interceptors.request.use(
  (config) => {
    const store = useUserStore()
    if (store.user?.token && config.headers) {
      config.headers['Authorization'] = `Bearer ${store.user?.token}`
    }
    return config
  },
  (err) => Promise.reject(err)
)
// 3. 响应拦截器，剥离⽆效数据，401拦截
instance.interceptors.response.use(
  (res) => {
    // 后台约定，响应成功，但是code不是10000，是业务逻辑失败
    if (res.data?.code !== 10000) {
      Toast(res.data?.message)
      return Promise.reject(res.data)
    }
    // 业务逻辑成功，返回响应数据，作为axios成功的结果
    return res.data
  },
  (err) => {
    if (err.response.status === 401) {
      // 删除⽤户信息
      const store = useUserStore()
      store.delUser()
      // 跳转登录，带上接⼝失效所在⻚⾯的地址，登录完成后回跳使⽤
      router.push(`/login?returnUrl=${router.currentRoute.value.fullPath}`)
    }
    return Promise.reject(err)
  }
)

//4.请求工具函数
const request = <T>(url: string, method: Method = 'get', submitData?: object) => {
  return instance.request<T, Data<T>>({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}

export default request
