<template>
  <div class="input-wrapper" :class="{ 'input-wrapper--focused': isFocused }">
    <v-svg v-if="icon" :icon="icon"></v-svg>
    <input
      ref="input"
      v-model="content"
      spellcheck="false"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="handleInput"
      @focus="onFocus"
      @blur="onBlur"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop({ required: true }) value!: string
  @Prop({ default: 'text' }) type!: string
  @Prop({ default: '' }) placeholder!: string
  @Prop() icon!: string

  isFocused: boolean = false
  content: string = this.value

  @Watch('value')
  onValueChange(value: string): void {
    this.content = value
  }

  handleInput(): void {
    this.$emit('input', this.content)
  }

  onFocus(): void {
    this.isFocused = true
  }

  onBlur(): void {
    this.isFocused = false
  }
}
</script>

<style scoped lang="scss">
.input-wrapper {
  @include border-radius;
  @include default-transition;

  display: flex;
  align-items: center;
  border: 1px solid $primary-dark;

  &--focused {
    // ...
  }
}

input[type='text'],
input[type='password'],
input[type='email'],
textarea {
  display: inline-block;
  width: 100%;
  border: none;
  background: transparent;
}
</style>
