<template>
  <h1>{{ msg }}</h1>
  <el-rate v-model="value1" />
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onMounted } from 'vue'
export default {
  props: {
    msg: {
      default: '' as string
    }
  },
  setup() {
    const state = reactive({
      value1: 0
    })

    onMounted(() => {
      const a = window.moment().format('YYYY-MM-DD')
      console.log('moment.js', a)
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
