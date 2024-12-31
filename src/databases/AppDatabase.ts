import type { ItemInfo } from '@/components/store/ItemInfo'
import Dexie, { type EntityTable } from 'dexie'

const db = new Dexie('GoalsDatabase') as Dexie & {
  goals: EntityTable<ItemInfo, 'name'>
}

// Schema declaration:
db.version(1).stores({
  goals: 'name, price, image, description',
})

export { db }
