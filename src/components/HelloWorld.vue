<script setup lang="ts">
	import { ref } from 'vue'

	defineProps<{ msg: string }>()

	const count = ref(0)

</script>

<template>
	<h1>{{ msg }}</h1>

	<div>
		<button :class="$style.card" type="button" @click="count++">count is {{ count }}</button>
	</div>
</template>

<style lang="scss" module scoped>
.card {
	background-color: red;

	border: 0px;
	border-radius: 5px;
}
</style>
