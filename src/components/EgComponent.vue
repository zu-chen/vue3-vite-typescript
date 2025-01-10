<!-- 範例: component -->
<template>
  <h1>{{ msg }}</h1>
</template>

<script lang="ts">
export default {
  props: {
    msg: {
      default: '' as string
    }
  },
  setup() {}
}
</script>

<style scoped></style>
