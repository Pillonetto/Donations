<template>
  <div class="flex gap-4 h-[80px] items-center px-4">
    <div class="w-2/5">
      <img v-if="cartItemInfo.item.image" :src="cartItemInfo.item.image" alt="Item Image" />
      <SkeletonImage v-else class="w-full h-full" />
    </div>
    <div class="flex flex-col justify-between w-full grow-0 gap-2">
      <div class="flex flex-col">
        <h1 class="font-bold">{{ cartItemInfo.item.name }}</h1>
        <p class="text-neutral-400">Cupom</p>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex gap-2 items-center">
          <button class="rounded-full bg-neutral-200 size-8 items-center justify-center flex">
            <IconMinus class="text-highlight" @click="removeQuantity" />
          </button>
          <span>{{ cartItemInfo.quantity }}</span>
          <button class="rounded-full bg-neutral-200 size-8 items-center justify-center flex">
            <IconPlus class="text-highlight" @click="addQuantity" />
          </button>
        </div>
        <p class="font-bold text-lg">{{ cartItemInfo.item.price * cartItemInfo.quantity }} Pts</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { CartItemInfo } from '@/stores/CartStore'
import SkeletonImage from '../SkeletonImage.vue'
import IconPlus from '../icons/IconPlus.vue'
import IconMinus from '../icons/IconMinus.vue'
import { useCart } from '@/stores/CartStore'

const props = defineProps<{
  cartItemInfo: CartItemInfo
}>()

const { addItem, removeItem } = useCart()

function addQuantity() {
  addItem(props.cartItemInfo.item)
}

function removeQuantity() {
  removeItem(props.cartItemInfo.item)
}
</script>
