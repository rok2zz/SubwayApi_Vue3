
import { defineStore } from "pinia"
import { ref, computed } from "vue"

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    const name = ref('Eduardo')

    const num: number = 1
    
    const doubleCount = computed(() => count.value * 2)
    function increment() {
        count.value += num
    }

    return { count, name, doubleCount, increment }
})