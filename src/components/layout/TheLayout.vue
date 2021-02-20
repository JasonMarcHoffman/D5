<template>
<div class="dashboard">
  <TheHeader />
  <div class="d-flex">
      <TheNavigation />
      <TheDashboard />
  </div>
</div>
</template>

<script>
import TheHeader from '../UI/TheHeader.vue'
import TheNavigation from '../UI/TheNavigation.vue'
import TheDashboard from '../UI/TheDashboard.vue'

export default {
  components: {
    TheHeader,
    TheNavigation,
    TheDashboard
  },
}
</script>

<style scoped>
.dashboard {
  position: relative;
  margin-top: 4rem;
  height: calc(100vh - 4rem);
}
</style>