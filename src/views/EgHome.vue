<!-- 範例: view -->
<template>
  <EgComponent msg="Vite + Vue" />
</template>

<script lang="ts">
import { reactive, toRefs, onMounted } from 'vue'
import EgComponent from '@/components/EgComponent.vue'
export default {
  props: {},
  components: { EgComponent },
  setup() {
    const state = reactive({})
    // 範例: API
    const getVersion = async () => {
      try {
        const res = await window.api.request('queryInsurance', {
          param: {
            agentId: ''
          }
        })
        window.api.responseHandler(res, () => {})
      } catch (error) {
        console.error(error)
      }
    }
    onMounted(() => {
      getVersion()
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>

<style scoped></style>
