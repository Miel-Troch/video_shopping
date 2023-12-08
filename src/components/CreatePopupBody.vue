<template>
  <v-card-item v-if="$route.params.title === 'category'">
    <v-form>
      <v-container>
        <v-row>
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
        <v-row>
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
        <v-row>
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

const categoryId = ref();
const categoryName = ref();

const videoId = ref();
const videoTitle = ref();
const videoUrl = ref();

const productId = ref();
const productName = ref();
const productBrandName = ref();
const productPrice = ref();
</script>