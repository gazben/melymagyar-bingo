<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view/>
  </div>
</template>

<script>
  import AppHeader from './components/AppHeader'

  export default {
    components: {
      AppHeader
    }
  }
</script>
