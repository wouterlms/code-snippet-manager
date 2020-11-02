<template>
	<component :is="tag" class="title">
		<slot></slot>
	</component>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';

	@Component
	export default class extends Vue {
		@Prop({ required: false, default: 'h1' }) tag!: string;
	}
</script>

<style scoped lang="scss">

.title {
	
}

</style>