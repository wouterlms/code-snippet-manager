<template>
  <div>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component
export default class extends Vue {
  mounted(): void {
    ;(window as any).CodeMirror = require('codemirror')

    require('@/plugins/codemirror/modes/html.js')
    require('@/plugins/codemirror/modes/css.js')
    require('@/plugins/codemirror/modes/javascript.js')
    require('@/plugins/codemirror/addons/closebrackets.js')

    Vue.use(require('vue-codemirror'))
  }
}
</script>

<style lang="scss">
body {
  background: $primary-light;
  color: $primary-dark;
}

body,
input,
textarea,
button {
  @include sans-serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

p {
  line-height: 1.6;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
