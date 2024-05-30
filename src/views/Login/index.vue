<script setup lang="ts">
import { ref } from 'vue'
import NavBar from './components/cpNavbar.vue'

const checked = ref(true)
</script>

<template>
  <NavBar></NavBar>
  <div class="login-page">
    <van-button type="primary">按钮</van-button>
    <van-checkbox v-model="checked">复选框</van-checkbox>
  </div>
</template>

<style lang="scss" scoped></style>
