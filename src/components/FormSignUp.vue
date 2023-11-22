<template>
  <div class="form">
    <h2>{{ `${isLogin ? "Registration form" : "Login form"}` }}</h2>
    <form>
      <input 
        @blur="validateEmail" 
        :class="{invalidClass: isValid}"
        type="email" 
        placeholder="email" 
        name="email" 
        v-model="auth.email"
      >
      <input 
        @blur="validatePassword" 
        :class="{invalidClass2: isValid}" 
        type="text"
        placeholder="password" 
        name="password" 
        v-model="auth.password"
      >
      <div>{{ auth.email }}</div>
      <div>{{ auth.password }}</div>
      <button class="btn-old" @click.prevent="saveInLocalStorage" v-if="isAuth">Sign up</button>
      <button class="btn-new" @click.prevent="checkSignUp" v-if="!isAuth">Login</button>
    </form>
  </div>
</template>

<script setup>
  import { useFormStore } from '@/store/form.js'
  import { storeToRefs } from 'pinia'

  const store = useFormStore()
  const { auth, isAuth, isLogin, isValid } = storeToRefs(store)
  const { saveInLocalStorage, checkSignUp, validateEmail, validatePassword } = store
</script>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  background: #beb6a5;
  font-family: 'Oswald', sans-serif;
  width: 300px;
  height: 300px;
  position: absolute;
  top: 30%;
  left: 45%;
  border-radius: 5px;
  padding:20px;
}
h2 {
  margin-top: 25px;
  margin-bottom: 25px;
}
input {
  margin-bottom: 15px;
  border-radius: 7px;
  padding-left: 10px;
  padding-right: 20px;
  border: 1px solid #d0c4db;
  outline: none;
  width: 200px;
  height: 33px;
  transition: .2s;
}
input:hover {
  border-color: #888;
}
.invalidClass {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}
.invalidClass2 {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}
.btn-old {
  width: 110px;
  height: 40px;
  border-radius: 0px;
  color: white;
  transition: .2s linear;
  background: #0B63F6;
  margin-top: 20px;
}
.btn-old:hover {
  box-shadow:0px -6px 0 #003CC5 inset;
}
.btn-new {
  width: 110px;
  height: 40px;
  text-align: center;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  background-image: linear-gradient(to right, #003CC5 0%, #0B63F6 51%, #003CC5 100%);
}

.btn-new:hover {
  background-position: right center;
}
</style>
