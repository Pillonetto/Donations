<template>
  <RouterLink :to="to ?? '/settings'" class="w-full flex items-center justify-between px-4 py-4">
    <p class="text-lg">{{ title }}</p>
    <IconChevronRight class="size-4 text-black" />
  </RouterLink>
</template>
<script setup lang="ts">
import IconChevronRight from '../icons/IconChevronRight.vue'

defineProps<{
  title: string
  to?: string
}>()
</script>
