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

<style>
body {
  background-color: #ab0000;
  background: url('./assets/bg.png') 192px 192px repeat;
}

.notouch {
  user-select: none;
}

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#app > .app-content {
  flex: 1 0 auto;
}
</style>

