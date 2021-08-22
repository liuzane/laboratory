<template>
  <div>
    <p>
      <router-link to="/home">Go to Home</router-link>
    </p>
    <p>
      <router-link to="/view-ui">Go to view-ui</router-link>
    </p>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>

</style>
