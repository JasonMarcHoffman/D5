<template>
<div class="dashboard">
  <TheHeader />
  <TheDashboard />
</div>
</template>

<script>
import TheHeader from '../UI/TheHeader.vue'
import TheDashboard from '../UI/TheDashboard.vue'

export default {
  components: {
    TheHeader,
    TheDashboard
  },
  methods: {

  }
}
</script>

<style scoped>
.dashboard {
  position: relative;
  margin-top: 4rem;
  height: calc(100vh - 4rem);
}
</style>