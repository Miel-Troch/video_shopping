<template>
    <side-bar/>
    <v-text>{{$route.params.title}}</v-text>
</template>
  
<script setup>
import SideBar from '../components/SideBar.vue'
// import { useRoute } from 'vue-router'

// const route = useRoute();
// console.log(route.params)
</script>