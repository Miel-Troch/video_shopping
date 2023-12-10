<template>
  <v-dialog width="500">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        variant="plain"
        size="small"
        icon="mdi-pencil-outline"
      />
    </template>

    <template v-slot:default="{ isActive }">
      <v-card>
        <v-card-title>{{ `Edit ${$route.params.title}` }} </v-card-title>
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
            v-if="$route.params.title === 'category'"
            text="Save"
            @click="
              isActive.value = false;
              putCategory();
            "
            color="#0587c7"
          />

          <v-btn
            v-else-if="$route.params.title === 'video'"
            text="Save"
            @click="
              isActive.value = false;
              putVideo();
            "
            color="#0587c7"
          />

          <v-btn
            v-if="$route.params.title === 'product'"
            text="Save"
            @click="
              isActive.value = false;
              putProduct();
            "
            color="#0587c7"
          />
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const { id } = defineProps(["id"]);

const categoryName = ref();

const categoryId = ref();
const videoTitle = ref();
const videoUrl = ref();

const videoId = ref();
const productName = ref();
const productBrandName = ref();
const productPrice = ref();

async function getCategory() {
  await axios.get(`http://localhost:5000/api/category/${id}`).then((res) => {
    categoryName.value = res.data.name;
  });
}
async function getVideo() {
  await axios.get(`http://localhost:5000/api/video/${id}`).then((res) => {
    categoryId.value = res.data.categoryId;
    videoTitle.value = res.data.title;
    videoUrl.value = res.data.videoUrl;
  });
}
async function getProduct() {
  await axios.get(`http://localhost:5000/api/product/${id}`).then((res) => {
    videoId.value = res.data.videoId;
    productName.value = res.data.name;
    productBrandName.value = res.data.brandName;
    productPrice.value = res.data.price;
  });
}

async function putCategory() {
  await axios.put(`http://localhost:5000/api/category/${id}`, {
    name: categoryName.value,
  });
}
async function putVideo() {
  await axios.put(`http://localhost:5000/api/video/${id}`, {
    categoryId: categoryId.value,
    title: videoTitle.value,
    videoUrl: videoUrl.value,
  });
}
async function putProduct() {
  await axios.put(`http://localhost:5000/api/product/${id}`, {
    videoId: videoId.value,
    name: productName.value,
    brandName: productBrandName.value,
    price: productPrice.value,
  });
}

getCategory();
getVideo();
getProduct();
</script>