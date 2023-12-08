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
        <CreatePopupBody />
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text="Save"
            @click="isActive.value = false"
            color="#0587c7"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>


<script setup>
import CreatePopupBody from "./CreatePopupBody.vue";
</script>