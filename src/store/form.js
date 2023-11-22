import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useFormStore = defineStore('form', () => {
  const auth = ref({email: '', password: ''});
  const isAuth = ref(true);
  const isLogin = ref(true);
  const isValid = ref(false);

  //Записываю в localStorage
  function saveInLocalStorage() {
    isAuth.value = false; 
    localStorage.setItem("auth", JSON.stringify(auth.value));
    localStorage.setItem("is_auth", isAuth.value);
    auth.value.email = ''; //очищаю инпуты
    auth.value.password = '';
  }
  //Сверяю с localStorage
  function checkSignUp() {
    const dataAusLS = localStorage.getItem("auth");
    isLogin.value = false; 
    localStorage.setItem("is_login", isLogin.value);

    if(auth.value.email === JSON.parse(dataAusLS).email && auth.value.password === JSON.parse(dataAusLS).password) {
      auth.value.email = ''; //очищаю инпуты
      auth.value.password = '';
      console.log("Welcome");
    } else {
      auth.value.email = ''; //очищаю инпуты
      auth.value.password = '';
      console.log("email или password введены неправильно");
    } 
  } 
  //Валидация e-mail 
  const validateEmail = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(auth.value.email)) {
      console.log('Email good');
    } else {
      isValid.value = true;
      console.log('Please enter a valid email address');
    }
  }

  const validatePassword = () => {
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/.test(auth.value.password)) {
      console.log('Password good');
    } else {
      isValid.value = true;
      console.log('Please enter a valid password');
    }
  }
  
  watch(() => auth, (state) => {
    localStorage.getItem("auth", state);
  }, {deep: true});

  return { auth, isAuth, isLogin, isValid, saveInLocalStorage, checkSignUp, validateEmail, validatePassword }
})
