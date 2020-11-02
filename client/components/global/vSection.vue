<template>
	<section>
		<slot></slot>
	</section>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';

	@Component
	export default class extends Vue {
	}
</script>

<style scoped>

section {
	
}

</style>