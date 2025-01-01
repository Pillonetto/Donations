<template>
  <PageLayout>
    <img :src="map" class="h-full w-full" />
  </PageLayout>
</template>
<script setup lang="ts">
import PageLayout from '@/components/PageLayout.vue'
import map from '@/assets/map.png'
</script>
