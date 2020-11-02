<template>
	<svg v-html="paths" :viewBox="viewBox" :width="width" :height="height"></svg>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';

	@Component
	export default class extends Vue {
		@Prop({ required: true }) private icon!: string;
		@Prop({ required: false, default: '1rem' }) private width!: string;
		@Prop({ required: false, default: '1rem' }) private height!: string;

		get viewBox(): string {
			const svgAsString: string = this.svg + '';
			const parts: string[] = svgAsString.split('viewBox="');
			const end: number = parts[1].indexOf('"');

			return parts[1].slice(0, end);
		}

		get paths(): string {
			const svgAsString: string = this.svg + '';
			const openTag: string = svgAsString.split('>')[0];
			
			return svgAsString
				.replace(openTag, '')
				.replace('>', '')
				.replace('</svg>', '');
		}

		get svg(): SVGElement {
			return require(`!html-loader!@/assets/svg/${this.icon}.svg`);
		}
	}
</script>

<style scoped lang="scss">

</style>