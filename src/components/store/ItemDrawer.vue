<script setup lang="ts">
import { Drawer, DrawerContent, DrawerFooter } from '@/components/ui/drawer'
import Button from '../ui/button/Button.vue'
import type { ItemInfo } from './ItemInfo'
import SkeletonImage from '../SkeletonImage.vue'
import { ref, watch } from 'vue'
import IconHeart from '../icons/IconHeart.vue'
import IconHeartOutline from '../icons/IconHeartOutline.vue'
import { useGoals } from '@/stores/GoalsStore'

const props = defineProps<{ item: ItemInfo }>()
const emit = defineEmits<{
  (e: 'close'): void
}>()

const { addGoal, removeGoal, goals } = useGoals()
const isItemGoal = ref(Boolean(goals.value.find((it) => it.name === props.item.name)))

watch(
  goals,
  () => {
    isItemGoal.value = Boolean(goals.value.find((it) => it.name === props.item.name))
  },
  {
    immediate: true,
    once: true,
  },
)

async function toggleItemGoal() {
  if (isItemGoal.value) {
    removeGoal(props.item)
  } else {
    addGoal(props.item)
  }
  isItemGoal.value = !isItemGoal.value
}
</script>

<template>
  <Drawer shouldScaleBackground @close="emit('close')">
    <DrawerContent>
      <div class="flex flex-col gap-4 items-start">
        <SkeletonImage class="h-full w-full" />
        <div class="flex flex-col gap-2 px-4 w-full">
          <div class="flex justify-between w-full">
            <h1 class="font-bold text-2xl">{{ item.name }}</h1>
            <IconHeart v-if="isItemGoal" @click="toggleItemGoal" />
            <IconHeartOutline v-else @click="toggleItemGoal" />
          </div>
          <h2 class="text-xl">{{ item.price }} Pts</h2>
        </div>
      </div>
      <DrawerFooter>
        <Button size="lg" class="text-lg font-medium">Resgatar</Button>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
</template>
