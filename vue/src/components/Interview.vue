<script setup lang="ts">
import { onMounted, ref } from 'vue'

const count = ref(0)
const list = ref(['d', 'e', 'f'])

onMounted(() => {
  console.log("Mounted - ok");
})
</script>

<template>
  <div>hello</div>
</template>

<style scoped>
.bar {
  color: red;
}
</style>
