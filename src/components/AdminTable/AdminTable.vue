<template>
  <v-container fluid="true">
    <v-row class="xs-12" no-gutters>
      <v-col cols="10" offset="1">
        <v-table fixed-header height="calc(100vh - 273px)">
          <AdminTableHeader />
          <AdminTableBody />
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import AdminTableHeader from "./AdminTableHeader.vue";
import AdminTableBody from "./AdminTableBody.vue";
</script>