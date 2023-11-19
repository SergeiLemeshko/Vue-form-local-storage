<template>
  <main-view></main-view>
  <router-view/>
</template>

<script setup>
  import MainView from '@/views/MainView.vue'

</script>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
  background-color: #0c1425;
}
#app {
  text-align: center;
}
</style>
