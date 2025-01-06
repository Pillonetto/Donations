<template>
  <div class="flex gap-4 h-[80px] items-center px-4">
    <div class="w-2/5">
      <ItemImage :provider="cartItemInfo.provider" class="w-full h-full rounded-lg" />
    </div>
    <div class="flex flex-col justify-between w-full grow-0 gap-2">
      <div class="flex flex-col">
        <h1 class="font-bold">{{ cartItemInfo.name }}</h1>
        <p class="text-neutral-400">Cupom</p>
      </div>
      <div class="flex items-center justify-between">
        <p v-if="timestamp" class="text-neutral-400">
          {{ new Date(timestamp).toLocaleString() }}
        </p>
        <div class="flex gap-2 items-center" v-else>
          <button class="rounded-full bg-neutral-200 size-8 items-center justify-center flex">
            <IconMinus class="text-highlight" @click="removeQuantity" />
          </button>
          <span>{{ cartItemInfo.quantity }}</span>
          <button class="rounded-full bg-neutral-200 size-8 items-center justify-center flex">
            <IconPlus class="text-highlight" @click="addQuantity" />
          </button>
        </div>
        <p class="font-bold text-lg">{{ cartItemInfo.price * cartItemInfo.quantity }} Pts</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { CartItemInfo } from '@/stores/CartStore'
import IconPlus from '../icons/IconPlus.vue'
import IconMinus from '../icons/IconMinus.vue'
import { useCart } from '@/stores/CartStore'
import ItemImage from './ItemImage.vue'

const props = defineProps<{
  cartItemInfo: CartItemInfo
  timestamp?: number
}>()

const { addItem, removeItem } = useCart()

function addQuantity() {
  addItem(props.cartItemInfo)
}

function removeQuantity() {
  removeItem(props.cartItemInfo)
}
</script>
