<template>
  <v-dialog width="500">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" color="#0587c7">{{
        `+ add ${$route.params.title}`
      }}</v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card>
        <v-card-title>{{ `Create ${$route.params.title}` }} </v-card-title>

        <v-card-item v-if="$route.params.title === 'category'">
          <v-form>
            <v-container>
              <v-row no-gutters>
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
                  <v-text-field
                    v-model="categoryId"
                    type="number"
                    label="Category ID"
                    required
                  />
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
                    v-model="videoId"
                    type="number"
                    label="Video Id"
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

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text="Save"
            @click="
              isActive.value = false;
              createClick();
            "
            color="#0587c7"
          />
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>


<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const categoryName = ref();

const categoryId = ref();
const videoTitle = ref();
const videoUrl = ref();

const videoId = ref();
const productName = ref();
const productBrandName = ref();
const productPrice = ref();

function createClick() {
  if (route.params.title === "category")
    createCategory().then(() => {
      router.go(0);
    });
  else if (route.params.title === "video")
    createVideo().then(() => {
      router.go(0);
    });
  else if (route.params.title === "product")
    createProduct().then(() => {
      router.go(0);
    });
}

async function createCategory() {
  await axios.post("http://localhost:5000/api/category", {
    name: categoryName.value,
  });
}

async function createVideo() {
  await axios.post("http://localhost:5000/api/video", {
    categoryId: categoryId.value,
    title: videoTitle.value,
    videoUrl: videoUrl.value,
  });
}

async function createProduct() {
  await axios.post("http://localhost:5000/api/product", {
    videoId: videoId.value,
    name: productName.value,
    brandName: productBrandName.value,
    price: productPrice.value,
  });
}
</script>