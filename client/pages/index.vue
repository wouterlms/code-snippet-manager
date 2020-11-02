<template>
  <div class="index">
    <code-editors />
    <code-preview />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component
export default class extends Vue {}
</script>

<style scoped lang="scss">
.index {
  display: flex;
}
</style>
