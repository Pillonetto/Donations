<script setup lang="ts">
import { Drawer, DrawerContent, DrawerFooter } from '@/components/ui/drawer'
import Button from '../ui/button/Button.vue'
import type { ItemInfo } from './ItemInfo'
import { ref, watch } from 'vue'
import IconHeart from '../icons/IconHeart.vue'
import IconHeartOutline from '../icons/IconHeartOutline.vue'
import { useGoals } from '@/stores/GoalsStore'
import { useCart } from '@/stores/CartStore'
import { useToast } from '../ui/toast'
import ItemImage from './ItemImage.vue'

const props = defineProps<{ item: ItemInfo }>()
const emit = defineEmits<{
  (e: 'close'): void
}>()

const { addGoal, removeGoal, goals } = useGoals()
const isItemGoal = ref(Boolean(goals.value.find((it) => it.name === props.item.name)))

const { addItem } = useCart()
const { toast } = useToast()

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
async function addItemToCart() {
  await addItem(props.item)
  emit('close')
  toast({
    title: 'Item Adicionado ao Carrinho',
    description: props.item.name,
  })
}
</script>

<template>
  <Drawer shouldScaleBackground @close="emit('close')">
    <DrawerContent>
      <div class="flex flex-col gap-4 items-start">
        <ItemImage class="h-full w-full" :provider="item.provider" />
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
        <Button size="lg" class="text-lg font-medium" @click="addItemToCart">Resgatar</Button>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
</template>
