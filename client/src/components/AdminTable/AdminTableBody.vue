<template>
  <tbody v-if="$route.params.title === 'category'">
    <tr v-for="i in categorys" :key="i.id">
      <td>{{ i.id }}</td>
      <td>{{ i.name }}</td>
      <td class="text-right">
        <EditPopup :id="i.id" />
        <DeletePopup :id="i.id" />
      </td>
    </tr>
  </tbody>

  <tbody v-else-if="$route.params.title === 'video'">
    <tr v-for="i in videos" :key="i.id">
      <td>{{ i.id }}</td>
      <td>{{ i.title }}</td>
      <td>{{ i.videoUrl }}</td>
      <td class="text-right">
        <EditPopup :id="i.id" />
        <DeletePopup :id="i.id" />
      </td>
    </tr>
  </tbody>

  <tbody v-else-if="$route.params.title === 'product'">
    <tr v-for="i in products" :key="i.id">
      <td>{{ i.id }}</td>
      <td>{{ i.name }}</td>
      <td>{{ i.brandName }}</td>
      <td>{{ i.price }}</td>
      <td class="text-right">
        <EditPopup :id="i.id" />
        <DeletePopup :id="i.id" />
      </td>
    </tr>
  </tbody>
</template>
    
<script setup>
import EditPopup from "../EditPopup/EditPopup.vue";
import DeletePopup from "../DeletePopup.vue";
import axios from "axios";

async function getAllCategorys() {
  await axios.get("http://localhost:5000/api/category").then((res) => {
    console.log(res);
  });
}

async function getAllVideos() {
  await axios.get("http://localhost:5000/api/video").then((res) => {
    console.log(res);
  });
}

async function getAllProducts() {
  await axios.get("http://localhost:5000/api/product").then((res) => {
    console.log(res);
  });
}

const categorys = [
  {
    id: 1,
    name: "Fashion",
  },
  {
    id: 2,
    name: "Electronics",
  },
  {
    id: 3,
    name: "Beauty & Personal Care",
  },
];

getAllCategorys();
getAllVideos();
getAllProducts();
</script>