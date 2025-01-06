<template>
  <div class="flex flex-col gap-2 items-start" @click="openItemDrawer = true">
    <ItemImage :provider="item.provider" class="h-[120px] w-min" />
    <div class="flex flex-col items-start pl-0.5">
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
import ItemDrawer from './ItemDrawer.vue'
import ItemImage from './ItemImage.vue'
import { type ItemInfo } from './ItemInfo'
import { ref } from 'vue'

defineProps<{ item: ItemInfo }>()

const openItemDrawer = ref(false)
</script>
