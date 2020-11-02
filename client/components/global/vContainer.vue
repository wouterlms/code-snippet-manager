<template>
	<div class="container">
		<slot></slot>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	@Component
	export default class extends Vue {
		
	}
</script>

<style scoped lang="scss">

.container {
	
}

</style>