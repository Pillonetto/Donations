import type { ItemInfo } from '@/components/store/ItemInfo'
import { provide, inject, ref } from 'vue'
import { useHistory } from './HistoryStore'

export type CartItemInfo = ItemInfo & {
  quantity: number
}

const KEY = 'cart'
const INITIAL_POINTS = 500

function createCartStore() {
  const cart = ref<CartItemInfo[]>([])
  const currentPoints = ref(INITIAL_POINTS)

  const { addPurchase } = useHistory()

  async function addItem(item: ItemInfo) {
    const index = cart.value.findIndex((it) => it.name === item.name)
    if (index !== -1) {
      const cartItem = cart.value[index]
      if (cartItem) {
        cartItem.quantity++
      }
    } else {
      cart.value.push({ ...item, quantity: 1 })
    }
  }

  async function removeItem(item: ItemInfo) {
    const index = cart.value.findIndex((it) => it.name === item.name)
    if (index !== -1) {
      const cartItem = cart.value[index]
      if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity--
      } else {
        cart.value = cart.value.filter((it) => it.name !== item.name)
      }
    }
  }

  function checkoutCart() {
    const totalPoints = cart.value.reduce((acc, item) => acc + item.price * item.quantity, 0)
    if (totalPoints > currentPoints.value) {
      return false
    }
    cart.value.forEach(addPurchase)
    cart.value = []
    currentPoints.value -= totalPoints
    currentPoints.value = Math.max(0, currentPoints.value)
    return true
  }

  return {
    cart,
    currentPoints,
    addItem,
    removeItem,
    checkoutCart,
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
