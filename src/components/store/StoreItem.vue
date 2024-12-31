<template>
  <div class="flex flex-col gap-2 items-center" @click="openItemDrawer = true">
    <img :src="item.image" v-if="item.image" />
    <SkeletonImage v-else class="rounded-lg" />
    <div class="flex flex-col items-center">
      <p>{{ item.name }}</p>
      <p class="font-bold">{{ item.price + ' Pts' }}</p>
    </div>
    <ItemDrawer
      v-if="openItemDrawer"
      :item="item"
      @close="openItemDrawer = false"
      v-model:open="openItemDrawer"
    />
  </div>
</template>
<script setup lang="ts">
import SkeletonImage from '../SkeletonImage.vue'
import ItemDrawer from './ItemDrawer.vue'
import { type ItemInfo } from './ItemInfo'
import { ref } from 'vue'

defineProps<{ item: ItemInfo }>()

const openItemDrawer = ref(false)
</script>
