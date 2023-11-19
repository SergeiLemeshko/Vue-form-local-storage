<template>
  <h2>{{ `${isLogin ? "Registration form" : "Login form"}` }}</h2>
  <form class="form">
    <input placeholder="email" name="email" v-model="auth.email">
    <input placeholder="password" name="password" v-model="auth.password">
    <div>{{ auth.email }}</div>
    <div>{{ auth.password }}</div>
    <button @click.prevent="saveInLocalStorage" v-if="isAuth">Sign up</button>
    <button @click.prevent="checkSignUp" v-if="!isAuth">Login</button>
  </form>
</template>

<script setup>
  import { useFormStore } from '@/store/form.js'
  import { storeToRefs } from 'pinia'

  const store = useFormStore()
  const { auth, isAuth, isLogin } = storeToRefs(store)
  const { saveInLocalStorage, checkSignUp } = store
</script>

<style scoped lang="scss">
.form {
  color: rgb(255, 255, 255);
}
</style>
