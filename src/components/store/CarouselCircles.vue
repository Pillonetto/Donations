<template>
  <div class="flex gap-2 items-center justify-center h-4">
    <div
      v-for="circle in count"
      :key="circle"
      class="rounded-full size-2"
      :class="selected === circle ? 'bg-highlight' : 'bg-neutral-400'"
    ></div>
  </div>
</template>
<script setup lang="ts">
defineProps<{ selected: number; count: number }>()
</script>
