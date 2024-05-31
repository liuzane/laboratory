<script lang="ts">
import { onMounted, ref, getCurrentInstance } from 'vue'

export default {
  setup(props, ctx) {
    const that: any = getCurrentInstance();
    const count = ref(0)
    const list = ref(['a', 'b', 'c'])
    const itemRefs = ref([])

    onMounted(() => {
      console.log("Mounted - ok");
      console.log(itemRefs);
      console.log(that.refs);
    })

    return {
      count,
      list,
      itemRefs
    }
  },
}
</script>

<template>
  <button type="button" @click="count++">count is {{ count }}</button>
  <ul>
    <li v-for="(item, index) in list" :key="index" :ref="item + '_' + index">{{ item }}</li>
  </ul>
  <p class="foo mr-2">Foo Component</p>
</template>

<style scoped>
.foo {
  color: red;
}
</style>
