<script setup lang="ts">
import { onMounted, ref } from 'vue'

const count = ref(0)
const list = ref(['d', 'e', 'f'])
const itemRefs = ref([])

onMounted(() => {
  console.log("Mounted - ok");
  console.log(itemRefs);
})
</script>

<template>
  <button type="button" @click="count++">count is {{ count }}</button>
  <ul>
    <li v-for="(item, index) in list" :key="index" ref="itemRefs">{{ item }}</li>
  </ul>
  <p class="bar mr-2">Bar Component</p>
</template>

<style scoped>
.bar {
  color: red;
}
</style>
