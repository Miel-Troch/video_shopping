<template>
  <v-app-bar>
    <v-btn style="height: 100%;" @click="this.$router.push('/admin/video')">
      <v-avatar image="..\..\assets\logo.png" size="64" />
      <v-app-bar-title>
        Video Shopping
      </v-app-bar-title>
    </v-btn>
    <v-spacer />
    <v-btn icon="mdi-account-circle-outline" @click="this.$router.push('/admin/video')" />
  </v-app-bar>
</template>

<script setup>

</script>
