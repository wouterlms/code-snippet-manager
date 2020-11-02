<template>
	<component class="button"
		:is="getType"
		:type="type"
		:to="to"
		:href="href"
		:disabled="disabled"
		:secondary="secondary"
		:class="{ 'button--secondary' : secondary }"
		@click="$emit('click')"
	>
		<slot></slot>
	</component>
</template>

<script lang="ts">
	import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

	@Component
	export default class extends Vue {
		@Prop({ default: 'button' }) private type!: string;
		@Prop({ default: false }) private disabled!: boolean;
		@Prop({ default: false }) private secondary!: boolean;
		@Prop({ default: null }) private to!: string | null;
		@Prop({ default: null }) private href!: string | null;

		get getType(): string {
			if (this.to)
				return 'nuxt-link';
			else if (this.href)
				return 'a';
			return 'button';
		}
	}
</script>

<style scoped lang="scss">

.button {
	@include border-radius;

	position: relative;
	display: inline-block;

	text-align: center;

	border: none;

	&--secondary {
		// ...
	}
}

</style>