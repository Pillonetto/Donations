import { SafeArea, type SafeAreaInsets } from 'capacitor-plugin-safe-area'
import { provide, inject, ref } from 'vue'

const KEY = 'safeArea'

function createSafeAreaStore() {
  const safeArea = ref<SafeAreaInsets | null>(null)

  async function init() {
    safeArea.value = await SafeArea.getSafeAreaInsets()
  }

  return {
    safeArea,
    init,
  }
}

export function provideSafeArea() {
  const safeAreaStore = createSafeAreaStore()
  provide(KEY, safeAreaStore)
  return safeAreaStore
}

export function useSafeArea() {
  return inject(KEY, createSafeAreaStore, true) as ReturnType<typeof createSafeAreaStore>
}
