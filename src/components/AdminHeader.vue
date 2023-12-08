<template>
  <v-container fluid="true">
    <v-row class="xs-12" no-gutters>
      <v-col cols="11" offset="1">
        <h1 style="color: #516975">Video Shopping</h1>
      </v-col>
    </v-row>
    <v-row class="xs-12" no-gutters>
      <v-col cols="10" offset="1">
        <v-divider :thickness="3" style="color: #516975" />
      </v-col>
    </v-row>
    <v-row class="xs-12" no-gutters style="margin-top: 40px">
      <v-col cols="1" offset="1">
        <h3 style="text-align: center; color: #0587c7">
          {{ $route.params.title }}
        </h3>
      </v-col>
      <v-col cols="2" offset="8">
        <create-popup />
      </v-col>
    </v-row>
    <v-row class="xs-12" no-gutters>
      <v-col cols="1" offset="1">
        <v-divider
          :thickness="2"
          class="border-opacity-50"
          style="color: #0587c7"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import CreatePopup from "./CreatePopup.vue";
</script>