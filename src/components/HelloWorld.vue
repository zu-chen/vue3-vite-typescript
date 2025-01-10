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

    const getVersion = async () => {
      try {
        const res = await window.api.request('getVersion', {
          method: 'getAPI'
        })
        window.api.responseHandler(res, () => {})
      } catch (error) {
        console.error(error)
      }
    }

    const queryInsurance = async () => {
      try {
        const res = await window.api.request('queryInsurance', {
          method: 'getAPI',
          param: {
            page: 1,
            limit: 10,
            keyword: 'search'
          }
        })
        window.api.responseHandler(res, () => {})
      } catch (error) {
        console.error(error)
      }
    }

    onMounted(() => {
      const a = window.moment().format('YYYY-MM-DD')
      console.log('moment.js', a)

      getVersion()
      queryInsurance()
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
