import type { User } from '@/types/user.d'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'cp-user',
  () => {
    // 用户信息
    const user = ref<User>()
    //设置用户，登陆后使用
    const setUser = (u: User) => {
      user.value = u
    }
    // 清空用户，推出后使用
    const delUser = () => {
      user.value = undefined
    }
    return { user, setUser, delUser }
  },
  {
    persist: true
    // 数据持久化
  }
)
