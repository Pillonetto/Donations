<script setup lang="ts">
import { useSafeArea } from '@/stores/SafeAreaStore'
import NavigationBar from './NavigationBar.vue'
import { onMounted, ref } from 'vue'

const navBarContainer = ref<HTMLDivElement | null>(null)
const navBarHeight = ref(0)

const { safeArea } = useSafeArea()

defineProps({
  noNav: Boolean,
})

onMounted(() => {
  navBarHeight.value = navBarContainer.value?.clientHeight ?? 0
})
</script>

<template>
  <div
    class="h-screen w-screen relative overflow-hidden"
    :style="{
      paddingBottom: `${safeArea?.insets.top ?? 0}px`,
    }"
  >
    <div
      class="w-full overflow-scroll"
      :style="{
        height: `calc(100vh - ${navBarHeight ?? 0}px)`,
      }"
    >
      <slot></slot>
    </div>
    <div class="absolute bottom-0 w-full bg-neutral-100" ref="navBarContainer">
      <NavigationBar
        v-if="!noNav"
        :style="{
          paddingBottom: `${safeArea?.insets.bottom ?? 0}px`,
        }"
      />
    </div>
  </div>
</template>
