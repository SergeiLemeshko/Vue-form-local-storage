import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useFormStore = defineStore('form', () => {
  const auth = ref({email: '', password: ''});
  const isAuth = ref(true);
  const isLogin = ref(true);

  //Записываю в localStorage
  function saveInLocalStorage() {
    isAuth.value = false; 
    localStorage.setItem("auth", JSON.stringify(auth.value));
    localStorage.setItem("is_auth", isAuth.value);
    auth.value.email = ''
    auth.value.password = ''
  }
  //Сверяю с localStorage
  function checkSignUp() {
    const dataAusLS = localStorage.getItem("auth");
    isLogin.value = false; 
    localStorage.setItem("is_login", isLogin.value);

    if(auth.value.email === JSON.parse(dataAusLS).email && auth.value.password === JSON.parse(dataAusLS).password) {
      console.log("Welcome")
    } else console.log("email или password введены неправильно")
  } 
  
  watch(() => auth, (state) => {
    localStorage.getItem("auth", state);
  }, {deep: true})

  return { auth, isAuth, isLogin, saveInLocalStorage, checkSignUp }
})
