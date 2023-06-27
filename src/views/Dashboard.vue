<template>
    <div>
        This is Dashboard
    </div>

    <div>
		{{ name }} : {{ doubleCount }}
		<button @click="increment()">increment</button>
	</div>
</template>

<script setup lang="ts">
const count = ref(0)
const name = ref('Eduardo')

const num: number = 1

const doubleCount = computed(() => count.value * 2)
function increment() {
    count.value += num
}
</script>

<style lang="scss" module scoped>

</style>