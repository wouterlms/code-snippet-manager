<template>
  <div class="code-editors">
    <code-editor lang="text/html" v-model="html" />
    <code-editor lang="text/css" v-model="css" />
    <code-editor lang="text/javascript" v-model="js" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component
export default class extends Vue {
  html: string = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document Title</title>
</head>
<body>
  
</body>
</html>`
  css: string = `@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');

* {
  padding: 0;
  margin: 0;
}

body {
  font-family: 'Open Sans', sans-serif;
}`
  js: string = '// JavaScript | TypeScript'

  @Watch('html', { immediate: true })
  onHtmlChange(html: string): void {
    this.$store.commit('SET_HTML', html)
  }

  @Watch('css', { immediate: true })
  onCssChange(css: string): void {
    this.$store.commit('SET_CSS', css)
  }

  @Watch('js', { immediate: true })
  onJsChange(js: string): void {
    this.$store.commit('SET_JS', js)
  }
}
</script>

<style scoped lang="scss">
.code-editors {
  max-width: 800px;
}
</style>
