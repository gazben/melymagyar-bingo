<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view/>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
  import AppHeader from './components/AppHeader'
  import AppFooter from './components/AppFooter'

  export default {
    components: {
      AppHeader,
      AppFooter
    }
  }
</script>
