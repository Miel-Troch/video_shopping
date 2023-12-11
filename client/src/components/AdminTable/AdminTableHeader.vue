<template>
  <thead>
    <tr v-if="$route.params.title === 'category'">
      <th>Name</th>
      <th></th>
    </tr>
    <tr v-if="$route.params.title === 'video'">
      <th>Category ID</th>
      <th>Title</th>
      <th>videoUrl</th>
      <th></th>
    </tr>
    <tr v-if="$route.params.title === 'product'">
      <th>Video ID</th>
      <th>Name</th>
      <th>Brand Name</th>
      <th>Price</th>
      <th></th>
    </tr>
  </thead>
</template>