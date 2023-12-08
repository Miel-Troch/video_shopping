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
          `Are you sure you want to delete the ${$route.params.title} with ID ${props.id}`
        }}</v-card-subtitle>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text="No" @click="isActive.value = false" color="#0587c7" />
          <v-btn text="Yes" @click="isActive.value = false" />
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
  
<script setup>
const props = defineProps(["id"]);
</script>