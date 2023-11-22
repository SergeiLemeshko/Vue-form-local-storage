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
}
#app {
  text-align: center;
  background-color: #0c1425;
  min-height: 1000px;
}
</style>
