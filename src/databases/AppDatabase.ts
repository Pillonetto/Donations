import type { ItemInfo } from '@/components/store/ItemInfo'
import type { HistoryItemInfo } from '@/stores/HistoryStore'
import Dexie, { type EntityTable } from 'dexie'

const db = new Dexie('GoalsDatabase') as Dexie & {
  goals: EntityTable<ItemInfo, 'name'>
  history: EntityTable<HistoryItemInfo, 'id'>
}

// Schema declaration:
db.version(1).stores({
  goals: 'name, price, image, description, provider',
  history: 'id, price, image, description, provider, quantity, timestamp',
})

export { db }
