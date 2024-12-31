import type { ItemInfo } from '@/components/store/ItemInfo'
import { db } from '@/databases/AppDatabase'
import { provide, inject, ref } from 'vue'

const KEY = 'goals'

function createGoalsStore() {
  const goals = ref<ItemInfo[]>([])

  async function addGoal(item: ItemInfo) {
    goals.value.unshift(item)
    await db.goals.put(item)
  }

  async function removeGoal(item: ItemInfo) {
    goals.value = goals.value.filter((it) => it.name !== item.name)
    await db.goals.delete(item.name)
  }

  async function loadGoals() {
    goals.value = await db.goals.toArray()
  }

  return {
    goals,
    loadGoals,
    removeGoal,
    addGoal,
  }
}

export function provideGoals() {
  const goalsStore = createGoalsStore()
  provide(KEY, goalsStore)
  return goalsStore
}

export function useGoals() {
  return inject(KEY, createGoalsStore, true) as ReturnType<typeof createGoalsStore>
}
