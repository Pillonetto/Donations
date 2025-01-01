import type { ItemInfo } from '@/components/store/ItemInfo'
import { provide, inject, ref } from 'vue'

type CartItemInfo = {
  item: ItemInfo
  quantity: number
}

const KEY = 'cart'

function createCartStore() {
  const cart = ref<CartItemInfo[]>([])

  async function addItem(item: ItemInfo) {
    const index = cart.value.findIndex((it) => it.item.name === item.name)
    if (index !== -1) {
      const cartItem = cart.value[index]
      if (cartItem) {
        cartItem.quantity++
      }
    } else {
      cart.value.push({ item, quantity: 1 })
    }
  }

  async function removeItem(item: ItemInfo) {
    const index = cart.value.findIndex((it) => it.item.name === item.name)
    if (index !== -1) {
      const cartItem = cart.value[index]
      if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity--
      } else {
        cart.value = cart.value.filter((it) => it.item.name !== item.name)
      }
    }
  }

  return {
    cart,
    addItem,
    removeItem,
  }
}

export function provideCart() {
  const cartSTore = createCartStore()
  provide(KEY, cartSTore)
  return cartSTore
}

export function useCart() {
  return inject(KEY, createCartStore, true) as ReturnType<typeof createCartStore>
}
