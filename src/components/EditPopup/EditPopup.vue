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
        <EditPopupBody :id="props.id"/>
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
import EditPopupBody from "./EditPopupBody.vue";
const props = defineProps(['id']);
</script>