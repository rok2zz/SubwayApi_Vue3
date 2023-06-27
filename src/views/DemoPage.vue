<template>
    <div>
        Demo Page
    </div>

    <div>
		{{ name }} : {{ doubleCount }}
		<button @click="store.increment">increment</button>
	</div>
</template>
<style scoped>

</style>

<script setup lang="ts">
import { useCounterStore } from "@stores/index.ts"
import { storeToRefs } from "pinia"

const store = useCounterStore();

const { name, doubleCount } = storeToRefs(store);

</script>