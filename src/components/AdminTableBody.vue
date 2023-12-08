<template>
  <tbody v-if="$route.params.title === 'category'">
    <tr v-for="i in categorys" :key="i.id">
      <td>{{ i.id }}</td>
      <td>{{ i.name }}</td>
    </tr>
  </tbody>
  <tbody v-if="$route.params.title === 'video'">
    <tr v-for="i in videos" :key="i.id">
      <td>{{ i.id }}</td>
      <td>{{ i.title }}</td>
      <td>{{ i.videoUrl }}</td>
    </tr>
  </tbody>
  <tbody v-if="$route.params.title === 'product'">
    <tr v-for="i in products" :key="i.id">
      <td>{{ i.id }}</td>
      <td>{{ i.name }}</td>
      <td>{{ i.brandName }}</td>
      <td>{{ i.price }}</td>
    </tr>
  </tbody>
</template>
    
  <script setup>
</script>