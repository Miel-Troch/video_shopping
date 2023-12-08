<template>
  <thead>
    <tr v-if="$route.params.title === 'category'">
      <th>ID</th>
      <th>Name</th>
      <th></th>
    </tr>
    <tr v-if="$route.params.title === 'video'">
      <th>ID</th>
      <th>Title</th>
      <th>videoUrl</th>
      <th></th>
    </tr>
    <tr v-if="$route.params.title === 'product'">
      <th>ID</th>
      <th>Name</th>
      <th>Brand Name</th>
      <th>Price</th>
      <th></th>
    </tr>
  </thead>
</template>