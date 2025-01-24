<template>
  <HelloWorld msg="Vite + Vue" />
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  components: { HelloWorld },
  setup() {
    const state = reactive({})
    return {
      ...toRefs(state)
    }
  }
}
</script>

<style scoped></style>
