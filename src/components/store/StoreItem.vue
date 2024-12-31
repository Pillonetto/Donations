<template>
  <div class="flex flex-col gap-2 items-center">
    <img :src="image" v-if="image" />
    <SkeletonImage v-else class="rounded-lg" />
    <div class="flex flex-col items-center">
      <p>{{ name }}</p>
      <p class="font-bold">{{ price + ' Pts' }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import SkeletonImage from '../SkeletonImage.vue'
import { type StoreThumbInfo } from './StoreThumbInfo'

defineProps<StoreThumbInfo>()
</script>
