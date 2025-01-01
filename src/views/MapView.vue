<template>
  <PageLayout>
    <img :src="map" class="h-full w-full" @click="showDetailsDrawer = true" />
    <LocationDrawer
      v-if="showDetailsDrawer"
      v-model:open="showDetailsDrawer"
      @close="showDetailsDrawer = false"
    />
  </PageLayout>
</template>
<script setup lang="ts">
import PageLayout from '@/components/PageLayout.vue'
import map from '@/assets/map.png'
import { ref } from 'vue'
import LocationDrawer from '@/components/map/LocationDrawer.vue'

const showDetailsDrawer = ref(false)
</script>
