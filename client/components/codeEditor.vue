<template>
  <div class="code-editor">
    <client-only>
      <codemirror
        ref="test"
        :options="cmOptions"
        v-model="content"
        placeholder="placeholder"
        :value="value"
        @input="handleInput"
      />
    </client-only>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class extends Vue {
  @Prop({ required: true }) private readonly value!: string
  @Prop({ required: false }) private readonly lang!: string

  mounted(): void {}

  cmOptions = {
    theme: 'material-palenight',
    lineNumbers: true,
    tabSize: 2,
    mode: this.lang,
    lineWrapping: false,
    autoCloseBrackets: true,
    collapseIdentical: false,
    highlightDifferences: true,
    extraKeys: {
      'Ctrl-S': () => {
        this.$root.$emit('updatePreview')
      },
    },
  }

  content: string = this.value

  @Watch('value')
  onValueChange(value: string): void {
    this.content = value
  }

  handleInput(): void {
    this.$emit('input', this.content)
  }
}
</script>

<style scoped lang="scss">
.code-editor {
  padding: 0.5rem;
}
</style>
