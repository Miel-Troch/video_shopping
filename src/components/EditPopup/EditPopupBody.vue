<template>
  <v-card-item v-if="$route.params.title === 'category'">
    <v-form>
      <v-container>
        <v-row no-gutters>
          <v-col cols="12">
            <v-text-field
              v-model="categoryId"
              type="number"
              label="ID"
              required
            />
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="categoryName" label="Name" required />
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card-item>

  <v-card-item v-else-if="$route.params.title === 'video'">
    <v-form>
      <v-container>
        <v-row no-gutters>
          <v-col cols="12">
            <v-text-field v-model="videoId" type="number" label="ID" required />
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="videoTitle" label="Title" required />
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="videoUrl" label="Video Url" required />
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card-item>

  <v-card-item v-else-if="$route.params.title === 'product'">
    <v-form>
      <v-container>
        <v-row no-gutters>
          <v-col cols="12">
            <v-text-field
              v-model="productId"
              type="number"
              label="ID"
              required
            />
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="productName" label="Name" required />
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="productBrandName"
              label="Brand Name"
              required
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="productPrice"
              type="number"
              label="Price"
              required
              prefix="€"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card-item>
</template>
  
<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

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

const route = useRoute();
const props = defineProps(["id"]);

const categoryId = ref(
  route.params.title === "category" ? props.id : undefined
);
const categoryName = ref(
  route.params.title === "category"
    ? categorys.find((i) => i.id === props.id).name
    : undefined
);

const videoId = ref(route.params.title === "video" ? props.id : undefined);
const videoTitle = ref();
const videoUrl = ref();

const productId = ref(route.params.title === "product" ? props.id : undefined);
const productName = ref();
const productBrandName = ref();
const productPrice = ref();
</script>