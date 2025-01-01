import { db } from '@/databases/AppDatabase'
import { provide, inject, ref } from 'vue'
import type { CartItemInfo } from './CartStore'
import type { ItemInfo } from '@/components/store/ItemInfo'

const KEY = 'history'

export type HistoryItemInfo = ItemInfo & {
  id: string
  quantity: number
  timestamp: number
}

function createHistoryStore() {
  const history = ref<HistoryItemInfo[]>([])

  async function addPurchase(item: CartItemInfo) {
    const now = new Date().getTime()
    const info: HistoryItemInfo = {
      ...item,
      quantity: item.quantity,
      timestamp: now,
      id: item.name + item.quantity + now,
    }
    history.value.unshift(info)
    await db.history.put(info)
  }

  async function loadHistory() {
    history.value = await db.history.toArray()
  }

  return {
    history,
    loadHistory,
    addPurchase,
  }
}

export function provideHistory() {
  const historyStore = createHistoryStore()
  historyStore.loadHistory()
  provide(KEY, historyStore)
  return historyStore
}

export function useHistory() {
  return inject(KEY, createHistoryStore, true) as ReturnType<typeof createHistoryStore>
}
