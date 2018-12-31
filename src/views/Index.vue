<template>
  <div class="app-content">
    <bingo></bingo>
  </div>
</template>

<script>
import Bingo from '../components/Bingo'

export default {
  name: 'home',
  components: {
    Bingo,
  }
}
</script>

<style>
.app-content {
  background-image: linear-gradient(to top right, rgba(100, 0, 0, 0.7), rgba(250, 0, 0, 0.25));
  background-size: cover;
}
</style>
