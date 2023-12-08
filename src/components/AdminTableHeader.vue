<template>
  <thead>
    <tr v-if="$route.params.title === 'category'">
      <th class="text-left">ID</th>
      <th class="text-left">Name</th>
    </tr>
    <tr v-if="$route.params.title === 'video'">
      <th class="text-left">ID</th>
      <th class="text-left">Title</th>
      <th class="text-left">videoUrl</th>
    </tr>
    <tr v-if="$route.params.title === 'product'">
      <th class="text-left">ID</th>
      <th class="text-left">Name</th>
      <th class="text-left">Brand Name</th>
      <th class="text-left">Price</th>
    </tr>
  </thead>
</template>