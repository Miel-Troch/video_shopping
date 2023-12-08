<template>
  <v-navigation-drawer>
    <v-list nav>
      <v-list-item
        prepend-icon="mdi-shape-plus"
        title="category's"
        value="category"
        :active="path === '/admin/category'"
        @click.prevent="click('category')"
      />
      <v-list-item
        prepend-icon="mdi-video-box"
        title="Video's"
        value="video"
        :active="path === '/admin/video'"
        @click.prevent="click('video')"
      />
      <v-list-item
        prepend-icon="mdi-cart"
        title="Products"
        value="product"
        :active="path === '/admin/product'"
        @click.prevent="click('product')"
      />
    </v-list>
  </v-navigation-drawer>
</template>
  
<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const path = ref(router.currentRoute.value.fullPath);

function click(title) {
  router.push(`/admin/${title}`);
  path.value = `/admin/${title}`;
}
</script>
  
