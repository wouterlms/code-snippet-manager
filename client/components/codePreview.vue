<template>
  <div class="code-preview">
    <iframe ref="iframe"></iframe>
    <button @click="updateIframe()">update</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component
export default class extends Vue {
  iframeElement: HTMLIFrameElement | undefined

  mounted(): void {
    this.iframeElement = this.$refs.iframe as HTMLIFrameElement
    this.$root.$on('updatePreview', this.updateIframe)
  }

  beforeDestroy(): void {
    this.$root.$off('updatePreview', this.updateIframe)
  }

  async updateIframe(): Promise<void> {
    const iframeDocument = this.iframeElement!.contentWindow!.document

    const compiled: any = await this.$store.dispatch('compile', {
      sass: this.css,
      typescript: this.js,
    })

    iframeDocument.open()
    iframeDocument.write(
      this.html +
        this.withCSSTags(compiled.css || '') +
        this.withJsTags(compiled.js || '')
    )
    iframeDocument.close()
  }

  withCSSTags(css: string): string {
    return `<style>${css}</style>`
  }

  withJsTags(js: string): string {
    return '<scri' + 'pt>' + js + '</scri' + 'pt>'
  }

  get html(): string | null {
    return this.$store.getters.html
  }

  get css(): string | null {
    return this.$store.getters.css
  }

  get js(): string | null {
    return this.$store.getters.js
  }
}
</script>

<style scoped lang="scss">
.code-preview {
  height: 80vh;
  width: 100%;

  iframe {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
  }
}
</style>
