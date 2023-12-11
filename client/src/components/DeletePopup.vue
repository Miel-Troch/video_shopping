<template>
  <v-dialog width="500">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        variant="plain"
        size="small"
        icon="mdi-trash-can-outline"
      />
    </template>

    <template v-slot:default="{ isActive }">
      <v-card>
        <v-card-title>{{ `Delete ${$route.params.title}` }} </v-card-title>
        <v-card-subtitle>{{
          `Are you sure you want to delete the ${$route.params.title} with ID ${id}`
        }}</v-card-subtitle>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text="No" @click="isActive.value = false" color="#0587c7" />
          <v-btn
            text="Yes"
            @click="
              isActive.value = false;
              deleteClick();
            "
          />
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
  
<script setup>
const { id } = defineProps(["id"]);
import axios from "axios";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

function deleteClick() {
  if (route.params.title === "category")
    deleteCategory().then(() => {
      router.go(0);
    });
  else if (route.params.title === "video")
    deleteVideo().then(() => {
      router.go(0);
    });
  else if (route.params.title === "product")
    deleteProduct().then(() => {
      router.go(0);
    });
}

async function deleteCategory() {
  await axios.delete(`http://localhost:5000/api/category/${id}`);
}
async function deleteVideo() {
  await axios.delete(`http://localhost:5000/api/video/${id}`);
}
async function deleteProduct() {
  await axios.delete(`http://localhost:5000/api/product/${id}`);
}
</script>